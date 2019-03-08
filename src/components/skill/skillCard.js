import React, { useEffect, useState } from 'react';
import { config, useTransition } from 'react-spring';
import { CardWrapper, Icon, SkillHeading } from '../../styles/components';
import SkillItem from './skillItem';
import { withPrefix } from 'gatsby';

const SkillCard = ({ skill }) => {
  const [open, setOpen] = useState(false);
  const spices = useTransition(open ? skill.skillNames : [], null, {
    config,
    from: { opacity: 0, transform: 'translateY(100px) scale(0)' },
    enter: { opacity: 1, transform: 'translateY(0) scale(1)' },
    leave: { opacity: 0, transform: 'translateY(30px) scale(0)' },
    trail: 500 / skill.skillNames.length,
    unique: true,
  });

  useEffect(() => {
    setTimeout(() => setOpen(true), 500);
  });

  const { iconName, heading, subHeading, skillNames } = skill;

  return (
    <CardWrapper onClick={() => setOpen(true)}>
      <Icon>
        <use
          xlinkHref={withPrefix(`/icons/sprites.svg#icon-${iconName}`)}/>
      </Icon>
      <SkillHeading>{heading}</SkillHeading>
      <SkillItem trans={spices} subHeading={subHeading}
                 skillNames={skillNames}
      />
    </CardWrapper>
  );
};

export default SkillCard;
