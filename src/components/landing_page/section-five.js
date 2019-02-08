import React from "react";
import styled from '@emotion/styled';


const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    background-color: #c4ab9f;
    width: 100%;
    height: 650px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 27%;
  height: 70%;
  min-width: 300px;

  border: 2px dashed blue;
`;

const Title = styled.h1`
  font-size: 4em;
  color: #f2efe9
`;

const Avatar = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Btn = styled.button`
  background-color: transparent;
  font-size: 1.5em;
  color: #f2efe9;
  padding: .25em 2.5em;
  border: 2px solid #f2efe9;
  text-align: center;
`;

const Whatever = props => (
  <Card>
    <Title>{props.title}</Title>
    <Avatar />
    <Btn>MORE</Btn>
  </Card>

)


export default () => (
  <Container>
    <Whatever
      title="PASTORS"
     />
    <Whatever
      title="LEADERS"
     />
    <Whatever
      title="ORGANIZATIONS"
     />
  </Container>
)
