import React from 'react';

import Layout from '../components/layout';
import {
  LandingPageContainer,
  TextHeaderWrapper,
  TextPrimary,
  TextSecondary,
} from '../styles/pages';

const IndexPage = () => (
  <Layout>
    <LandingPageContainer>
      <TextHeaderWrapper>
        <TextPrimary>
          Hi, abcxyz
        </TextPrimary>
        <TextSecondary>
          abcxyazdsad
        </TextSecondary>
      </TextHeaderWrapper>
    </LandingPageContainer>
  </Layout>
);

export default IndexPage;
