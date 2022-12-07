import styled from "styled-components";
import { Fontsize } from "./General";
import { device } from "./General";

export const Modal_Container_Content = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: #3f3f3f;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: column;

  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  @media ${device.laptopL} {
    flex-direction: row;
  }
`;
export const Modal_ReactThree = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;

  }
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;

  }
  @media ${device.laptop} {
    width:50%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  margin: 25px;
  width: 70%;
  height: 70%;
  padding: 25px;
  border: 3px solid white;
`;
export const Modal_Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
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
export const Line = styled.div`
  padding: 0;
  margin: 0;
  width: 80%;
  height: 3px;
  background-color: white;
`;
export const InfoWrap = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 0;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #969696;
    color: black;
    transition: 0.3s ease-in;
  }
`;

export const Img_fit = styled.img`
  margin: 25px;
  width: 80%;
  height: 80%;
  object-fit: contain;
`;
export const Content_Modal_P = styled.div`
  width: 100%;
  color: white;
  text-align: start;
  max-width: 70%;
  margin: 0;
  @media ${device.mobileS} {
    font-size: ${Fontsize.span.ss};
    padding:5px;
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.span.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.span.m};
    padding: 25px;
    height: 15%;
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.span.l};
  }
`;