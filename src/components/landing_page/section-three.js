import React, { Component } from 'react'
import styled from "@emotion/styled"

import helixImage from "../../images/DNA_Helix_Homepage-01.png"
import verticalhelix from "../../images/DNA_Helix_vertical.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ede9e2;
    width: 100%;
    height: 120%;
`;

const HelixImg = styled.img`
    padding: 2rem;
    width: 60%;
    height: 100%;
    margin: 2rem;
`;



class HelixSection extends Component {
  render() {
    return (
      <div> 
        <Container>
            <HelixImg src={helixImage}/>
        </Container>      
      </div>
    )
  }
}


export default HelixSection;