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
          text: /clients/i,
        },
        {
          text: /favorites/i,
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
      cy.findByTestId('nav-dropdown-menu--Clients');

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

  describe('clients pages', () => {
    it('renders forms page with documents', () => {
      cy.visit('/client-forms');

      verifyPageHeaderContains(/forms/i);

      cy.findByRole('link', { name: /Initial Interview/ })
        .as('interviewLink')
        .should('have.attr', 'href')
        .and('include', '/documents/forms/InitialInterview.pdf');

      cy.findByRole('link', { name: /Disclaimer/ })
        .should('have.attr', 'href')
        .and('include', '/documents/forms/Disclaimer.pdf');
    });

    it('renders labs page with several lab test items', () => {
      cy.visit('/labs');

      verifyPageHeaderContains(/lab testing/i);

      cy.findAllByTestId('lab-card').should('have.length.gte', 1);
    });
    // it.todo('renders lab item page');
  });

  describe.only('favorites pages', () => {
    it('renders favorites page that navigates to items page', () => {
      cy.visit('/products');
      verifyPageHeaderContains(/favorites/i);

      cy.findAllByTestId('fav-category-heading').should('have.length.gte', 1);

      cy.findAllByTestId('fav-card-link')
        .as('favCardLinks')
        .should('have.length.gte', 1);

      cy.get('@favCardLinks').first().click();

      cy.url().should('match', /\/products\/\w+/);
      cy.findAllByTestId('breadcrumb-link')
        .as('breadcrumbs')
        .should('have.length', 2);

      cy.get('@breadcrumbs').should(([allFavsLink, categoryLink]) => {
        expect(allFavsLink).to.have.attr('href').eq('/products');
        expect(allFavsLink).to.have.text('favorites');

        expect(categoryLink)
          .to.have.attr('href')
          .matches(/\/product-categories\/\w+/);
        expect(categoryLink).to.include.text('favorites');
      });

      cy.get('@breadcrumbs').eq(1).as('categoryLink');

      cy.findByRole('button', { name: 'Buy Item' }).should((buyLink) => {
        expect(buyLink).to.have.attr('href');
        expect(buyLink).to.have.attr('target', '_blank');
        expect(buyLink).to.have.attr('rel', 'noopener noreferrer');
      });

      cy.findByTestId('product-content').should('be.visible');

      cy.get('@categoryLink').click();
      cy.url().should('match', /\/product-categories\/\w+/);

      verifyPageHeaderContains(' Favorites');
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

    cy.get('address').contains('9050 W Overland Rd #135');
    cy.get('address').contains('Boise, ID 83709');
    cy.findByRole('link', { name: 'Directions' })
      .should('be.visible')
      .and('have.attr', 'href')
      .and('eq', 'https://goo.gl/maps/xBhPNMVmz96YwTs86');

    // it.todo('submits form') mock POST req
  });
});
