import styled from 'styled-components';

export const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const PrimaryHeader = styled.a`
  color: #fff;
  font-size: 5rem;
  text-decoration: none;
  position: relative;
  
  &:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transform-origin: left;
  transition: .25s linear;
  background-color: #fff;
}
&:hover:before,
&:focus:before {
  visibility: visible;
  transform: scaleX(1);
}
`;
export const SubHeader = styled.div`
  color: ${props => props.theme.secondary.main}
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
`;
export const Text = styled.h4`
  
`;
export const PhoneNumber = styled.a`
   text-decoration: none;
     color: ${props => props.theme.secondary.main}
`;


