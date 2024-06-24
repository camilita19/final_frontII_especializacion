import styled from 'styled-components';
import bgHomer from '../../assets/homer-background.jpg';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgHomer});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 3rem;
  height: 100vh;
  width: 100vw;
`;

export const ErrorTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px #000;
  text-align: center;
  margin-top: 15%;
  margin-right: 30%;
`;
