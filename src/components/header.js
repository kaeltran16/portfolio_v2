import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import NavigationList from './commons/navigation/NavigationList';
import {
  BurgerButton,
  HeaderWrapper,
  NavBackground,
} from '../styles/components';
import Logo from './commons/logo';
import NavigationIcon from './commons/navigation/NavigationIcon';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };


  const { transform } = useSpring({
    transform: `scale(${active ? '80' : '0'})`,
    config: { mass: 5, tension: 600, friction: 100 },
  });

  return (
    <React.Fragment>
      <HeaderWrapper>
        <Logo/>
        <BurgerButton onClick={() => toggle()}>
          <NavigationIcon color={'dark'} size={5} active={active}/>
        </BurgerButton>
      </HeaderWrapper>
      <NavigationList active={active}/>
      <NavBackground
        style={{ transform }}/>
    </React.Fragment>
  );
};


export default Header;
