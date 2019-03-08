import React from 'react';
import styled from '@emotion/styled';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  min-width: 200px;

  @media all and (max-width: 1199px) { 
    width: 33%;
  } 

  ${'' /* @media (max-width: 375px) {
        height: 30%;
  } */}
`;

// USE INCASE WE SWITCH TO IMAGES OR ICONS
// const Image = styled.img`
//   flex-grow: 0;
//   flex-shrink: 0;
//   flex-basis: 96px;
//   width: 96px;
//   height: 96px;
//   margin: 0;
// `
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  color: #f2efe9;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 2em;
  color: #f2efe9;
  text-align: center;
  margin: 2rem 0;
  width: 70%;
`;

const Icon = props => (
  <Wrapper>
    <Title>{props.number}</Title>
    <Text>{props.text}</Text>
  </Wrapper>
)

export default Icon;