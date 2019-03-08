import React from 'react';
import * as PropTypes from 'prop-types';
import { THEME } from '../../../styles/theme';
import { BurgerBar, BurgerIcon } from '../../../styles/components';

const NavigationButton = ({ color, size, active }) => {
  return (
    <BurgerIcon color={color} size={size} active={active}>
      <BurgerBar/>
      <BurgerBar/>
      <BurgerBar/>
    </BurgerIcon>
  );
};

NavigationButton.propTypes = {
  color: PropTypes.oneOf([THEME.light, THEME.dark]).isRequired,
  size: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavigationButton;
