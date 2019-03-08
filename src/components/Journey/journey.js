import React from "react"
import styled from "@emotion/styled"

import pat from "../../images/pat.jpeg"
import icon_01 from "../../images/Journey_icons/icon_01.png"
import icon_02 from "../../images/Journey_icons/icon_02.png"
import icon_03 from "../../images/Journey_icons/icon_03.png"
import icon_04 from "../../images/Journey_icons/icon_04.png"

import diagnostic from "../../images/Journey_photos/dnaDiagnostic.jpeg"
import stewardship from "../../images/Journey_photos/dnaStewardship.jpeg"
import insight from "../../images/Journey_photos/insight_videos.jpeg"
import mission from "../../images/Journey_photos/mission_statement.jpeg"
import resource from "../../images/Journey_photos/resource_library.jpeg"


const Container = styled.div`
  height: 100%;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  background-color: #c4ab9f;
  height: 800px;
`;

const JourneyTitle = styled.h3`
  color: #f2efe9;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
`;

const SubTitle = styled.h1`
  margin-top: 4rem;
  color: #f2efe9;
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
  width: 50%;
  text-align: center;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #f2efe9;
`;

const JourneyImg = styled.img`
   margin: 6rem 6rem;
   width: 80%;
`;

const NumberContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 0 7.25rem;
  background-color: #f2efe9;
`;

const NumberIcon = styled.img`
  width: 50%;
  height: 100%;
`;

const NumberText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 50%;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 1.25rem;
  padding: 0 5rem;

`;

const SubListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 7.25rem;
  padding: 4rem;
  
`;

const ListImage = styled.img`
  width: 40%;
  height: 100%;
`;

const Listtext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  padding: 0 4rem;

  h1 {
    margin-bottom: 3rem;
  }

  p {
    font-style: italic;
    font-size: 1.25rem;
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  color: #9e7a20;
  border: 1px solid #9e7a20;
  font-size: 1.25rem;
  letter-spacing: 3px;
  margin-top: 1rem;
  padding: .25rem 1.25rem;
  background-color: transparent;
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 100;
`;

const JourneyPage = () => (
  <Container>
    <HeroContainer>
      <JourneyTitle>THE DNA JOURNEY</JourneyTitle>
      <SubTitle>The DNA of a Leader is a a ten class course with the main goal to impact the strength of the Church by strengthening the health of its leaders. We believe this happens when leaders are privately healthy and publicly fruitful.</SubTitle>
    </HeroContainer>

    <ListContainer>

      {/* Number 1 CLasses */}
      <JourneyImg src={pat}/>
      <NumberContainer>
        <NumberIcon src={icon_01}/>
        <NumberText>There are 30 videos that will take you through the DNA of a Leader curriculum. These have been created to help you maximize your learning experience. We encourage you to go in sequence and to complete the entire course, all at your own pace.</NumberText>
      </NumberContainer>

      {/* Number 2 Tools */}
      <JourneyImg src={pat}/>
      <NumberContainer>
        <NumberIcon src={icon_02}/>
        <NumberText></NumberText>
      </NumberContainer>
      {/* List Row */}
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>

      {/* Number 3 */}
      <JourneyImg src={pat}/>
      <NumberContainer>
        <NumberIcon src={icon_03}/>
        <NumberText>This book is a powerful companion tool, essential to receiving the full DNA of a Leader experience. Note taking, journaling, and sections for reflection will help you apply these important leadership principles. After doing DNA for many years, the companion book becomes a journal and reference tool that is highly recommended <BuyButton href="https://www.google.com/m">BUY BOOK</BuyButton></NumberText>
      </NumberContainer>
      {/* List Row */}
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>
        <SubListContainer>
          <ListImage src={stewardship}/>
          <Listtext> <h1>In-depth Personal Diagnostic and Growth Focus</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
          </Listtext>
        </SubListContainer>

      {/* Number 4 */}
      <NumberContainer>
        <NumberIcon src={icon_04}/>
        <NumberText></NumberText>
      </NumberContainer> 
        <SubListContainer>
            <ListImage src={resource}/>
            <Listtext> <h1>Resource Library</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
            </Listtext>
          </SubListContainer>
          <SubListContainer>
            <ListImage src={insight}/>
            <Listtext> <h1>Insight Videos</h1> <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
            </Listtext>
          </SubListContainer>

    </ListContainer>
    
  </Container>
)

export default JourneyPage