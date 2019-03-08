import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  flex: 1 1 100%;
  height: 100%;
  display: flex;
`;

export const TextHeaderWrapper = styled.div`
  align-items: center;
	justify-content: center;
	display: flex;
	flex: 1 1 100%;
	flex-direction: column;
`;

const TextBase = styled.h3`
  color: ${props => props.theme.primary.main};
`;

export const TextPrimary = styled(TextBase)`
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
`;

export const TextSecondary = styled(TextBase)`
	font-size: 3rem;
	font-weight: 700;
`;
