import Layout from '../components/layout';
import { SkillPageContainer } from '../styles/pages';
import React from 'react';
import Skills from '../components/skill/skills';

const SkillPage = () => {
  const skills = [
    {
      iconName: 'code',
      heading: 'I started with C and C++, migrated to C# soon later and now really interested in JavaScript.',
      subHeading: 'Languages I know',
      skillNames: ['C#', 'C++', 'Java', 'JavaScript', 'HTML/CSS'],
    },
    {
      iconName: 'usb',
      heading: 'I started with WPF in Desktop application but now working mostly in Web Development.',
      subHeading: 'Frameworks/libraries I has worked with',
      skillNames: ['ASP.NET/ASP.NET Core', 'React/Angular', 'Redux', 'Express', 'React Native', 'SQL Server/MongoDB', 'GraphQL'],
    },
    {
      iconName: 'wrench',
      heading: 'I also know about tools and utilities to make development process easier.',
      subHeading: 'Tools I use',
      skillNames: ['Visual Studio', 'Intellij IDEA', 'Webpack', 'Terminal/Powershell', 'Git'],
    },
  ];
  return (
    <Layout>
      <SkillPageContainer>
        <Skills skills={skills}/>
      </SkillPageContainer>
    </Layout>
  );
};

export default SkillPage;
