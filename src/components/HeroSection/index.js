import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/COAST_short.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline loop autoPlay  muted src={Video} type='COAST_short.mp4' />
      </HeroBg>
      <HeroContent>
        <Img  src={ require('../../images/Profileborder.png')}/>
        <HeroH1>Calvin Nguyen</HeroH1>
        <HeroP>
        Former Production Service Engineer @ Zoom - DevOps - Software Engineer - Cybersecurity  
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Enter Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
