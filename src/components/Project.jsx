import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import propTypes from "prop-types";

Project.propTypes = {
    title: propTypes.string,
    link: propTypes.string,
    pic: propTypes.string,
    desc: propTypes.string
  }

function Project(props) {
    return (
        <Card
          bg="dark"
          text="light"
          className="mt-2 mb-2"
          // style={{ height: "80%" }}
        >
          <Card.Img variant="bottom" src={props.pic} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.desc}</Card.Text>
            <a href={props.link}>
              <Button>Visit site</Button>
            </a>
          </Card.Body>
        </Card>
      );
}

export default Project;