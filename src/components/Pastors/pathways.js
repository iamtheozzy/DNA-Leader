import React from "react"
import styled from "@emotion/styled"


const Container = styled.div`
  height: 100%;
  background-color: #2e3a34;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
`;

const SectionTitle = styled.h1`
  color: #f2efe9;
  font-family: neue-haas-unica, sans-serif;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 100;
  letter-spacing: 6px;
`;

const SectionSubTitle = styled.h3`
  color: #f2efe9;
  font-family: neue-haas-unica, sans-serif;
  font-style: italic;
  font-weight: 100;
  letter-spacing: 6px;
  text-align: center;
  margin-top: 4rem;
`;

const NumberOne = styled.h1`
  color: #f2efe9;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin-top: 5rem;
  letter-spacing: 3px;
`;

const VeritcalLine = styled.div`
  border-left: 1px solid #9e7a20;
  height: 200px;
  margin: 4rem 0;
`;

const GroupTextTitle = styled.h2`
  color: #9e7a20;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  text-align: center;
  font-size: 2rem;
`;

const GroupText = styled.p`
  color: #f2efe9;
  text-align: center;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 1.8rem;
  margin: 4rem 0;
  width: 40%;
`;

const VideoText = styled.p`
  color: #f2efe9;
  text-align: center;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 1.8rem;
  margin: 4rem 0;
  width: 70%;
`;

const BorderBox = styled.div`
  border: 1px solid #f2efe9;
  padding: 5rem 5rem;
  width: 80%;
`;

const BoxTitle = styled.h1`
  color: #f2efe9;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  color: #f2efe9;
  font-size: 1.5rem;
  list-style-type: none;
  width: 70%;
  margin-top: 3rem;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
`;

const ListItemButton = styled.li`
  margin: 7rem auto 4rem auto;
`;

const Button = styled.a`
  color: #9e7a20;
  border: 1px solid #9e7a20;
  font-size: 1.5rem;
  letter-spacing: 3px;
  padding: 0 2rem;
  background-color: transparent;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin: 0 auto;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color:#9e7a20; 
    text-decoration:none; 
    cursor:pointer;  
  }
  `

  const ChurchButton = styled.a`
    color: #9e7a20;
    border: 1px solid #9e7a20;
    font-size: 1.5rem;
    letter-spacing: 3px;
    padding: .5rem 2rem;
    background-color: transparent;
    font-family: neue-haas-unica, sans-serif;
    font-style: normal;
    font-weight: 100;
    margin: 0 auto;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color:#9e7a20; 
      text-decoration:none; 
      cursor:pointer;  
    }
  `;


const PathwaysPage = () => (
  <Container>
    <SectionTitle>PATHWAYS OF IMPLEMENTATION</SectionTitle>
    <SectionSubTitle>There are two different ways that a pastor may choose<br /> to implement the DNA of a Leader.</SectionSubTitle>
    <NumberOne>01</NumberOne>
    <VeritcalLine />
    <GroupTextTitle>Have a Large Group Training Event</GroupTextTitle>
    <GroupText>The change of culture in a church often requires having a series of events, setting the vision, and walking and implementing the new strategy with everyone together. The use of a larger group event can help to accomplish this.</GroupText>
    <VideoText>Use the videos to train your people together in a “conference style” format with the large group viewing license that is available through the church subscription.</VideoText>
    <BorderBox>
      <BoxTitle>Sample Format:</BoxTitle>
      <List>
        <ListItem>A customized DNA of a Leader Learning Platform for your church. This will be a private website unique to your church.</ListItem>
        <ListItem>The questions in the back of the DNA of a Leader workbook have been written for facilitation and the closing of sessions</ListItem>
        <ListItem>Pastors can lead their teams in times of prayer and reflection and facilitation</ListItem>
      </List>
    </BorderBox>
    <BorderBox>
      <BoxTitle>Materials for Large Events:</BoxTitle>
      <List>
        <ListItem>DNA of a Leader Workbooks are a powerful companion tool and can be purchased in bulk for large group trainings.</ListItem>
        <ListItem>Banners, pens, and coffee mugs can be purchased as well to heighten the church experience.</ListItem>
        <ListItemButton><Button href="">VISIT DNA STORE</Button></ListItemButton>
      </List>
    </BorderBox> 
    <NumberOne>02</NumberOne>
    <VeritcalLine />
    <GroupTextTitle>Launch directly to staff and ministry<br /> leaders in smaller groups</GroupTextTitle>
    <GroupText>The online platform allows the pastor to have his teams go through the curriculum together at their own pace.</GroupText>
    <GroupText>The pastor and ministry leaders can monitor progress via the administrator dashboard.</GroupText>
    <ChurchButton href="">CHURCH SUBSCRIPTION</ChurchButton>
  </Container>
)

export default PathwaysPage;