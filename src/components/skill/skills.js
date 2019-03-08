import { animated, config, useTransition } from 'react-spring';
import { SkillWrapper } from '../../styles/components';
import React from 'react';
import SkillCard from './skillCard';

const Skills = ({ skills }) => {
  const spices = useTransition(skills, skill => skill.iconName, {
    config,
    from: { opacity: 0, transform: 'translate(-200px)' },
    enter: { opacity: 1, transform: 'translate(0)' },
    leave: {
      opacity: 0,
      transform: 'translate(200px)',
    },
    trail: 500 / skills.length,
  });

  const renderSkillItems = () => {
    return spices.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <SkillCard skill={item}/>
          </animated.div>
        );
      },
    );
  };
  return (
    <SkillWrapper>
      {renderSkillItems()}
    </SkillWrapper>
  );
};

export default Skills;
