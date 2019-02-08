import React from "react";
import styled from "@emotion/styled"

const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida, lacus vel dictum pretium, sapien nulla rhoncus felis, eget sollicitudin ligula elit ut risus'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: #f2efe9;
    width: 100%;
    height: 650px;
`;

const Left = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
    min-width: 640px;
    max-width: 650px;
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
    width: 55%;
    max-height: 26em;
    min-width: 370px;;
    font-size: 2.5em;
    margin-left: 1em;
    border-left: 2px solid #212121;
    padding-left: 1.33em;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    min-width: 640px;
    max-width: 650px;
    height: 250px;
`;

const Slogan = styled.h1`
    color: #c4ab9f;
    font-size: 4em;
    max-width: 355px;
`;

const SubBtn = styled.button`
    font-size: 2.5em;
    background: #9e7a20;
    color: #f2efe9;
    padding: .7em 4em;
    text-align: center;
    max-width: 350px;
    margin-top: 2em;
`;




const SectionTwo = () => (
    <Container>
        <Left>
            <Question>WHY<LineBreak />DNA?</Question>
            <LoremDiv>{Lorem}</LoremDiv>
        </Left>
        <Right>
            <Slogan>
                becoming privately <LineBreak />
                healthy & publicly <LineBreak />
                fruitful leaders
            </Slogan>
            <SubBtn>SUBSCRIBE</SubBtn>
        </Right>
    </Container>
)


export default SectionTwo;