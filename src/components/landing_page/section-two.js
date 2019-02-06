import React from "react";
import styled from "@emotion/styled"


const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ##f2efe9;
    width: 100%;
    padding: 12rem 0;
    border: 2px dashed blue;
`;

const FlexDiv = styled.div`
    display:flex;
    border: 2px dashed orange;
    width: 100%;
    height: 12rem;
    
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const LeftDiv = styled.div`
    margin-left: 2rem;
    border: 2px dashed red;
`;

const RightDiv = styled.div`
    border: 2px dashed green;
    width: 30%;
    height: 95%;
    margin-left: 2rem;
    p {
        font-size: 1rem;
    }
`;

const Why = styled.h1`
    display: flex;
    font-size: 2.75rem;
`;

const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida, lacus vel dictum pretium, sapien nulla rhoncus felis, eget sollicitudin ligula elit ut risus'

const Right = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid purple;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TextStyle = styled.h1`
    color: #c4ab9f;
    font-size: 1.5rem;
    width: 63%;
`;

const Subscribe = styled.button`
    padding: .75rem 3rem;
    background: #9e7a20;
    color: #f2efe9;
    font-size: 1.25rem;
`;

const Text = 'becoming privatley healthy & publicly fruitful leaders'

const SectionTwo = props => (
    <Container>
        <FlexDiv>
            <Left>
                <LeftDiv>
                    <Why>Why</Why>
                    <Why>DNA?</Why>
                </LeftDiv>
                <RightDiv>
                    <p>{Lorem}</p>
                </RightDiv>
            </Left>
            <Right>
                <TextStyle>
                    {Text}
                </TextStyle>
                <Subscribe>SUBSCRIBE</Subscribe>
            </Right>
        </FlexDiv>
    </Container>
)


export default SectionTwo;