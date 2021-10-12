import React from 'react';
import Icon1 from '../../images/python.png';
import Icon2 from '../../images/react.png';
import Icon3 from '../../images/angular.png';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>My Skills</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Python</ServicesH2>
          <ServicesP>
            Coded a span of projects in Python and it is my strongest coding language.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>React Native</ServicesH2>
          <ServicesP>
            I developed both EESANA and my portfolio website using React Native.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Angular</ServicesH2>
          <ServicesP>
            I developed MSU Konnect using angular, implementing the MEAN Stack framework.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
