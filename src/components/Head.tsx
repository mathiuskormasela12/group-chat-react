// ========== Header
// import all modules
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IHeaderProps } from '../interfaces';

export const Head: React.FC<IHeaderProps> = ({ title }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        Group Chat
        {' '}
        {title}
      </title>
    </Helmet>
  </HelmetProvider>
);
