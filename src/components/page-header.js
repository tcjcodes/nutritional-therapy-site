import React from 'react';
import { secondaryFont } from '../utils/fonts';
import { Heading } from 'react-bulma-components';

const PageHeader = ({ title, center }) => (
  <div
    data-testid="page-header"
    css={{ textAlign: center ? 'center' : 'inherit' }}
  >
    <Heading
      size={2}
      css={{
        ...secondaryFont,
        marginBottom: '0.75rem',
      }}
    >
      {title}
    </Heading>
  </div>
);

export default PageHeader;
