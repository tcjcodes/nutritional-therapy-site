describe('each page', () => {
  // some titles are dynamic
  const verifyPageHeaderVisible = () =>
    cy.findByTestId('page-header').should('be.visible');

  const verifyPageHeaderContains = (content) =>
    verifyPageHeaderVisible().contains(content);

  it('renders layout elements', () => {
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

    cy.findByRole('button', { name: /request an appointment/i })
      .should('be.visible')
      .click();

    cy.url().should('include', '/contact');
  });

  describe('clients page', () => {
    it('renders forms page with documents', () => {
      cy.visit('/new-clients');

      verifyPageHeaderContains(/new clients/i);

      cy.findByRole('link', { name: /Initial Interview/ })
        .as('interviewLink')
        .should('have.attr', 'href')
        .and('include', '/documents/forms/InitialInterview.pdf');

      cy.findByRole('link', { name: /Disclaimer/ })
        .should('have.attr', 'href')
        .and('include', '/documents/forms/Disclaimer.pdf');

      cy.findByRole('link', { name: /contact/ }).click();

      cy.url().should('include', '/contact');
    });

    // it.todo('renders lab item page');
  });

  it('renders labs page with several lab test items', () => {
    cy.visit('/labs');

    verifyPageHeaderContains(/lab testing/i);

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
      // cy.findByTestId('product-content').should('be.visible');

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

  it('renders contact page', () => {
    cy.visit('/contact');
    verifyPageHeaderContains(/contact/i);

    cy.findByText('send a message');

    cy.findByRole('button', { name: /submit/ })
      .should('have.attr', 'type')
      .and('eq', 'submit');

    // it.todo('submits form') mock POST req
  });

  // Fails when run locally
  it('renders 404 page for nonexistent routes', () => {
    cy.visit('/invalid-route', { failOnStatusCode: false });

    cy.contains('Page not found');
  });
});
