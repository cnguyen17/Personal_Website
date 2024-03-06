import React from 'react';
import Icon1 from '../../images/Travelport.jpg';
import Icon2 from '../../images/DevilDog.png';
import Icon3 from '../../images/jpmorgan.png';
import Icon4 from '../../images/Charles.jpg';
import Icon5 from '../../images/Zoom-Logo.png';
import Icon6 from '../../images/Northrop_grumman.png';

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
      <ServicesH1>Work Experiences</ServicesH1>
      <ServicesWrapper>

      <ServicesCard onClick={()=> window.open("https://www.northropgrumman.com/space?utm_source=google&utm_campaign=fy23framework&utm_medium=kw&utm_audience=list_g&utm_content=null_null&utm_format=copy&utm_code=OTH-13321&source=OTH-13321&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMaTQoliMmPO9rmVBn2ed0BfL9NrjzqVzPNsG-kxhL4IOLnjhIRkJexoChQwQAvD_BwE")}>
          <ServicesIcon src={Icon6} />
          {/* <ServicesH2>Northrop Grumman</ServicesH2> */}
          <ServicesP>
            Developed automated test scripts in Python for satellite deployment software, ensuring regression testing of software requirements. Additionally, collaborated with multiple teams to identify and communicate bugs, while also conducting live testing with O&I, actively troubleshooting and documenting performance observations and encountered issues.
          </ServicesP>
        </ServicesCard>

      <ServicesCard onClick={()=> window.open("https://zoom.us/")}>
          <ServicesIcon src={Icon5} />
          {/* <ServicesH2>Zoom</ServicesH2> */}
          <ServicesP>
            Production Service Engineer focused on taking on escalations related to service quality issues with Zoom Room, where I would investigate complex issues using WEB/Client/Server/Database service across different OS environments and platforms.
          </ServicesP>
        </ServicesCard>

        <ServicesCard onClick={()=> window.open("https://www.travelport.com/")}>
          <ServicesIcon src={Icon1} />
          {/* <ServicesH2>Travelport</ServicesH2> */}
          <ServicesP>
          Optimized TDM Microservices and APIs with JavaScript and C#. Integrated a tool using JavaScript and PowerBI for streamlined information display on an interactive dashboard. Contributed to automating SAFe class registration for Travelport, raising over $2,000 for the Dumb Friends League on their behalf.
          </ServicesP>
        </ServicesCard>

        <ServicesCard onClick={()=> window.open("https://www.devildogcyber.com/")}>
          <ServicesIcon src={Icon2} />
          {/* <ServicesH2>DevilDog Cybersecurity Intern</ServicesH2> */}
          <ServicesP>
          Cybersecurity Intern involved performing vulnerability testing for various US bases/institutions and generated comprehensive reports on identified vulnerabilities. Automated and formatted numerous official documents and forms utilizing Elastic Search, Access, Word, and Adobe.
          </ServicesP>
        </ServicesCard>

        <ServicesCard onClick={()=> window.open("https://www.theforage.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/JP-Morgan-Banking-Technology-Virtual-Program")}>
          <ServicesIcon src={Icon3} />
          {/* <ServicesH2>JP-Morgan Chase Software Engineering Virutal Internship</ServicesH2> */}
          <ServicesP>
            Virtual Software Engineering intern that develop programs that utilized Python, TypeScript, React, web applications, and various platforms to contribute to the development of programs for visualizing and analyzing share price data at JP Morgan Chase.
          </ServicesP>
        </ServicesCard>

        <ServicesCard onClick={()=> window.open("https://www.schwab.com/")}>
          <ServicesIcon src={Icon4} />
          {/* <ServicesH2>Charles Schwab</ServicesH2> */}
          <ServicesP>
           Development program to help students receive executive level coaching, interview preparation, and networking opportunities.          
            </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Internships;
