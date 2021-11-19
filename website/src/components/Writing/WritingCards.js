import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Link, Route } from "react-router-dom";

function WritingCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Route path={props.Link}>
        <Button variant="primary" target="_blank">
        <Link className="card-link" to=""><BiLinkExternal /> &nbsp;{props.isEssay ? "View Essay" : "View Blog Post"} </Link>
        </Button>
        </Route>
      </Card.Body>
    </Card>
  );
}
export default WritingCards;