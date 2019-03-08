import React from 'react';
import {
  ContactInfoWrapper,
  PhoneNumber,
  PrimaryHeader,
  SubHeader,
  Text,
} from '../styles/components/contactInfo.styles';


const ContactInfo = ({ contactDetail }) => (
  <ContactInfoWrapper>
    <PrimaryHeader
      href={`mailto:${contactDetail.email}`}>
      cktran16x2@gmail.com
    </PrimaryHeader>
    <SubHeader>
      <Text>
        Phone Number
      </Text>
      <PhoneNumber href={`tel:1-${contactDetail.tel}`}>
        dsadas
      </PhoneNumber>
    </SubHeader>
  </ContactInfoWrapper>
);


export default ContactInfo;
