import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E3DBBA;
  padding: 0 50px;
  padding: 80px 50px;
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  position: relative; /* Establish stacking context */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

// export const ServicesCard = styled.div`
//   background: #010606;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 10px;
//   max-height: 340px;
//   padding: 30px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;

export const ServicesCard = styled.div`
  position: relative;
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 1; /* Base z-index */

  img {
    width: 100%; /* Scales the logo to fit within the card width */
    height: auto; /* Maintains the aspect ratio */
    margin-bottom: 10px; /* Space below the logo */
    object-fit: contain; /* Ensures the logo is fully visible */
  }

  &:hover {
    z-index: 10; /* Ensure the card is above other elements */
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ExpandedContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #010606;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  color: white;
  font-size: 12px; /* Smaller font size */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  z-index: 20; /* Ensures the hover card is on top */
  text-align: center;
  overflow: auto;
  width: 100%;
  height: 300px; /* Maintain the specified height */

  img {
    width: 100%; /* Scales the logo to fit within the card width */
    height: auto; /* Maintains the aspect ratio */
    margin-bottom: 10px; /* Space below the logo */
    object-fit: contain; /* Ensures the logo is fully visible */
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: disc;
    text-align: left;
    line-height: 1.5; /* Adjust spacing between lines */
  }

  li {
    margin-bottom: 10px; /* Space between bullet points */
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 37px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #fff; 
  margin-bottom: 50px;
`;

export const ServicesP = styled.p`
  font-size: 12px;
  color: #fff;
  text-align: center;
`;
