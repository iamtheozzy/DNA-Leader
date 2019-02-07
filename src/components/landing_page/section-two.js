import React from "react";
import styled from "@emotion/styled"

const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida, lacus vel dictum pretium, sapien nulla rhoncus felis, eget sollicitudin ligula elit ut risus'

const Text = 'becoming privatley healthy & publicly fruitful leaders'

const Container = styled.div`
    display: flex;
    background-color: ##f2efe9;
    width: 100%;
    padding: 12rem 0;
`;

const Left = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`;

const Question = styled.p`
    font-size: 2rem;
    line-height: 100%;
    display: flex;
    align-items: center;
`
const LineBreak = styled.br`
    margin: 45px;
`

const LoremDiv = styled.div`
    overflow: hidden;
    width: 30%;
    font-size: 1.25em;
    margin-left: 1em;
    border-left: 2px solid #212121;
    padding-left: 1.33em;
`;

const Right = styled.div`

`;







const SectionTwo = props => (
    <Container>
        <Left>
            <Question>WHY<LineBreak />DNA?</Question>
            <LoremDiv>{Lorem}</LoremDiv>
        </Left>
        
    
    </Container>
)


export default SectionTwo;