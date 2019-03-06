import React from "react"
import styled from "@emotion/styled"

import pat from "../../images/pat.jpeg"
import logo from "../../images/DNA Logo_White-01.png"
import PastorsPage from "../../pages/about/pastors";

const Container = styled.div`
  height: 100%;
`;

const HeroContainer = styled.div`
  background-image: url(${pat});
  height: 1000px;
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f2efe9;
  padding: 70px 0;
`;

const PriestTitle = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
  letter-spacing: 5px;
  line-height: 100px;
  text-align: center;
  font-size: 3rem;
  color: #212121;
`;

const PriestSubTitle = styled.h3`
  margin-top: 15px;
  color: #212121;
  letter-spacing: 5px;
`;

const PriestSection = styled.div`
  display: flex;
  margin-top: 10rem;
`;

const LeftText = styled.p`
    padding: 0 100px;
    width: 50%;
    font-size: 1.5rem;
    border-right: 1px solid #9e7a20;
`;

const RightText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const RightQuote = styled.h1`
  font-weight: 500;
  text-align: center;
  padding: 0 150px;
`;

const Barnabas = styled.p`
  margin-top: 3rem;
  font-size: 1rem;
  letter-spacing: 4px;
  padding: 0 150px;
  text-align: left;
`;

const President = styled.p`
  font-size: 1rem;
`;



const PastorPage = () => (
  <Container>
    <HeroContainer />
    <ContentContainer>
      <PriestTitle>AND WHAT THE PRIESTS DO,<br /> THE PEOPLE ALSO DO.</PriestTitle>
      <PriestSubTitle>HOSEA 4:9</PriestSubTitle>
      <PriestSection>
        <LeftText>The foundational principle of DNA of a Leader is found in Hosea 4:9, “And what the priests do, the people also do.” One of the greatest challenges for today’s local church is the identification, training, and releasing of leaders. As Barnabas Mtokambali, President of the Assemblies of God African Fellowship said, “As the leaders go, so goes the church. As the church goes, so goes the nation.” DNA of a Leader has been developed from Pastor Al Toledo’s 25 year ministry journey. It began as a training program for the staff and lay leaders at the Chicago Tabernacle. In 2012 local church pastors began to ask for the curriculum and training, so the DNA of a Leader Pastors Intensive began. DNA of a leader is a very dense and comprehensive training program. It is a holistic, principled leadership development training system. We recognized the need to help leaders continue to review and mature in the principles, utilize the tools in an online format, and have a scalable way for them to train their leaders. With that in mind, the DNA of a Leader Online was launched.</LeftText>
        <RightText>
          <RightQuote>As the leaders go,<br /> so goes the church.<br /> As the church goes,<br /> so goes the nation.</RightQuote>
          <Barnabas>BARNABAS MTOKAMBALI</Barnabas>
          <President>President of the Assemblies of God African Fellowship</President>
        </RightText>
      </PriestSection>
    </ContentContainer>
  </Container>
);



export default PastorPage;