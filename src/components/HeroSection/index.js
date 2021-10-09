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
  ArrowRight
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
        <HeroH1>Calvin Nguyen</HeroH1>
        <HeroP>
          I'm a final-year student at Metropolitan State University of Denver majoring in Computer Science and minoring in Mathematics and Management, with aspirations to become a 
          software engineer. 
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
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
            Contact Me! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
