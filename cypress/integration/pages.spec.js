describe('each page', () => {

    const verifyPageHeaderContains = (content) =>
        cy.findByTestId('page-header')
            .should('be.visible')
            .contains(content);

    it('renders layout elements', () => {
        cy.visit('/');

        cy.findByTestId('desktop-brand')
            .contains('Willow Grace Wellness')
            .should('have.attr', 'href')
            .and('include', '/');

        cy.findByTestId('desktop-navbar')
            .within($navbar => {
                const navItems = [{
                    text: /about/i, href: '/about'
                }, {
                    text: /services/i, href: '/services'
                }, {
                    text: /clients/i
                }, {
                    text: /favorites/i
                }, {
                    text: /contact/i, href: '/contact'
                },];
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


        cy.findByTestId('desktop-navbar')
            .within($navbar => {
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

        cy.get('@actionButton')
            .click();
        cy.url().should('include', '/services');
    });

    it('renders services page', () => {
        cy.visit('/services');

        verifyPageHeaderContains(/services/i);

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

            cy.findAllByTestId('lab-card')
                .should('have.length.gte', 1);

        });
        // it.todo('renders lab item page');
    });

    describe('favorites pages', () => {
        it('renders favorites page', () => {
            cy.visit('/products');
            verifyPageHeaderContains(/favorites/i);

            cy.findAllByTestId('fav-category-heading')
                .should('have.length.gte', 1);

            cy.findAllByTestId('fav-card')
                .as('favCards')
                .should('have.length.gte', 1);
        });
        // it.todo('renders favorite item page');
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
