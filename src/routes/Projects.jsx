import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Project from "../components/Project"

const projects = [
    {
      title: "Vacationator",
      link: "https://vacationator-2de9434bd279.herokuapp.com/login",
      pic: "/Vacationator.png",
      desc: "This is a simple MVC HR application with security groups and email alerts utilizing MySQL.",
    },
    {
      title: "CafeTransmute",
      link: "https://akcodes29.github.io/CafeTransmute",
      pic: "/CafeTransmute.png",
      desc: "App showcasing external API calls and data transformation.",
    },
    {
      title: "Github Repo",
      link: "https://github.com/kbrackin",
      pic: "/GitHub.png",
      desc: "Access my other projects and sites.",
    },
    {
      title: "Note Taker",
      link: "https://kbrackin-notetaker-f08f6f68865c.herokuapp.com/",
      pic: "/NoteTaker.png",
      desc: "Open-source note taking app to showcase Express.js",
    },
  ];

function Projects() {
    return (
        
            <div className="projects text-center">
              <br />
              <h1>Projects</h1>
              <Container className="projectcards">
                <Row>
                  {projects.map((project, i) => (
                    <Col sm={12} md={6} key={i}>
                      <Project
                        title={project.title}
                        link={project.link}
                        pic={project.pic}
                        desc={project.desc}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
            )
        }

export default Projects