import React from "react";
import styled from "@emotion/styled"

import helixImage from "../../images/DNA Helix_Homepage-01.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ede9e2;
    width: 100%;
    height: 100%;
`;

const HelixImg = styled.img`
    padding: 4rem;
    width: 60%;
    height: 100%;
`;

const HelixSection = () => (
    <Container>
        <HelixImg src={helixImage}/>
        
    </Container>
)


export default HelixSection;