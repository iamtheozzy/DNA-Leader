import React from "react";
import styled from '@emotion/styled';

import Card from '../card/card';

const Container = styled.div`
    display: flex;
    overflow:hidden;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    background-color: #f2efe9;
    width: 100%;
    height: 650px;

    @media (max-width: 375px) {
        height: 1000px;
    }
`;




export default () => (
  <Container>
    <Card
      title="PASTORS"
      image="https://picsum.photos/200/300"
     />
    <Card
      title="LEADERS"
      image="https://picsum.photos/200/300"
     />
    <Card
      title="ORGANIZATIONS"
      image="https://picsum.photos/200/300"
     />
  </Container>
)
