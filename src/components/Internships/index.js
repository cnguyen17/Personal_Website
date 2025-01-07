import React from 'react';
import { useState } from 'react';
import Icon1 from '../../images/Travelport.jpg';
import Icon2 from '../../images/DevilDog.png';
import Icon3 from '../../images/jpmorgan.png';
import Icon4 from '../../images/Charles.jpg';
import Icon5 from '../../images/Zoom-Logo.png';
import Icon6 from '../../images/Northrop_grumman.png';
import Icon7 from '../../images/pacer.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ExpandedContent
} from './InternshipElements';

const Internships = () => {

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const internships = [
    {
      id: 1,
      icon: Icon7,
      link: 'https://pacer.co/',
      description:
        'Designed Figma prototypes aligned with user needs. Built web apps for Pacer using React and Firebase, including a live auction browser with advanced features. Redesigned core tools and homepage, prioritizing mobile responsiveness and usability.',
      expanded: (
        <ul>
          <li>
            Designed interactive demos and prototypes for future products and
            applications using Figma, ensuring alignment with user needs and
            product goals.
          </li>
          <li>
            Developed and deployed diverse web applications for Pacer using React,
            TypeScript, and Firebase, including a fully centralized live auction
            browser enabling users to buy and view vehicles.
          </li>
          <li>
            Integrated features such as profit margin calculations, bid costs, and
            shipping expenses, leveraging web scraping to aggregate data from
            multiple marketplaces.
          </li>
          <li>
            Redesigned Pacer's home page and multiple core applications, including
            the transaction page, shipping tracker, description builder, verify ID
            tool, and live auction browser, prioritizing mobile responsiveness and
            aesthetic simplicity to enhance user experience.
          </li>
          <li>
            Enhanced user interfaces across applications to fit mobile platforms
            and improve usability, leading to a more cohesive and visually
            appealing ecosystem of tools and services.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      icon: Icon6 ,
      link: 'https://www.northropgrumman.com/space?utm_source=google&utm_campaign=fy23framework&utm_medium=kw&utm_audience=list_g&utm_content=null_null&utm_format=copy&utm_code=OTH-13321&source=OTH-13321&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMaTQoliMmPO9rmVBn2ed0BfL9NrjzqVzPNsG-kxhL4IOLnjhIRkJexoChQwQAvD_BwE',
      description: 'Apart of the Software Engineering Integration and Test Team responsible for verifying a span of requirments for software that was going to be deployed on a few Satelites.',
      expanded: (
        <ul>
          <li>
            Developed automated test scripts in Python for regression testing of
            software requirements intended for satellite deployment. This
            involved using a SEIT framework to send data via Kafka, update and
            check databases using SQL, process algorithms in real-time, match data
            with JSON formatting for desired results, and output results to an
            HTML file for knowledge sharing.
          </li>
          <li>
            Documented STC documents outlining detailed test steps for software
            requirements. These documents were shared on Confluence to promote
            knowledge sharing and coordination among various teams.
          </li>
          <li>
            Collaborated with cross-functional teams to identify, document, and
            communicate bugs discovered during testing and debugging. Created
            detailed tickets in Jira, managed code from various repositories in
            Bitbucket, and coordinated via Microsoft Teams to devise effective bug
            resolution strategies.
          </li>
          <li>
            Conducted live testing with O&I, actively troubleshooting and
            documenting observations on the performance and issues encountered in
            our scripts.
          </li>
          <li>
            Configured and set up Linux virtual machines for testing, incorporating
            bash scripting to automate and streamline the setup process.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      icon: Icon5,
      link: 'https://zoom.us/',
      description:
        'Production Service Engineer focused on taking escalations and investigating complex service issues across OS environments and platforms.',
      expanded: (
        <ul>
          <li>
            Monitored and managed service quality with tools and technologies like
            IP telephony, conferencing solutions, and service monitoring tools.
          </li>
          <li>
            Collaborated with multiple tiers of support, investigating complex
            issues using WEB/Client/Server/Database services across different OS
            environments (e.g., Windows Servers, Android, Mac OS Servers).
          </li>
          <li>
            Collected information, designed processes, and documented
            troubleshooting methods for the support knowledge base.
          </li>
          <li>
            Debugged diverse components of the Zoom client-server system,
            troubleshooting various layers of the OSI model, including TCP/IP
            packet tracking and application diagnostics.
          </li>
          <li>
            Conducted live technical support during real-time client calls,
            collaborating with TSMs and TAMs to resolve high-priority issues.
          </li>
          <li>
            Deployed and managed containers using Docker and AWS cloud services
            like S3 to optimize escalated service aspects.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      icon: Icon1,
      link: 'https://www.travelport.com/',
      description:
        'Optimized TDM Microservices and APIs with JavaScript and C#. Integrated tools for automated dashboards and contributed to process improvements.',
      expanded: (
        <ul>
          <li>
            Implemented solutions to optimize TDM Microservices and APIs using
            JavaScript and C#.
          </li>
          <li>
            Integrated a tool using JavaScript and PowerBI to automate and
            streamline the process of displaying information on an interactive
            dashboard.
          </li>
          <li>
            Leveraged CI/CD tools like Jenkins and Ansible to streamline
            development, testing, and deployment processes.
          </li>
          <li>
            Contributed to automating registration for SAFe classes, increasing
            efficiency by 15%.
          </li>
          <li>
            Raised over $2,000 for the Dumb Friends League on Travelport’s behalf.
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      icon: Icon2,
      link: 'https://www.devildogcyber.com/',
      description:
        'Cybersecurity Intern performing vulnerability testing for U.S. bases and institutions and automating official documentation.',
      expanded: (
        <ul>
          <li>
            Performed vulnerability testing for U.S. bases and institutions using
            tools like Wireshark and NMAP, generating comprehensive vulnerability
            reports.
          </li>
          <li>
            Automated and formatted hundreds of official documents using Elastic
            Search, Access, Word, and Adobe.
          </li>
          <li>
            Demonstrated expertise in cybersecurity fundamentals, including threat
            detection and data analysis.
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      icon: Icon3,
      link: 'https://www.theforage.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/JP-Morgan-Banking-Technology-Virtual-Program',
      description:
        'Virtual Software Engineering intern developing programs for data visualization and analysis using Python and React.',
      expanded: (
        <ul>
          <li>
            Utilized Python, TypeScript, React, and web applications to develop
            tools for visualizing and analyzing share price data.
          </li>
        </ul>
      ),
    },
    {
      id: 7,
      icon: Icon4,
      link: 'https://www.schwab.com/',
      description:
        'Development program participant receiving executive coaching, interview preparation, and networking opportunities.',
      expanded: (
        <ul>
          <li>
            Engaged in a development program providing executive-level coaching,
            interview preparation, and networking opportunities.
          </li>
        </ul>
      ),
    },
  ];


  return (
    <ServicesContainer id="Internships">
      <ServicesH1>Work Experiences</ServicesH1>
      <ServicesWrapper>
        {internships.map((internship, index) => (
          <ServicesCard
            key={internship.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open(internship.link)}
          >
            <ServicesIcon src={internship.icon} />
            <ServicesP>{internship.description}</ServicesP>
            {hoveredCard === index && (
              <ExpandedContent>
                <img src={internship.icon} alt={`${internship.description} logo`} />
                {internship.expanded}
              </ExpandedContent>
            )}
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Internships;
