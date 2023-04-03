import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import history from "../books/history.json";
import "./SingleBook.css";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Row className="g-3">
          {history.map((book, index) => (
            <Col xs={3} key={`book-${index}`}>
              <SingleBook
                img={book.img}
                title={book.title}
                price={book.price}
                category={book.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;