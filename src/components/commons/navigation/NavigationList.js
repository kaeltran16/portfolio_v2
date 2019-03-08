import React from 'react';
import NavigationItem from './NavigationItem';
import * as PropTypes from 'prop-types';
import { NavListContainer, NavListItems } from '../../../styles/components';

const NavigationList = ({ active }) => {
  const renderItems = () => {
    const items = [
      { name: 'Landing', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Skill', url: '/skill' },
      { name: 'Work', url: '/work/recipello' },
      { name: 'Contact', url: '/contact' },
    ];
    return items.map((item, index) =>
      <NavigationItem key={item.name}
                      itemNo={index + 1}
                      itemName={item.name}
                      url={item.url}/>);
  };
  return (
    <NavListContainer active={active}>
      <NavListItems>
        {renderItems()}
      </NavListItems>
    </NavListContainer>
  );
};

NavigationList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default NavigationList;
