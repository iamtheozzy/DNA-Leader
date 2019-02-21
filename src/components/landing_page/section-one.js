import React from "react";
import styled from "@emotion/styled"
import logo from "../../images/DNA Logo_White-01.png"


const Container = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #212121;
    width: 100%;
    height: 700px;
`;

const ImgWrapper = styled.div`
    margin-top: 1rem;
    width: 15%;
`;

const Logo = styled.img`
    width: 100%;
`;

const SectionOne = () => (
    <Container> 
        <ImgWrapper>
            <Logo src={logo}/>
        </ImgWrapper>
      
    </Container>
)

export default SectionOne;