import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  spacer,
  Video
} from './InfoElements';

const Scout = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  space = "      ",
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    onClick={()=> window.open("https://undraw.co/search")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                <spacer>&nbsp; &nbsp;</spacer>

                  <Button
                    marginleft = {10000}
                    onClick={()=> window.open("https://undraw.co/search")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel2}
                  </Button>
                  
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
               {img.endsWith('.mp4') ? (
                  <Video autoPlay loop muted playsInline>
                    <source src={img} type="video/mp4" />
                    Your browser does not support the video tag.
                  </Video>
                ) : (
                  <Img src={img} alt={alt} />
                )}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Scout;
