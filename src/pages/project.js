import React, { useState } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  background: #f0f0f0;
  flex: 1;
  height: 100%;
  
 & > div {
  will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
 }
`;
const ProjectPage = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    setSelected(index === 2 ? 0: index);
  };

  const [props, set] = useSpring(() => ({
    config: { mass: 7, tension: 600, friction: 250 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  const render = () => {

  };
  return (
    <Layout>
      <ProjectContainer onClick={() => handleClick()}>
        {render()}
      </ProjectContainer>
    </Layout>
  );
};

export default ProjectPage;
