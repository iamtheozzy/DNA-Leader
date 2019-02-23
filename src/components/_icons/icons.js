import React from 'react';
import styled from '@emotion/styled';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  ${'' /* border: 2px dashed green; */}

  ${'' /* @media (max-width: 375px) {
        height: 30%;
  } */}
`;

// USE INCASE WE SWITHC TO IMAGES OR ICONS
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
`;

const Text = styled.p`
  font-size: 2em;
  color: #212121;
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