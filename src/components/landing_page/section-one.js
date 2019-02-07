import React from "react";
import styled from "@emotion/styled"


const Container = styled.div`
    display: flex;
    background-color: #212121;
    width: 100%;
    padding: 18rem 0;
    display: flex;
    justify-content: center;
    
`;

const WebTitle = styled.h1`
    color: white;
    margin-left: 2rem;

`;

const SectionOne = () => (
    <Container>
        <WebTitle>DNA of a Leader</WebTitle>
    </Container>
)

export default SectionOne;