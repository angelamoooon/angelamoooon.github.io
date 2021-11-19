import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";

function EssayPage(props) {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="charcoal">{postSlug}Programming a Life</span>
            Lesson 0: Hello World
            <br />System.out.println(“Hello, World!”);
            <br />The first thing you learn to do in any introductory computer science class is to print “Hello, World!” as an output string. It’s a simple program to code, but it involves many complex processes in the background to run correctly. Thus, it became a common check for software engineers to try before running any other programs. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default EssayPage;