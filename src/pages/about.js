import React from 'react';
import { AboutPageContainer } from '../styles/pages';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { THEME } from '../styles/theme';
import Heading from '../components/commons/heading';
import Paragraphs from '../components/paragraph';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <AboutPageContainer>
        <Heading color={THEME.dark}/>
        <Paragraphs/>
      </AboutPageContainer>
    </Layout>
  );
};

export default AboutPage;
