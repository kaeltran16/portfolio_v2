import React from 'react';
import Layout from '../components/layout';
import Heading from '../components/commons/heading';
import { ContactPageContainer } from '../styles/pages/contact.styles';
import ContactInfo from '../components/contactInfo';
import Footer from '../components/footer';

const header = 'get in touch';
const contactDetail = {
  email: 'cktran16x2@gmail.com',
  tel: '4169987489',
};
const socialIcons = [
  {
    icon: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/khangtranx',
  },
  {
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/Khang-Tran',
  },
  {
    icon: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/khangishere',
  },
  {
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/KhangCaoTran',
  },
  {
    icon: 'google-plus',
    name: 'Google',
    url: 'https://plus.google.com/105861925169691513017',
  },
];

const ContactPage = () => (
  <Layout>
    <ContactPageContainer>
      <Heading color='light' heading={header}/>
      <ContactInfo contactDetail={contactDetail}/>
      <Footer socialIcons={socialIcons}/>
    </ContactPageContainer>
  </Layout>
);

export default ContactPage;
