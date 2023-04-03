import { Component } from "react";
import { Button, Card, Badge } from "react-bootstrap";
import "./SingleBook.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleChange = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    let cardStyle;
    if (this.state.selected === true) {
      cardStyle = { borderColor: "#198754", backgroundColor: "lightgreen" };
    } else {
      cardStyle = { borderColor: "transparent", backgroundColor: "initial" };
    }
    return (
      <Card
        style={cardStyle}
        onClick={this.handleChange}
        className="border-1  shadow-lg h-100 p-1 book-card"
      >
        <Card.Img
          variant="top"
          src={this.props.img}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center">{this.props.title}</Card.Title>
          <Card.Text className="text-center fw-semibold fst-italic">
            {this.props.category}
          </Card.Text>
          <div className="mt-auto d-flex justify-content-between">
            <Button variant="success">Buy</Button>
            <Badge bg="dark" className="d-flex align-items-center">
              {this.props.price}$
            </Badge>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
