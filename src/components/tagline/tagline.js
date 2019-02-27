import React from "react";
import styled from "@emotion/styled"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    min-width: 640px;
    max-width: 650px;
    height: 300px;
`;

const Slogan = styled.h1`
    font-family: neue-haas-unica, sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #c4ab9f;
    font-size: 3.75em;
    max-width: 370px;
`;

const LineBreak = styled.br`
    margin: 45px;
`

const Slogan = props => (
  <Slogan>
    becoming privately <LineBreak />
    healthy & publicly <LineBreak />
    fruitful leaders
  </Slogan>
)