import React from 'react';
import * as PropTypes from 'prop-types';
import {
  NavItemContainer,
  NavItemName,
  NavLink,
} from '../../../styles/components';

const NavigationItem = ({ itemNo, itemName, url }) => (
  <NavItemContainer>
    <NavLink to={url}>
      <NavItemName>
        {itemNo}.
      </NavItemName>
      {itemName}
    </NavLink>
  </NavItemContainer>
);

NavigationItem.propTypes = {
  itemNo: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavigationItem;
