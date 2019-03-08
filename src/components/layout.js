/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles, LightTheme } from '../styles';
import Header from './header';
import { ThemeProvider } from 'styled-components';
import SEO from './seo';

const Layout = ({ children }) => (
  <ThemeProvider theme={LightTheme}>
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <GlobalStyles/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}>
        <Header/>
        <main style={{ flex: '1 1 100%' }}>{children}</main>
      </div>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
