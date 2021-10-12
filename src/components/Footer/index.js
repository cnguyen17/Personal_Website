import React, { Component } from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  HiMail
} from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Img,
  Spacer
} from './FooterElements';


// class TypingText extends Component {
//   render() {
//     return <TypeWriter typing={1}>Calvin</TypeWriter>
//   }
// }

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
        <Img  src={ require('../../images/svg-1.svg')}/>
          <FooterLinksWrapper>

            <Spacer  src={ require('../../images/svg-2.svg')} >
              
            </Spacer>
            <FooterLinkItems>

            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink onClick={()=> window.open("https://www.instagram.com/calvin_nguyen.ig/")} target='_blank' aria-label='Instagram'>Instagram</FooterLink>
              <FooterLink onClick={()=> window.open("https://www.facebook.com/calvin.nguyen.5099940/")} target='_blank' aria-label='Instagram'>Facebook</FooterLink>
              <FooterLink onClick={()=> window.open("https://www.linkedin.com/in/calvin-nguyen-a13a7419b/")} target='_blank' aria-label='Instagram'>Linkedin</FooterLink>
              <FooterLink onClick={()=> window.open("mailto:calvin.nguyenco@gmail.com?subject=Let's Talk!")} target='_blank' aria-label='Instagram'>Email</FooterLink>
              <FooterLink onClick={()=> window.open("https://github.com/cnguyen17")} target='_blank' aria-label='Instagram'>GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src={require('../../images/logo4.png')} height={75} width={235} alt = " " />
            </SocialLogo>
            <FooterLinkTitle>Feel Free to follow my Socials as well!</FooterLinkTitle>
            <WebsiteRights>                                              </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/calvin.nguyen.5099940/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/calvin_nguyen.ig/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:calvin.nguyenco@gmail.com?subject=Let's Talk!"
                target='_blank'
                aria-label='Email'
                rel='noopener noreferrer'
              >
                <HiMail />
              </SocialIconLink>
            
              <SocialIconLink href='https://www.linkedin.com/in/calvin-nguyen-a13a7419b/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/cnguyen17' target='_blank' aria-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
