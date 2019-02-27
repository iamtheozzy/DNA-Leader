import React from "react";
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Lorem = 'DNA of a Leader is an in depth training system on Biblical Leadership built on the premise that developing privately healthy disciples is at the root of strong public leadership'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #f2efe9;
    width: 100%;
    height: 650px;

    @media (max-width: 375px) {
        height: 1000px;
    }
    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 55%;
    min-width: 640px;
    max-width: 700px;
    height: 250px;
`;

const Question = styled.p`
    font-size: 5rem;
    line-height: 100%;
    display: flex;
    align-items: center;
`
const LineBreak = styled.br`
    margin: 45px;
`

const LoremDiv = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 80%;
    max-height: 26em;
    min-width: 370px;;
    font-size: 2.5em;
    letter-spacing: 2px;
    margin-left: 1em;
    border-left: 2px solid #212121;
    padding-left: 1.33em;

    @media (max-width: 375px) {
        
    }
`;


const SubBtn = styled.button`
    font-family: neue-haas-unica, sans-serif;
    font-size: 2.5em;
    border: 4px solid #9e7a20;
    background-color: transparent;
    color: #9e7a20;
    padding: .7em 3em;
    text-align: center;
    max-width: 350px;
    margin-top: 3.5em;
`;




const SectionTwo = props => (
    <Container>
        <Wrapper>
            <Question>WHY<LineBreak />DNA?</Question>
            <LoremDiv>{Lorem}</LoremDiv>
        </Wrapper>
        <Link to="/subscription"><SubBtn>SUBSCRIBE</SubBtn></Link>
    </Container>
)


export default SectionTwo;