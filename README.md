# Willow Grace Wellness Website
Official website for a nutritional therapist, created with Gatsby and managed by Netlify CMS.

## Quickstart
`nvm use lts/fermium`
`npm run develop`

This project is deployed on push.

### Production
`npm run build`
`npm run serve`

GA4 will only work in this mode.

### Test
1. Start the server: `npm run develop`
1. Start Cypress test runner for individual runs: `npm run cy:open`

Integration and e2e tests are built with [cypress](https://docs.cypress.io/) under the cypress/ folder. 

## Content 

All Netlify CMS content is under `/static/admin`.

Publish content via Netlify CMS
Go to `/admin` on the deployed site.

Logins are managed via [Netlify Identity](https://app.netlify.com/sites/boisewgw/configuration/identity) and gated via GitHub Personal Access Tokens.

## Integrations
- Static Site Framework: [Gatsby](https://www.gatsbyjs.com/gatsby-4/)
- CI: [Netlify](https://app.netlify.com/)
- Testing: [Cypress Cloud](https://cloud.cypress.io)
- Analytics: [Google Universal Analytics](https://developers.google.com/analytics/devguides/collection/gtagjs)
- CMS: [Admin Dashboard](https://www.boisewillowgracewellness.com/admin/) with Netlify CMS
- Styles: [emotion/styled](https://emotion.sh/docs/styled)
