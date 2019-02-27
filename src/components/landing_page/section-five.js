import React from "react";
import styled from '@emotion/styled';

import Example from '../carousel/carousel'

const Container = styled.div`
    display: flex;
    overflow:hidden;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    background-color: #fff;
    width: 100%;
    height: 650px;

    @media (max-width: 375px) {
        height: 800px;
    }
`;




export default () => (
  <Container>
      <Example></Example>
  </Container>
)
