import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'react-bulma-components';

const ButtonLink = ({ color, faIcon, href, children }) => <Button
  color={color}
  renderAs={(renderProps) => (
    <Link {...renderProps}
          role='button'
          to={href} />)}>
  {faIcon && <span
    className={`fa fa-${faIcon}`}
    css={{ marginRight: `0.5rem` }}
  />}{children}
</Button>;

export default ButtonLink;
