import React from "react";
import styled from "styled-components";
import { device, Fontsize, SmallSpan, Subheading } from "../styles/General";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
const Case_Container = styled.div<any>`
  background-image: url(${(props) => (props.image ?props.image: "")});
  color: ${(props) => (props.light ?  'black': 'white')};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 25px;
  height:auto;
  min-height:50vh;
  border-style: solid;
  border-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content:space-between; */
  font-family: "Ubuntu Mono", monospace;
  @media ${device.mobileS} {
    width: 80vw;
  }
  @media ${device.tablet} {
    width: 90vw;
  }
  @media ${device.laptop} {
    width: 90vw;
  }
`;

export const Case_Button = styled.button<any>`
  transition: 0.25s ease;
  color: ${(props) => (props.button_text ? props.button_text : "white")};
  background-color: ${(props) =>
    props.button_color ? props.button_color : "transparent"};
  border-style: solid;
  border-color: white;
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 15px 25px 15px 25px;
  font-family: "Ubuntu Mono", monospace;
  @media ${device.mobileS} {
    font-size: ${Fontsize.p.ss};
  }
  @media ${device.tablet} {
    font-size: ${Fontsize.p.sm};
  }
  @media ${device.laptop} {
    font-size: ${Fontsize.p.m};
  }
  @media ${device.laptopL} {
    font-size: ${Fontsize.p.l};
  }
`;
const Wrapper = styled.div`
  &:hover ${Case_Button} {
    width: fit-content;
    background-color: white;
    color: black;
  }
`;
const Container_Title = styled.div`
  font-family: "Ubuntu Mono", sans-serif;
  font-weight: bold;
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
const Button_Wrap = styled.div<any>`
  margin-top: auto;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`;
const Description = styled.div<any>`
  font-family: "Montserrat", sans-serif;
  max-width: 75%;
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
const Skills = styled.div<any>`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width:100%;
    height:fit-content;
`
const Skill = styled.div<any>`
    width:fit-content;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content:center;
    align-items:center;
    grid-gap:20px;
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
`
const CaseStudy = ({index,title,description,skills,url,github,image,light}:any) => {
  return (
    <Case_Container image={image} light={light}>
      <SmallSpan>0{index}.</SmallSpan>
      <Container_Title>{title}</Container_Title>
      <Skills>
      {skills && skills.map((skill:any,index:any) =><Skill key={index}><Icon icon={skill.icon} /><p>{skill.name}</p></Skill>)}
        {/* <Skill><Icon icon="akar-icons:javascript-fill" /><p>Javascript</p></Skill>
        <Skill><Icon icon="akar-icons:javascript-fill" /><p>Javascript</p></Skill>
        <Skill><Icon icon="akar-icons:javascript-fill" /><p>Javascript</p></Skill> */}
      </Skills>
      <Description>
      {description}
      </Description>
      <Button_Wrap>
        <a href={url ? url:'#'}><Wrapper>
          <Case_Button>View CaseStudy</Case_Button>
        </Wrapper></a>
        {github &&  <a href={github ? github:'#'}><Wrapper>
          <Case_Button>View Github</Case_Button>
        </Wrapper></a>}
      </Button_Wrap>
    </Case_Container>
  );
};

export default CaseStudy;
