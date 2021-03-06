import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Navbar,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../Action/Actions";

const AddProduct = () => {
    const navigate=useNavigate();
    let dispatch=useDispatch();
    const[change,setChange]=useState('');
    console.log("change", change)

    const handleChange = (e) => {
      setChange({
          ...change,
          [e.target.name]: e.target.value,
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(change, navigate))
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
              <Form >
                <div>
                  <Form.Label><b><i>Image</i></b></Form.Label>
                  <Form.Control type="text" value={change.url} onChange={handleChange}  required></Form.Control>
                </div>
                <div>
                  <Form.Label><b><i>Title</i></b></Form.Label>
                  <Form.Control type="text" required value={change.Title} onChange={handleChange} ></Form.Control>
                </div>
                <div>
                  <Form.Label><b><i>Price</i></b></Form.Label>
                  <Form.Control type="number" required value={change.Price} onChange={handleChange} ></Form.Control>
                </div>
                <br></br>
                <div>
                <Button variant="primary" size="lg" onClick={handleSubmit}>
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
