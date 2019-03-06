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

const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 5px;
  font-weight: 400;
  text-align: center;
  margin-top: 6rem;
  color: #f2efe9;

`
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
  width: 50%;
  margin-top: 6rem;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
`;



const Pastor_List = () => (
  <Container>
    <Title>Here are a few ways that pastors can<br /> utilize the DNA of a Leader and what it<br /> will provide for you and your church.</Title>
    <List>
      <ListItem>Develop personal private health, and public strength and fruitfulness, which will naturally influence your leadership teams and congregation.</ListItem>
      <ListItem>Elevate the indispensable keys of prayer and kingdom service.</ListItem>
      <ListItem>Create a new structure of oversight and develop a new culture of discipleship.</ListItem>
      <ListItem>Provide a wholistic training system that is Bible rich and immensely practical with built in growth support.</ListItem>
      <ListItem>Simplify and accelerate the influence of senior leadership over all of the ministries due to the common language and consistent communication system.</ListItem>
    </List>
  </Container>
)

export default Pastor_List;