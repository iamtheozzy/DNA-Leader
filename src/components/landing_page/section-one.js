import React from "react";
import styled from "@emotion/styled"


const Container = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #212121;
    width: 100%;
    height: 700px;
 
`;

const LineBreak = styled.br`
    margin: 45px;
`

const WebTitle = styled.h1`
    color: white;
    margin-left: 2rem;
    text-align: center;
     
    span {
        font-size: 5rem;
    }
`;

const SectionOne = () => (
    <Container>
        <WebTitle><span>DNA</span><br />OF A Leader</WebTitle>
    </Container>
)

export default SectionOne;