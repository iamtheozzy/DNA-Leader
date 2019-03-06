import React from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/core'

import pat from "../../images/pat.jpeg"

const Container = styled.div`
  height: 100%;
  background-color: #f2efe9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
`;

const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 5px;
  font-weight: 400;
  text-align: center;
  margin-top: 6rem;
  color: #212121;
`;

const SectionWrapper = styled.div`
  display: flex;
  margin: 10rem 0;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 4rem;
`;

const LeadershipText = styled.h2`
  margin-top: 6rem;
  color: #9e7a20;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Subtext = styled.h3`
  margin-top: 2rem;
  color: #9e7a20;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;
`;

const SectionSubscription = styled.div`
  display: flex;

`;

const SubscriptionTitle = styled.h1`
  text-align: center;
  color: #212121;
  margin-top: 4rem;
`;


const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;
`;
 
const dynamicImage = props =>
css `
  background-image: url(${props.url});
  background-size: cover;
  height: 300px;
  width: 500px;
`;

const LeftContainer = styled.div`
  ${dynamicImage}
`;

const RightContainer = styled.div`
  width: 40%;
`;

const InnerText = styled.h3`
  margin-left: 4rem;
  color: #212121;
  letter-spacing: 3px;
  font-weight: 400;
`;

const ImplementButton = styled.button`
  color: #9e7a20;
  border: 1px solid #9e7a20;
  font-size: 1.5rem;
  letter-spacing: 3px;
  margin-top: 4rem;
  padding: 0 2rem;
  background-color: transparent;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
`;

const Pastors_Support = () => (
  <Container>
    <Title>Supporting the local pastor and his team to<br /> train their leaders is one of our core values.<br /> This is why we are excited to provide a<br /> customized platform for your church.
    </Title>
    <SectionWrapper>
      <Image src={pat}/>
      <RightSide>
        <LeadershipText>Leadership investment is a kingdom<br /> multiplier. If a pastor invests $1 a month<br /> in a leader, we will invest $1 a month in<br /> them as well.</LeadershipText>
        <Subtext>Already signed up for the DNA of a Leader<br /> Individual plan through your church? Get $2<br /> off your monthly subscription!</Subtext>
      </RightSide>
    </SectionWrapper>
    <SectionSubscription>
      <SubscriptionTitle>WHAT DOES THE CHURCH SUBSCRIPTION INCLUDE?</SubscriptionTitle>
    </SectionSubscription>
    <SubscriptionWrapper>
      <LeftContainer url={pat}/>
      <RightContainer>
        <InnerText>A customized DNA of a Leader Learning Platform for your church. This will be a private website unique to your church.</InnerText>
      </RightContainer>
    </SubscriptionWrapper>
    <SubscriptionWrapper>
      <LeftContainer url={pat}/>
      <RightContainer>
        <InnerText>A tool of leadership development oversight. Easily see where your leaders are at on their DNA of a Leader journey with an easy to use administrator dashboard.</InnerText>
      </RightContainer>
    </SubscriptionWrapper>
    <SubscriptionWrapper>
      <LeftContainer url={pat}/>
      <RightContainer>
        <InnerText>Communicate with ease. Easily communicate to your leaders through the platform.</InnerText>
      </RightContainer>
    </SubscriptionWrapper>
    <SubscriptionWrapper>
      <LeftContainer url={pat}/>
      <RightContainer>
        <InnerText>Group creation and management. Easily create groups around your organizational structure. For example the youth ministry leaders may be in one group, children’s ministry leaders in another, etc. Easily create admin’s or these groups. The youth pastor can then monitor and communicate with his own leaders.</InnerText>
      </RightContainer>
    </SubscriptionWrapper>
    <SubscriptionWrapper>
      <LeftContainer url={pat}/>
      <RightContainer>
        <InnerText>Large Group Viewing License. The church subscription plan includes a license to show the DNA of a Leader videos in a large group setting. This is perfect for the pastor who would like to hold a traditional large group training in a conference type of setting.</InnerText>
      </RightContainer>
    </SubscriptionWrapper>
    <ImplementButton>IMPLEMENTATION TIPS</ImplementButton>
  </Container>
)

export default Pastors_Support;