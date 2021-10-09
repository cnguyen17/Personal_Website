import React, { Component } from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
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
  SocialIconLink
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
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>y
              <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <TypingText /> */}
              <FooterLinkTitle>Please checkout and follow any of my Social Media accounts!</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink onClick={()=> window.open("https://www.instagram.com/calvin_nguyen.ig/")} target='_blank' aria-label='Instagram'>Instagram</FooterLink>
              <FooterLink onClick={()=> window.open("https://www.facebook.com/calvin.nguyen.5099940/")} target='_blank' aria-label='Instagram'>Facebook</FooterLink>
              <FooterLink onClick={()=> window.open("https://www.linkedin.com/in/calvin-nguyen-a13a7419b/")} target='_blank' aria-label='Instagram'>Linkedin</FooterLink>
              <FooterLink onClick={()=> window.open("mailto:calvin.nguyenco@gmail.com?subject=Let's Talk!")} target='_blank' aria-label='Instagram'>Email</FooterLink>


            
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Calvin Nguyen
            </SocialLogo>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
