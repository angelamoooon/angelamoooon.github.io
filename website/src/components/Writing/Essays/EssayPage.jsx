import { Container } from "react-bootstrap";
import text from './data'; // Relative path to your File

function EssayPage(props) {
  console.log(text); 

  console.info('IM IN THE ESSAY PAGE!!!');
  console.info(props);

  
  // const obj = {
  //   title: props.title,
  //   body: 
  // }
  // const dataObj = {
  //   ProgrammingALife: 69,
  // };

  return (
    <Container>
            <span className="charcoal"></span>
            <p>{text}</p>
              <p>{props.match.params.essayTitle}</p>
              <br />
    </Container>
  );
}

export default EssayPage;