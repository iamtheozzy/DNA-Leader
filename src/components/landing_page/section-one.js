import React from "react";
import styled from "@emotion/styled"
import logo from "../../images/DNA Logo_White-01.png"
import heroImg from "../../images/pat.jpeg"


const Container = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #212121;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
`;

const ImgWrapper = styled.div`
    margin-top: 1rem;
    width: 15%;
    height: 400px;
    min-width: 200px;
    position: relative;
    right: 50%;
`;

const Logo = styled.img`
    width: 100%;
`;

const HeroImg = styled.img`
    background-image: url("../../images/pat.jpeg");
    width: 100%;
    height: 100%;
`;

const SectionOne = () => (
    <Container> 
        <HeroImg src={heroImg}/> 
        <ImgWrapper>
            <Logo src={logo}/>
        </ImgWrapper>
    </Container>
)

export default SectionOne;