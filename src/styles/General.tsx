import styled from "styled-components";
import { motion } from "framer-motion";
export const Fontsize = {
  title: {
    ss: "40px",
    sm: "40px",
    m: "60px",
    l: "80px",
  },
  subtitle: {
    ss: "25px",
    sm: "25px",
    m: "35px",
    l: "40px",
  },
  p: {
    ss: "20px",
    sm: "20px",
    m: "25px",
    l: "30px",
  },
  psmall: {
    ss: "15px",
    sm: "15px",
    m: "18px",
    l: "23px",
  },
  span: {
    ss: "10px",
    sm: "10px",
    m: "15px",
    l: "20px",
  },
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};
export const Background_style = styled.div<any>`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const HeroContainer = styled.div<any>`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const Title = styled.div<any>`
  font-family: "Montserrat", sans-serif;
  /* font-size: ; */
  font-weight: ${(props) => props.fontweight};
  @media ${device.mobileS} {
    font-size: ${Fontsize.title.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.title.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.title.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.title.l};
  }
`;
export const Subheading = styled.div<any>`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  /* font-size: ; */
  padding-top: 20px;
  @media ${device.mobileS} {
    font-size: ${Fontsize.subtitle.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.subtitle.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.subtitle.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.subtitle.l};
  }
`;
export const DescriptionSmall = styled.div<any>`
  font-family: "Pacifico", "cursive";
  font-weight: 400;
  /* font-size: ; */
  padding-top: 20px;
  @media ${device.mobileS} {
    font-size: ${Fontsize.psmall.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.psmall.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.psmall.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.psmall.l};
  }
`;

export const SmallSpan = styled.div<any>`
  border-bottom: 1px solid;
  font-family: "Ubuntu Mono", monospace;
  width: fit-content;
  font-weight: 400;
  /* font-size: ; */
  padding-top: 20px;
  margin-bottom: 20px;
  @media ${device.mobileS} {
    font-size: ${Fontsize.span.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.span.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.span.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.span.l};
  }
`;
export const HeroContent = styled.div<any>`
  @media ${device.mobileS} {
    width: 90%;
    height: 50%;
  }
  @media ${device.laptop} {
    padding-left: 10vw;
    height: 100%;
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  /* padding here nids to be adjusted definitely */
  
  justify-content: center;
  align-items: flex-start;
  background-color: white;
`;
export const TrapezoidContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 50%;
  }
  @media ${device.laptop} {
    height: 100%;
    width: 70%;
  }
  background-color: white;
`;
export const Trapezoid = styled.div<any>`
  @media ${device.mobileS} {
    width: 78.5%;
    height: 100%;
  }
  @media ${device.laptop} {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 80%;
    height: 100%;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
    background: black;
  }
  /* padding here nids to be adjusted definitely */
`;
export const Container = styled.div<any>`
  height: fit-content;
  width: 100%;
  background-color: black;
  display: flex;
`;
export const Content = styled.div<any>`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const Content_Title = styled.div<any>`
  margin: 10rem 0 35px 0;
  align-self: center;
  width: fit-content;
  @media ${device.mobileS} {
    font-size: ${Fontsize.subtitle.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.subtitle.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.subtitle.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.subtitle.l};
  }
`;
export const Line = styled(motion.div)`
  /* margin:10px; */
  align-self: center;
  width: 5px;
  background-color: #eeeeee;
  height: 100px;
`;
export const MotionBox = styled(motion.div)`
  margin: 25px 0 25px 0;
  align-self: center;
`;
export const BackdropCss = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalCss = styled(motion.div)`
  /* width: clamp(50%, 700px, 90%); */
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding: 0;
  border-radius: 24px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
export const ModalBefore = styled(motion.button)`
  height: fit-content;
  width: fit-content;
  background-color: transparent;
  color: white;
`;
export const ContainerCard = styled.div`
  width: clamp(273px * 1.5, 273px, 90vw);
  max-width:90vw;
  height: clamp(354px * 1.5, 354px, 50vh);
  background-color: black;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  @media ${device.mobileS} {
    margin: 10vh 0 10vh 0;
  }
  @media ${device.laptopL} {
    margin: 0;
  }
`;
export const ContainerImgWrap = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;
export const ContainerImg = styled.img<any>`
  width: 100%; /* or any custom size */
  height: 100%;
  scale: ${(props) => (props.normal ? 1 : 2.5)};
  object-fit: contain;
`;
export const ContainerTitle = styled.div`
  width: 100%;
  height: 15%;
  padding: 35px;
  color: white;
  @media ${device.mobileS} {
    font-size: ${Fontsize.subtitle.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.subtitle.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.subtitle.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.subtitle.l};
  }
`;

export const ContainerP = styled.div`
  width: 100%;
  height: 15%;
  color: white;
  @media ${device.mobileS} {
    font-size: ${Fontsize.span.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.span.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.span.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.span.l};
  }
`;

export const Card_Wrapper = styled.div`
  margin: 10vh;
  align-self: center;
  width: 80%;
  height: 100%;
  display: flex;

  align-items: center;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.laptopL} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ModalInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ModalInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalInnerHeader = styled.div`
  padding: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  background-color: #4b4943;
`;
export const ModalInnerButton = styled.button`
  background-color: none;
  border-style: none;
  background-color: transparent;
  align-self: flex-end;
  height: 100%;
  border-radius: 100%;
  padding: 2px 1px 1px 1px;
  margin: 5px 10px 5px 5px;
  width: fit-content;
  height: fit-content;
  background-color: #e8673c;
`;

export const ReactH1 = styled.h1<any>`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "24")}px;
  position: absolute;
  left: ${(props) => (props.horizontal ? props.horizontal : "24")}vw;
  top: ${(props) => (props.vertical ? props.vertical : "24")}vh;
  color: "black";
`;

export const Contact_Wrapper = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Contact_Copy = styled.div`
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
    transition: 0.3s linear;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vh;
  width: auto;
  padding: 5px;
  background-color: black;
  color: white;
`;

export const Copied_Logo = styled(motion.div)<any>`
  font-family: "Ubuntu Mono";
  color: black;
  background-color: white;
  position: fixed;
  left: ${(props) => (props.x ? props.x : 0)}px;
  top: ${(props) => (props.y ? props.y : 0)}px;
`;

export const HeroLogo = styled.div`
  @media ${device.mobileS} {
    margin:15px;
  }
  @media ${device.tablet} {
    margin:25px;
  }

  position: absolute;
  z-index:10;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: auto;
  margin:auto;
  text-align:center;
  width: 58px;
  height: 54px;
  background: #d9d9d9;
  margin-right: 25px;
`;

export const LogoName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;

  color: #000000;

`;
