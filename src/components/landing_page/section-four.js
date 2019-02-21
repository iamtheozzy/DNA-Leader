import React from "react"
import styled from '@emotion/styled';

import Icon from '../_icons/icons'

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: space-around;
    background-color: #f2efe9;
    width: 100%;
    height: 650px;
`;


export default () => (
    <Container>
        <Icon 
        number="01"
        text="Unlimited Access to DNA of a Leader Training Curriculum"    
        />
        <Icon 
        number="02"
        text="Personalized Weekly Planning Platform"    
        />
        <Icon 
        number="03"
        text="Diagnostic and Customized Growth Focus Tool"    
        />
        <Icon 
        number="04"
        text="Leadership Insight Videos"    
        />
        <Icon 
        number="05"
        text="Mission Statement Builder"    
        />
        <Icon 
        number="06"
        text="Leadership Resource Library"    
        />
    </Container>
)