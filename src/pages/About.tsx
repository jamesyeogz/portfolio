import React from "react";
import { MovingCircles, MovingToptoBottom } from "../Animations/Motion";
import StartTransition from "../Animations/StartTransition";
import Card from "../components/Card";
import ModalNormal from "../components/ModalNormal";
import Background from "../Reactthree/Background";
import Pentagon from "../Reactthree/Pentagon";
import {
  Card_Wrapper,
  Container,
  Content,
  Content_Title,
  Line,
  Title,
} from "../styles/General";

const About = () => {
  const jobs_content ={
    title:'Jobs',
    img:'/portfolio/images/Testimonial.JPG',
    info: [
      {
        certificate: "Panasonic R&D Internship",
        duration:'Jan 2022 - July 2022',
        image: "/portfolio/images/panasonic_cert.png",
      },
      {
        certificate: "NEC Summer Internship",
        duration:'May 2021 - July 2021',
        image: "/portfolio/images/Testimonial.JPG",
      }]
  }
  const about_content = {
    title: "Certificates",
    info: [
      {
        certificate: "Deep learning: Recurrent Neural Networks in Python",
        image: "/portfolio/images/Udemy.jpg",
        url: "/portfolio/images/Udemy.jpg",
        logo: "/portfolio/images/LogoUdemy.png",
      },
      {
        certificate: "Data Structures and Algorithms Python",
        image: "/portfolio/images/DSAUdemy.jpg",
        url: "/portfolio/images/DSAUdemy.jpg",
        logo: "/portfolio/images/LogoUdemy.png",
      },
      {
        certificate: "Django with React",
        image:"/portfolio/images/ReactUdemy.jpg",
        url:'/portfolio/images/ReactUdemy.jpg',
        logo:'/portfolio/images/LogoUdemy.png'
      },
      {
        certificate:'Electrical and Electronics Engineering Bachelor Degree',
        image:'/portfolio/images/ntu.jpg',
        logo:'/portfolio/images/ntu.jpg'
      }
    ],
  };
  const job_content = {};
  const self_content = {
    title: "Quick Introduction",
    info: [
      {
        paragraph:
          "I am a Self Taught Software Developer with a Year of Experience in the IT industry"
      },
      {
        paragraph:
          "I am most efficient in integrating new products into applications, with mostly python as my backend. I am familiar with Flask and Django for python",
      },
      {
        paragraph:
          "I do have much exposure in machine learning in school and my projects. With Tensorflow as my main library, I use mainly Neural Network as my main model to train and test results",
      },
    ],
    img: "/portfolio/images/Udemy.jpg",
  };
  return (
    <Container>
      <Content>
        <MovingCircles />
        <MovingToptoBottom>
          <Line />
        </MovingToptoBottom>
        <Content_Title>
          <StartTransition height="10vh">About Myself</StartTransition>
        </Content_Title>
        <MovingToptoBottom>
          <Line />
        </MovingToptoBottom>

        <Card_Wrapper>
          <Card
            url="/portfolio/images/photo-1628563694622-5a76957fd09c.jfif"
            Title="My Journey"
            Text="Learn More about my life"
          >
            <ModalNormal {...self_content} usethree={false} />
          </Card>
          <Card
            url="/portfolio/images/3e8b0b2869722dcef04853cef3ade93f.jpg"
            Title="My Achievements"
            Text="Cerfiticates and Degree"
            normal={true}
          >
            <ModalNormal {...about_content} usethree={true} />
          </Card>
          <Card
            url="/portfolio/images/196-1969939_experience-icon-target-black-white.png"
            Title="Jobs and Experience"
            Text="The list of Jobs and Internships in my Life"
            normal={true}
          >
            <ModalNormal {...jobs_content} usethree={false} />
          </Card>
        </Card_Wrapper>
      </Content>
    </Container>
  );
};

export default About;
