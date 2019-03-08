import React, { Component } from 'react'
import styled from "@emotion/styled"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'

import styles from "./videoplayer.module.css"
import logo from "../../images/DNA Logo_White-01.png"
import PastorAl from "../../images/homepage/PastorAl.png"
import Backdrop from "../Backdrop/Backdrop"
import PlayIcon from "../../images/video-play-3-128.png"



const Logo = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 1rem;
`;


const NewContainer = styled.div`
    background-image: url(${PastorAl});
    height: 1000px;
    background-size: cover;

    @media all and (max-width: 1199px) {
        background-position: 50% 50%;
    }
    @media all and (max-width: 991px) { ... } 
    @media all and (max-width: 768px) { ... } 
    @media all and (max-width: 575px) { ... }
`;

const LogoWrapper = styled.div`
    display:block;
    width: 15%;
    height: 15%;
    margin: 0 auto;
    cursor: pointer;
    z-index: 200;
`;

const MainTagLine = styled.div`
    font-family: neue-haas-unica, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 5em;
    letter-spacing: 3px;
    color: #f2efe9;
    margin: 4em auto 0 auto;
    text-align: center;

    @media (max-width: 1199px) {
        margin-top: 5em;
        font-size: 4em;
    }
`;

const Play = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    img {
        margin-top: 1rem;
        width: 10%;
        height: 10%;
    }
`

const VideoWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-top: 56.25%;/* Player ratio: 100 / (1280 / 720) */
    ${'' /* transform: translateY(100%); */}
    z-index: 300;
`;



class NewSectionTwo extends Component {

    state = {
        videoPlayer: false,
    }

    handleClickPlay = () => {
        this.setState((prevState) => {
            return {videoPlayer: !prevState.videoPlayer}
        })
    }

    backdropClickHandler = () => {
        this.setState({videoPlayer:false})
      }

  render() {
    let backdrop;

    if(this.state.videoPlayer) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
    <NewContainer>
        {backdrop}
        {this.state.videoPlayer ? <VideoWrapper>
        <ReactPlayer 
        className={styles.react_player}
        height="100%"
        width="100%"
        url='https://vimeo.com/320983996' 
        playing />
        </VideoWrapper>
        
        :
        <div> 
        <LogoWrapper><Link to="/"><Logo src={logo}/></Link></LogoWrapper>
        <MainTagLine>becoming privately healthy<br /> + publicly fruitful leaders<br /> <Play onClick={this.handleClickPlay}><img src={PlayIcon} /></Play></MainTagLine></div>}
        
    </NewContainer>
    )
  }
}


export default NewSectionTwo;