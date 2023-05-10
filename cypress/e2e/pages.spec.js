describe('each page', () => {
  // some titles are dynamic
  const verifyPageHeaderVisible = () =>
    cy.findByTestId('page-header').should('be.visible');

  const verifyPageHeaderContains = (content) =>
    verifyPageHeaderVisible().contains(content);

  it('renders shared layout elements', () => {
    cy.visit('/');

    cy.findByTestId('desktop-brand')
    .contains('Willow Grace Wellness')
    .should('have.attr', 'href')
    .and('include', '/');

    cy.findByTestId('tablet-brand').should('not.be.visible');

    cy.findByTestId('desktop-navbar').within(($navbar) => {
      const navItems = [
        {
          text: /about/i,
          href: '/about',
        },
        {
          text: /services/i,
          href: '/services',
        },
        {
          text: /testimonials/i,
          href: '/testimonials',
        },
        {
          text: /favorites/i,
        },
        {
          text: /new clients/i,
          href: '/new-clients',
        },
        {
          text: /labs/i,
          href: '/labs',
        },
        {
          text: /contact/i,
          href: '/contact',
        },
      ];
      navItems.forEach(({ text, href }) => {
        cy.findByText(text).as('navbarItem');

        if (href) {
          cy.get('@navbarItem')
          .should('be.visible')
          .and('have.attr', 'href')
          .and('include', href);
        }
      });
    });

    cy.findByTestId('desktop-navbar').within(($navbar) => {
      // TODO: Test dropdowns with hover
      //  https://docs.cypress.io/api/commands/hover#Workarounds
      //     .trigger('mouseover');
      // cy.findByTestId('nav-dropdown-menu--Forms')
      //     .contains('forms')
      //     .should('be.visible');
      // cy.findByTestId('nav-dropdown-menu--Labs')
      //     .contains('labs')
      //     .should('be.visible');
    });

    cy.get('footer').contains('Copyright Willow Grace Wellness 2020');
  });

  it('renders landing page', () => {
    cy.visit('/');

    cy.findByTestId('landing-title').should('be.visible');
    cy.findByTestId('landing-subtitle').should('be.visible');
    cy.findByRole('button', { name: /learn more/i })
    .should('be.visible')
    .as('actionButton');

    cy.get('@actionButton').click();
    cy.url().should('include', '/services');
  });

  it('renders about page', () => {
    cy.visit('/about');

    verifyPageHeaderVisible();
    cy.findByRole('img', { name: 'Caroline' }).should('be.visible');
    cy.findByTestId('about-content').should('be.visible');
  });

  it('renders services page', () => {
    cy.visit('/services');

    verifyPageHeaderVisible();

    cy.findByTestId('services-content')
    .contains(/Disclaimer/i)
    .should('be.visible');

    cy.findByRole('button', { name: /request appointment/i })
    .should('be.visible')
    .click();

    cy.url().should('include', '/contact');
  });

  it('renders testimonials page', () => {
    cy.visit('/testimonials');

    verifyPageHeaderVisible();

    const expectedCount = 3;

    cy
    .get('.columns picture img')
    .should('have.lengthOf', expectedCount)
    .and('be.visible')
    .and('have.attr', 'alt');

    cy.findAllByTestId('testimonial')
    .should('have.lengthOf', expectedCount)
    .and('be.visible');
  });

  describe('clients page', () => {
    it('renders new clients page', () => {
      cy.visit('/new-clients');

      verifyPageHeaderContains(/new clients/i);

      // Links
      cy.findByRole('link', { name: /free 20 minute consultation/i }).should(
        'have.attr', 'href').and('eq', '/services');
      cy.findByRole('link', { name: /send a message/i }).as('contactLink');

      // Forms
      cy.findByRole('link', { name: /Initial Interview/ })
      .as('interviewLink')
      .should('have.attr', 'href')
      .and('eq', '/documents/forms/InitialInterview.pdf');
      cy.findByRole('link', { name: /Disclaimer/ })
      .should('have.attr', 'href')
      .and('eq', '/documents/forms/Disclaimer.pdf');

      cy.get('@contactLink').click();
      cy.url().should('include', '/contact');
    });

    // it.todo('renders lab item page');
  });

  it('renders labs page with several lab test items', () => {
    cy.visit('/labs');

    verifyPageHeaderContains(/lab tests/i);

    cy.findAllByTestId('lab-card').should('have.length.gte', 1);
  });

  describe('favorites pages', () => {
    it('renders favorites page that navigates to items page', () => {
      // test(favorites page)
      cy.visit('/products');
      verifyPageHeaderContains(/favorites/i);

      cy.findAllByTestId('fav-category-heading').should('have.length.gte', 1);
      cy.findAllByTestId('fav-card-link')
      .as('favCardLinks')
      .should('have.length.gte', 1);

      cy.get('@favCardLinks').first().click();

      // test(item page)
      cy.url().should('match', /\/products\/\w+/);
      cy.findByTestId('product-title');
      cy.findByTestId('affiliate-disclaimer').should('be.visible');

      cy.findAllByTestId('breadcrumb-link')
      .as('breadcrumbs')
      .should('have.length', 2);

      const categoryRouteRegex = /\/product-categories\/\w+/;
      cy.get('@breadcrumbs').should(([allFavsLink, categoryLink]) => {
        expect(allFavsLink).to.have.attr('href').eq('/products');
        expect(allFavsLink).to.have.text('favorites');

        expect(categoryLink).to.have.attr('href').matches(categoryRouteRegex);
      });
      cy.get('@breadcrumbs').eq(1).as('categoryLink');

      cy.findByRole('button', { name: 'Buy Item' }).should((buyLink) => {
        expect(buyLink).to.have.attr('href');
        expect(buyLink).to.have.attr('target', '_blank');
        expect(buyLink).to.have.attr('rel', 'noopener noreferrer');
      });

      cy.get('@categoryLink').click();

      // test(category page)
      cy.url().should('match', categoryRouteRegex);

      verifyPageHeaderContains('Favorite ');
      cy.findByTestId('fav-category-description').should('be.visible');
      cy.contains('Back to all')
      .should('have.attr', 'href')
      .and('eq', '/products/');
      cy.findAllByTestId('fav-card-link')
      .as('favCardLinks')
      .should('have.length.gte', 1);
    });
  });

  describe('contact', () => {
    const formRouteConfig = {
      url: '/',
      method: 'POST',
    };

    const firstName = 'Cypress';
    const lastName = 'Mock';
    const email = 'test@boisewgw.com';
    const otherSubject = 'TEST';
    const message = 'This is from a test';

    const fillInForm = () => {
      cy.findByPlaceholderText(/First Name/).type(
        firstName);
      cy.findByPlaceholderText(/Last Name/).type(
        lastName);
      cy.findByPlaceholderText(/E-mail/).type(email);
      cy.get('select').select('Other');
      cy.findByPlaceholderText(/Subject/)
      .should('be.visible')
      .as('subjectInput');
      cy.get('@subjectInput')
      .type(otherSubject);
      cy.findByPlaceholderText(/Message/).type(message);
    };

    it('renders contact page and submits form (local only)', () => {
      cy.intercept(formRouteConfig, (req) => {
        req.reply(204);
      }).as('submitReq');

      cy.visit('/contact');

      cy.get('form')
      .should('be.visible');

      verifyPageHeaderContains(/contact/i);

      cy.contains(/send a message/i);

      cy.findByRole('button', { name: /submit/ })
      .as('submitBtn');

      cy.get('@submitBtn')
      .should('be.visible');

      cy.get('@submitBtn')
      .should('have.attr', 'type')
      .and('eq', 'submit');

      fillInForm();
      cy.get('input:invalid').should('not.exist');

      if (Cypress.env('LOCAL_MODE')) {
        cy.get('@submitBtn').click();
        cy.wait('@submitReq')
        .its('request.body')
        .should(
          'eq',
          new URLSearchParams({
            'form-name': 'contact',
            firstName: firstName,
            lastName: lastName,
            email: email,
            subject: 'otherSubject',
            otherSubject: otherSubject,
            message: message,
          }).toString(),
        );

        cy.contains('Sent!');
      } else {
        cy.log('Not LOCAL_MODE, skipping submit');
      }
    });

    it('has form error handling after submit (local only)', () => {
      cy.visit('/contact');

      cy.get(':invalid')
      // form + required inputs
      .should('have.length', 6);

      fillInForm();

      cy.get(':invalid')
      .should('have.length', 0);

      const errorBanner = 'Oh no!';
      cy.contains(errorBanner).as('errorBanner')

      cy.get('@errorBanner').should('not.be.visible');

      cy.findByRole('button', { name: /submit/ })
      .as('submitBtn');

      cy.get('@submitBtn').should('not.be.disabled');

      if (Cypress.env('LOCAL_MODE')) {
        cy.intercept(formRouteConfig, { forceNetworkError: true }).as(
          'submitReq',
        );

        cy.get('@submitBtn').click();

        cy.get('input:invalid').should('not.exist');
        cy.get('@errorBanner').should('be.visible');

        cy.findByRole('link', { name: 'caroline@boisewgw.com' })
        .should('be.visible');

        cy.get('@submitBtn').should('be.disabled');

      } else {
        cy.log('Not LOCAL_MODE, skipping submit');
      }
    });
  });

  it('renders custom 404 page for invalid routes', () => {
    cy.visit('/invalid-route', { failOnStatusCode: false });

    if (Cypress.env('LOCAL_MODE')) {
      cy.contains('Gatsby.js development 404 page');
      cy.get('button').click();
      return cy.contains('Page not found');
    } else {
      return cy.contains('Page not found');
    }
  });
});
