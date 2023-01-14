import React from "react";
import TypingAnimation from "../Animations/TypingAnimation";
import Pentagon from "../Reactthree/Pentagon";
import {
  HeroContainer,
  HeroContent,
  HeroLogo,
  LogoBox,
  LogoName,
  Subheading,
  Title,
  Trapezoid,
  TrapezoidContainer,
} from "../styles/General";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroLogo>
        <LogoBox>
          <LogoName>JX</LogoName>
        </LogoBox>
        <Subheading style={{ padding: 0, margin: 0 }}>James Yeo</Subheading>
      </HeroLogo>

      <HeroContent>
        <Title fontweight={1000}>Software Developer</Title>
        <Subheading>Work with me to</Subheading>
        <Title>
          <TypingAnimation />
        </Title>
      </HeroContent>
      <TrapezoidContainer>
        <Trapezoid>
          <Pentagon
            titles={[
              "Javascript",
              "Python",
              "ReactJs",
              "Flask",
              "Django",
              "HTML",
              "Redux",
            ]}
          />
        </Trapezoid>
      </TrapezoidContainer>
    </HeroContainer>
  );
};

export default HeroSection;
