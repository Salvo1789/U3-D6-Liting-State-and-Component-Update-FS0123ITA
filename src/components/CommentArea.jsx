import { Component } from "react";
import { Form, Button, ListGroup, Spinner } from "react-bootstrap";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTIxNmM1NmIzNjAwMTMzZmU1NjMiLCJpYXQiOjE2ODA1MzIwNDgsImV4cCI6MTY4MTc0MTY0OH0.e62TCLuZDwZJwVf8hqJB86E-Xp09cW_yXxxcutaNFYc"
};

export default class CommentArea extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: ""
    },
    comments: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };
  fetchComments = async () => {
    try {
      const response = await fetch(`${BASE_URL}${this.props.asin}`, { headers: headers });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleChange = (key, value) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [key]: value
      }
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization: headers.Authorization
        }
      });

      if (response.ok) {
        this.setState({
          newComment: {
            comment: "",
            rate: "",
            elementId: this.props.asin
          }
        });
        this.fetchComments();
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount = () => {
    this.handleChange("elementId", this.props.asin);
    this.fetchComments();
  };
  render() {
    return (
      <>
        <ListGroup variant="flush">
          {this.state.isLoading && !this.state.error && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {this.state.comments.length === 0 && !this.state.error && !this.state.isLoading && (
            <ListGroup.Item>No comments Found</ListGroup.Item>
          )}
          {this.state.error && !this.state.isLoading && <ListGroup.Item>{this.state.errorMsg}</ListGroup.Item>}
          {this.state.comments.map((comment) => (
            <ListGroup.Item>
              {comment.comment}{" "}
              <Button variant="danger" onClick={() => {}}>
                delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="commentForm.rate">
            <Form.Label>Rate</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value="1"
              onChange={(e) => {
                this.handleChange("rate", e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="commentForm.Comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                this.handleChange("comment", e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}