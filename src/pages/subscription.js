import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"


import logo from "../images/DNA Logo_White-01.png"
import Layout from "../components/layout"
import SubCard from "../components/SubCard/subcard"

const Container = styled.div`

    justify-content: center; 
    background-color: #212121;
    width: 100%;
    height: 100%;
    min-height: 1000px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #212121;
  width: 100%;
  height: 1000px;
`;

const ImgWrapper = styled.div`
    margin: 0 auto;
    width: 15%;
    height: 50%;
    z-index: 300;
`;

const Logo = styled.img`
    width: 100%;
    margin-top: 1rem;
`;

const PageTitle = styled.h1`
  letter-spacing: 5px;
  font-weight: 400;
  text-align: center;
  margin-top: 6rem;
  color: #f2efe9;
  font-size: 2rem;
`;



const SubscriptionPage = () => (
  <Layout>
    <Container>
      <Link to="/">
        <ImgWrapper>
            <Logo src={logo}/>
        </ImgWrapper>
      </Link>
      <PageTitle>SUBSCRIPTIONS</PageTitle>
      <Wrapper>
        {/* Insert Cards Here */}
        
        <SubCard
          title="INDIVIDUAL"
          type="individual"
        />
        <SubCard
          title="CHURCH"
          type="church"
        />   
      </Wrapper>
      
    </Container>
  </Layout>
)

export default SubscriptionPage
