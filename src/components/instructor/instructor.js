import React from "react"
import styled from "@emotion/styled"
// // import ReactPlayer from 'react-player'
// {/* <ReactPlayer url='https://vimeo.com/320983996' playing /> */}

import "./style.css"
import pat from "../../images/pat.jpeg"
import logo from "../../images/DNA Logo_White-01.png"

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
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f2efe9;
  padding: 70px 0;
`;

const InstructorContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    min-width: 450px;

  @media (min-width: 1200px) and (max-width: 1550px) {
      min-width: 300px;
    }  
`;


const InstructorRight = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    min-width: 750px;
    border-left: 2px solid #9e7a20;

    @media (min-width: 1200px) and (max-width: 1550px) {
      min-width: 500px;
      ${'' /* background-color: red; */}
    }
    
`;

const PastorImg = styled.img`
      min-width: 560px;
      width: 100%;
      height: 100%;
      background: red;
      ${'' /* border-radius: 50%; */}
      clip-path: circle(250px at center);

      @media (min-width: 1200px) and (max-width: 1550px) {
      min-width: 300px;
      clip-path: circle(200px at center);
    }
`;




const PageRender = () => (
  <Container>
    <HeroContainer>
      <h1 className="quote_image">“This is more than a leadership course. My burden is to be see God’s Kingdom expand through leaders who are privately healthy and publicly fruitful.”</h1>
    </HeroContainer>
    <ContentContainer>
      <InstructorContainer>
          <div className="section__wrapper"> 
            <h2 className="section__title">MEET THE INSTRUCTOR</h2>
            <p className="instructor__text">Pastor Al and Chrissy Toledo were both born and raised in New York City. Pastor Al, born of Cuban parents, was headed for a promising career as a professional baseball player when the Lord revealed Himself to him at the age of seventeen on a baseball field. After being drafted by a major league baseball team and playing college baseball, Pastor Al began attending the Brooklyn Tabernacle and soon felt God calling him to the ministry. In 1990, he attended Bible college and soon thereafter began serving in full-time ministry.</p>
          </div>
      </InstructorContainer>
      <InstructorRight>
          <div className="section__wrapper"> 
            <PastorImg src={pat}/>
            
          </div>
      </InstructorRight>
    </ContentContainer>
  </Container>
  
    
)

export default PageRender
