import { Column, Columns, Content, Heading } from 'bloomer';
import React from 'react';
import { serifFont } from '../utils/fonts';
import { colorBrown } from '../utils/theme-variables';

const Service = ({ name, children }) => (
  <div css={{ marginBottom: `2rem` }}>
    <Heading
      style={{
        ...serifFont,
        color: colorBrown,
        textTransform: 'lowercase',
      }}
    >
      {name}
    </Heading>
    <Content>{children}</Content>
  </div>
);

export default Service;
