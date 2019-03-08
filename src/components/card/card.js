import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 27%;
  height: 70%;
  min-width: 300px;
  ${'' /* Use border for responsiveness testing */}
  ${'' /* border: 2px dashed blue; */}

  @media all and (max-width: 1199px) { 

   }

  @media all and (max-width: 991px) { 
    width: 70%;
    height: 30%;
   } 

  @media (max-width: 375px) {
        height: 30%;
  }
`;

const Title = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
  letter-spacing: 4px;
  font-size: 4em;
  color: #f2efe9;
  letter-spacing: 5px;

  @media all and (max-width: 1199px) { 
    font-size: 3em;
  }
  @media (max-width: 375px) {
        font-size: 2.5em;
    }
  
`;

const Avatar = styled.img`
  flex-grow: 0;
  flex-shrink: 2;
  flex-basis: 96px;
  width: 200px;
  height: 200px;
  margin: 0;
  border-radius: 80%;

  @media all and (max-width: 1199px) { 
    width: 150px;
    height: 150px;
  }
  @media (max-width: 375px) {
        width: 150px;
        height: 150px;
    }
`

const Btn = styled.button`
  background-color: transparent;
  font-size: 1.5em;
  color: #f2efe9;
  padding: .25em 2.5em;
  border: 2px solid #f2efe9;
  text-align: center;
`;

const Card = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Avatar src={props.image}/>
    <Btn>MORE</Btn>
  </Wrapper>

)

export default Card