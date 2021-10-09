// export const homeObjOne = {
//   id: 'about',
//   lightBg: false,
//   lightText: true,
//   lightTextDesc: true,
//   topLine: 'About Me',
  
//   description:
//     "Hey! I'm Calvin, a Software Engineer based in Denver, CO. I love to work on a plethora of projects relating to coding and engineering that ignite my passions and push me to learn and experience more.",
//   headline: 'My Personal Interests',
//   description1:
//     "When I am not doing anythign relaated to coding, I enjoy spending my time working out, Playing guitar, Hiking, and Learning new skills",
//   buttonLabel: 'Get Started',
//   imgStart: false,
//   img: require('../../images/Calvin.JPG'),
//   alt: 'Car',
//   dark: true,
//   primary: true,
//   darkText: false
// };

export const Experience = {
  id: 'Experience',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Experience',
  
  description:
    "Hey! I'm Calvin, a Software Engineer based in Denver, CO. I love to work on a plethora of projects relating to coding and engineering that ignite my passions and push me to learn and experience more.",
  headline: 'Resume',
  // description1:
  //   "When I am not doing anythign relaated to coding, I enjoy spending my time working out, Playing guitar, Hiking, and Learning new skills",
  buttonLabel: 'Click to Download',
  imgStart: true,
  img: require('../../images/Resume.jpg'),
  alt: 'Car',
  dark: false,
  primary: true,
  darkText: true
};
export function swipe() {
  var largeImage = document.getElementById('largeImage');
  largeImage.style.display = 'block';
  largeImage.style.width=200+"px";
  largeImage.style.height=200+"px";
  var url=largeImage.getAttribute('src');
  window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}
// export const projectOne = {
//   id: 'Project',
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: 'Project 1',
//   headline: 'MSU Konnect',
//   description:
//     "MSU Konnect will allow students to create their own websites to show off their portfolio/resume easily - with no need of prior coding knowledge! In this day and age, it's vital for one to have an online presence to be competitive in the job market. With MSU Konnect, students will be able to choose a variety of website templates to choose from that will build automatically for them. You will be able to fill in a form with information about yourself and the rest will be taken care of!",
//   buttonLabel: 'Angular', 
//   buttonLabel1: 'Learn More',
//   imgStart: true,
//   img: require('../../images/MSUkonnect.png'),
  
//   alt: 'Piggybank',
//   dark: false,
//   primary: false,
//   darkText: true
// };
// export const projectTwo = {
//   id: 'Project',
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: 'Project 2',
//   headline: 'EESANA',
//   description:
//     "Helped develop and deploy website for Eritrean Ethiopian Student Association (EESANA) was established in March 2020 by students to bridge the gap between different Eritrean Ethiopian Student Associations across college campuses and their respective countries.",
//   buttonLabel: 'React Native',
//   imgStart: false,
//   img: require('../../images/eesana.png'),
//   alt: 'Papers',
//   dark: false,
//   primary: false,
//   darkText: true
// };


// export const Contact = {
//   id: 'signup',
//   lightBg: false,
//   lightText: true,
//   lightTextDesc: true,
//   topLine: 'Contact',
//   // headline: 'Creating an account is extremely easy',
//   description:
//     "If you have any questions or would want to get in contact with me for anything, Press the contact below and I'll get back to you as soon as possible!",
//   buttonLabel: 'Contact Me',
//   imgStart: true,
//   img: require('../../images/svg-3.svg'),
//   alt: 'Papers',
//   dark: true,
//   primary: true,
//   darkText: false
// };
