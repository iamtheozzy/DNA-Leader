import React from "react";
import styled from "@emotion/styled"


const Section = styled.div`
    display: flex;
    background-color: #212121;
    width: 100%;
    padding: 18rem 0;
    justify-content: center;
    align-content:flex-start;
`;

const WebTitle = styled.h1`
    color: white;
    margin-top: 0px;
`;

const SectionOne = () => (
    <Section>
        <WebTitle>DNA of a Leader</WebTitle>
    </Section>
)

export default SectionOne;