import React from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/core'

import pat from "../../images/pat.jpeg"

const Container = styled.div`
  height: 1000px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2efe9;
  padding: 0 5rem;
`;

const dynamicImage = props =>
css `
  background-image: url(${props.url});
  background-size: cover;
  width: 50%;
  height: 40%;
`;

const ImageContainer = styled.div`
  ${dynamicImage};
`;


const JourneyList = () => (
  <Container>
    <ImageContainer url={pat}></ImageContainer>

  </Container>

)


export default JourneyList  