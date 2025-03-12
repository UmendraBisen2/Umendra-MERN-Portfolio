import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/";
import emotion from "../../Assets/Projects/";
import editor from "../../Assets/Projects/";
import chatify from "../../Assets/Projects/";
import suicide from "../../Assets/Projects/";
import bitsOfCode from "../../Assets/Projects/";






// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";










// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/Pizza.png";
// import emotion from "../../Assets/Projects/Stack.png";
// import editor from "../../Assets/Projects/tatto.png";
// import chatify from "../../Assets/Projects/shoes.png";
// import suicide from "../../Assets/Projects/quiz.png";
// import bitsOfCode from "../../Assets/Projects/calcu.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pizza Website"
              description="Building a website for a pizza shop is a fun project that combines your HTML, CSS, and JavaScript skills to create a mouthwatering online presence. You can include menu items, ordering options, delivery information, and more, honing your web development abilities."
              ghLink="https://github.com/UmendraBisen2"
              demoLink="https://umendra-pizzawebsite.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website is a that showcases your work, skills, and experience in a professional manner. It's a digital portfolio that allows potential clients or employers to learn more about you and your work.Personal portfolio website typically include examples of your work, your professional background, and your contact information"
              ghLink="https://github.com/UmendraBisen2"
              demoLink="https://umendra-portfolio-o.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tatto Gallery"
              description="An Image Gallery is a collection of images displayed in a grid or slideshow format on a webpage. To create an Image Gallery using JavaScript, you can dynamically load images, create HTML elements, and use Tailwind CSS for styling. JavaScript can add interactivity, like transitions and navigation controls."
              ghLink="https://github.com/UmendraBisen2"
              demoLink="https://umendra-tattoo.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shoes Website"
              description="Creating a simple calculator is a great way to start learning web development. In this tutorial, you'll build your first calculator using HTML, CSS, and JavaScript. These three technologies work together to create a fully functional web application. Whether you're a beginner or looking to refresh your skills, this step-by-step guide will help you understand the basics of coding and web design."
              ghLink="https://github.com/UmendraBisen2"
              demoLink="https://shoes-website-g.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quiz App"
              description="Quiz applications are a fantastic way to engage and entertain users on websites. Whether you want to test knowledge, provide educational content, or simply offer a fun activity, building a quiz application using HTML, CSS, and JavaScript is an excellent choice. In this step-by-step guide, we will walk you through the process of creating a quiz application from scratch."
              ghLink="https://github.com/UmendraBisen2"
             demoLink="https://umendra-quiz-app-ej.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Calculator"
              description="Creating a simple calculator is a great way to start learning web development. In this tutorial, you'll build your first calculator using HTML, CSS, and JavaScript. These three technologies work together to create a fully functional web application. Whether you're a beginner or looking to refresh your skills, this step-by-step guide will help you understand the basics of coding and web design."

              ghLink="https://github.com/UmendraBisen2"
               demoLink="https://umendra-cal.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
