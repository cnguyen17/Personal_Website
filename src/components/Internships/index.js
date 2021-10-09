import React from 'react';
import Icon1 from '../../images/Travelport.jpg';
import Icon2 from '../../images/DevilDog.png';
import Icon3 from '../../images/jpmorgan.png';
import Icon4 from '../../images/Charles.jpg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './InternshipElements';

const Internships = () => {
  return (
    <ServicesContainer id='Internships'>
      <ServicesH1>My Internships</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          {/* <ServicesH2>Travelport</ServicesH2> */}
          <ServicesP>
            Interned as a Devops position where worked on implementing solutions to multiple Microserviecs and API's
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          {/* <ServicesH2>DevilDog Cybersecurity Intern</ServicesH2> */}
          <ServicesP>
           Cybersecurity Intern involved with vulnrability testing and automating hundreds of official documents.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          {/* <ServicesH2>JP-Morgan Chase Software Engineering Virutal Internship</ServicesH2> */}
          <ServicesP>
            Virtual Software Engineering intern that helped develop programs that helped visualize and analyze share prices data for traders
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          {/* <ServicesH2>Charles Schwab</ServicesH2> */}
          <ServicesP>
           Development program to help students recieve executive level coaching, interview preparation, and networking opportunities. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Internships;
