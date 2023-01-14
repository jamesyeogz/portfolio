import React from "react";
import StartTransition from "../Animations/StartTransition";
import {
  Container,
  Content,
  Content_Title,
  Line,
  MotionBox,
  Title,
} from "../styles/General";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  MovingCircles,
  MovingToptoBottom,
  TransitioningMotion,
} from "../Animations/Motion";
import CaseStudy from "../components/CaseStudy";
const Projects = () => {
  const projects = [
    {
      title:'React Django Ecommerce',
      index: "1",
      description:
      "Create a Ecommerce Website with Dennis Ivy Course to be familiar with the Use of Redux and Reactjs",
      skills: [
        { icon: "akar-icons:javascript-fill", name: "Javascript" },
        { icon: "tabler:brand-django", name: "Django" },
        { icon: "mdi:react", name: "React" },
        { icon: "tabler:brand-redux", name: "Redux" },
      ],
      url: 'https://demoshop-pro.herokuapp.com/',
      github: 'https://github.com/jamesyeogz/proshop',
      image:'/portfolio/images/Ecommerce.png',
      light:false
    },
    {
      title: "Project for Tracking Human movements",
      index: "2",
      description:
        "Track Humans movements in an area with the ToF Sensors provided by Pansonic. Project was built in Panasonic",
      skills: [
        { icon: "akar-icons:javascript-fill", name: "Javascript" },
        { icon: "simple-icons:flask", name: "Flask" },
        { icon: "mdi:language-python", name: "Python" },
        { icon: "akar-icons:html-fill", name: "HTML" },
      ],
      url: "https://business.panasonic.sg/",
      image:'/portfolio/images/ToF.png'
    },
    {
      title: "Project Life Cycle",
      index: "3",
      description:
        "With Lidar Sensors, we helped to integrate the sensors to real life applications such as human Surveilence to prevent overcrowd. We updated the application to the cloud. Done in NEC",
      skills: [
        { icon: "mdi:microsoft-azure", name: "Azure" },
        { icon: "mdi:docker", name: "Docker" },
      ],
      url: "https://sg.nec.com/",
      image: '/portfolio/images/Lidar.png'
    },
    {
      title: "SISP for Panasonic",
      index: "4",
      description:
        "Built the System Integration System for Panasonic to link sensors easily to one main platform",
      skills: [
        { icon: "akar-icons:javascript-fill", name: "Javascript" },
        { icon: "mdi:language-python", name: "Python" },
        { icon: "mdi:react", name: "React" },
      ],
      url: "https://business.panasonic.sg/",
      image:'/portfolio/images/SISP.jpg'
    },
    {
      title: "Blockchain DIP Project",
      index: "5",
      description:
        "Built a Website using Web3 Libraries and Solidity to trade Energy tokens on the website inside the Ethereum Test Network",
      skills: [
        { icon: "logos:ethereum", name: "Ethereum" },
        { icon: "vscode-icons:file-type-light-solidity", name: "Solidity" },
        { icon: "mdi:react", name: "React" },
      ],
      url: "https://dip-navy.vercel.app/",
      github:'https://github.com/jamesyeogz/DIP',
      image:'/portfolio/images/DIP.png',
    }
  ];
  return (
    <Container>
      <Content>
        <Content_Title>
          <StartTransition height="10vh">Case Studies</StartTransition>
        </Content_Title>
        <MovingCircles />
        <MovingToptoBottom>
          <Line />
        </MovingToptoBottom>
        {projects.map((project) => (
          <TransitioningMotion>
            <CaseStudy {...project} />
          </TransitioningMotion>
        ))}
        {/* <TransitioningMotion>
          <CaseStudy
            title="Project Delta"
            index="1"
            description="Lorem Ipsum"
            skills={[
              { icon: "akar-icons:javascript-fill", name: "Javascript" },
            ]}
            github="google.com"
          />
        </TransitioningMotion> */}
      </Content>
    </Container>
  );
};

export default Projects;
