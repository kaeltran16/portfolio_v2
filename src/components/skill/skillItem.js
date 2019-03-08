import React from 'react';
import * as PropTypes from 'prop-types';
import {
  SkillItemWrapper,
  SkillName,
  SkillNameList,
  SubHeading,
} from '../../styles/components';


const SkillItem = ({ subHeading, skillNames, trans }) => {
  const renderSkillNames = () =>
    trans.map(({ item, key, props }) =>
      <SkillName
        key={key}
        style={props}>
        {item}
      </SkillName>,
    );
  return (
    <SkillItemWrapper>
      <SubHeading>
        {subHeading}
      </SubHeading>
      <SkillNameList>
        {renderSkillNames()}
      </SkillNameList>
    </SkillItemWrapper>
  );
};

SkillItem.propTypes = {
  subHeading: PropTypes.string.isRequired,
  skillNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillItem;
