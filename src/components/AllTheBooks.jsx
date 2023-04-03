import { Container, Row, Card, Button} from 'react-bootstrap';
import { Component } from 'react';
import books from "../books/fantasy.json"

class AllTheBooks extends Component {
    state = {};
  
    render() {
      return (
        <Container className="py-5 justify-content-center">
          <Row className="gap-3 justify-content-center">
            {books.map((book, index) => (
              <Card
                style={{ width: "19.19rem" }}
                key={`book-${index}`}
                className="p-2"
              >
                <Card.Img variant="top" src={book.img} className=" rounded" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price + "$"}</Card.Text>
                  <Button variant="success">Add</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      );
    }
  }
  
  export default AllTheBooks;