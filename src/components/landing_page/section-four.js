import React from "react"
import styled from '@emotion/styled';

import Icon from '../_icons/icons'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    align-items: baseline;
    align-content: space-around;
    background-color: #212121;
    width: 100%;
    height: 650px;

    @media all and (max-width: 1199px) { 
        height: 800px;
    } 

    @media (max-width: 769px) {
        height: 1000px;
    }

    @media all and (max-width: 575px) { 
        height: 1400px;
     }

    @media (max-width: 375px) {
        height: 2000px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;

    @media (max-width: 769px) {
        ${'' /* margin-bottom: 5rem; */}
    }
`;


const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;  

const SectionTitle = styled.h2`
    font-family: "Times New Roman", Times, serif;
    font-weight: 400;
    text-align: center;
    color: #f2efe9;
    letter-spacing: 6px;
    margin-bottom: 1em;

    @media all and (max-width: 768px) { 
        font-size: 1.5rem;
    } 

    @media (max-width: 375px) {
        
    }
`;

const SectionSubTitle = styled.h3`
    font-family: "Times New Roman", Times, serif;
    font-weight: 400;
    color: #c8b79b;

    @media (max-width: 769px) {
        font-size: 1rem;
        margin: 0 2rem;
        text-align: center;
    }

    @media all and (max-width: 575px) { 
        font-size: 1rem;
        text-align: center;
     }

    @media (max-width: 375px) {
        font-size: 16px;
        text-align: center;
        width: 90%;
    }
`;


export default () => (
    <Container>
        <SectionWrapper>
            <SectionTitle>TOOLS DESIGNED WITH YOU IN MIND</SectionTitle>
            <SectionSubTitle>DNA of a Leader with grow, equip and inspire you. Here’s what you will have access to:</SectionSubTitle>
        </SectionWrapper>
        <IconWrapper>
        <Icon 
        number="01:"
        text="Unlimited Access to DNA of a Leader Training Curriculum"    
        />
        <Icon 
        number="02:"
        text="Personalized Weekly Planning Platform"    
        />
        <Icon 
        number="03:"
        text="Diagnostic and Customized Growth Focus Tool"    
        />
        <Icon 
        number="04:"
        text="Leadership Insight Videos"    
        />
        <Icon 
        number="05:"
        text="Mission Statement Builder"    
        />
        <Icon 
        number="06:"
        text="Leadership Resource Library"    
        />
        </IconWrapper>
    </Container>
)