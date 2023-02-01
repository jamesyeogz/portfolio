import { Icon } from "@iconify/react";
import React, { useState, useRef } from "react";
import { MovingCircles, MovingToptoBottom } from "../Animations/Motion";
import StartTransition from "../Animations/StartTransition";
import {
  Card_Wrapper,
  Contact_Copy,
  Contact_Wrapper,
  Container,
  ContainerTitle,
  Content,
  Content_Title,
  Copied_Logo,
  Footer,
  Line,
  Subheading,
  Title,
} from "../styles/General";

const Contact = () => {
  const [mousePos, setMousePos] = useState<any>(null);
  const [Clicked, isClicked] = useState(false);
  const MouseClick = (event: any) => {
    setMousePos({ x: event.clientX, y: event.clientY });
    isClicked(true);
  };
  return (
    <Container>
      <Content>
        <MovingCircles />
        <MovingToptoBottom>
          <Line />
        </MovingToptoBottom>
        <Content_Title>
          <StartTransition height="10vh">Contact Me</StartTransition>
        </Content_Title>
        <div style={{ height: "10vh", width: "10vw" }} />
        <Contact_Wrapper>
          <Subheading>Email:</Subheading>
          <div style={{ height: "2vh", width: "10vw" }} />
          <Contact_Copy>
            <Subheading
              onClick={(event: any) => {
                navigator.clipboard.writeText("jyeogz@gmail.com");
                MouseClick(event);
              }}
            >
              JYEOGZ@GMAIL.COM
            </Subheading>
          </Contact_Copy>
        </Contact_Wrapper>
        <div style={{ height: "10vh", width: "10vw" }} />
        <Contact_Wrapper style={{ flexDirection: "row" }}>
          <Subheading>Socials:</Subheading>
          <a href="https://www.linkedin.com/in/james-yeo-7237571b2/" style={{color:'white'}}>
            <Icon
              icon="mdi:linkedin"
              height="100"
              style={{ margin: "0 15px 0 15px" }}
            />
          </a>
          <a href=" https://www.instagram.com/nubjames/?hl=en" style={{color:'white'}}>
            {" "}
            <Icon
              icon="mdi:instagram"
              height="100"
              style={{ margin:  "0 15px 0 15px" }}
            />
          </a>
        </Contact_Wrapper>
        <div style={{ height: "5vh", width: "10vw" }} />
        <Contact_Wrapper style={{ flexDirection: "row" }}>
          <Contact_Copy>
            <a
              href="/portfolio/images/James Yeo Gui Zhong CV.pdf"
              style={{ textDecoration: "none" }}
            >
              <Subheading>Resume Download</Subheading>
            </a>
          </Contact_Copy>
        </Contact_Wrapper>
        <div style={{ height: "20vh", width: "10vw" }} />
      </Content>
      {Clicked ? (
        <Copied_Logo
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 5, ease: "easeIn" }}
          x={mousePos.x}
          y={mousePos.y}
        >
          Copied!
        </Copied_Logo>
      ) : null}
    </Container>
  );
};

export default Contact;
