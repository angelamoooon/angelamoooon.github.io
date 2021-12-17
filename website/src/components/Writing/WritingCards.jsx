import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

function WritingCards(props) {
  // const [expand, updateExpanded] = useState(false);
  // console.info('im writing cards!');
  // console.info(props);
  console.info(props.title);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" target="_blank">
            <Link className="card-link" to={props.link} params={{ testvalue: "hello" }}>
              {/* <EssayPage title={props.title} /> */}
              <BiLink />&nbsp;{props.isEssay ? "View Essay" : "View Blog Post"}
            </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WritingCards;