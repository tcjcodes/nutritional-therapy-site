import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

// @source https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    // image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: image && `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      {/*{image && <meta name='image' content={seo.image} />}*/}
      <link rel='icon'
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🌱</text></svg>" />
      {children}
    </>
  );
};
