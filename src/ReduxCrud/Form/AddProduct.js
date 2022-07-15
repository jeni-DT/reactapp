import React from "react";
import {
  Button,
  Container,
  Form,
  Navbar,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate ('Redux')
    
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="primary">
        <Navbar.Brand href="/React">
          <Image src=""></Image>
        </Navbar.Brand>
        <h1>
          <marquee>Add product</marquee>
        </h1>
      </Navbar>
      <Container>
        <Row>
          <Col md={6}>
            <div>
                <h1>Add Product</h1>
              <Form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                  <Form.Label><b><i>Image</i></b></Form.Label>
                  <Form.Control type="text" required></Form.Control>
                </div>
                <div>
                  <Form.Label><b><i>Title</i></b></Form.Label>
                  <Form.Control type="text" required></Form.Control>
                </div>
                <div>
                  <Form.Label><b><i>Price</i></b></Form.Label>
                  <Form.Control type="number" required></Form.Control>
                </div>
                <br></br>
                <div>
                <Button variant="primary" size="lg">
          ADD
        </Button>{' '}
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src="https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
