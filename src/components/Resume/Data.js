

export const Experience = {
  id: 'Experience',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Experience',
  
  description:
    "Feel free to click the button below to download my resume and take a better look at what accompliments and projects I've worked on.",
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
