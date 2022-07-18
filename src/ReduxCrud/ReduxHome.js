import React, { useState,useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Image,
  Button,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Fetch from "../Crud/Fetch";
import { fetchProduct,deleteproducts } from "./Action/Actions";
// import { data } from "./Data";


const ReduxHome = () => {
  const navigate = useNavigate();

  const [del, setDel] = useState("false");
  let products = useSelector((state) => state.allproducts.products);
  console.log(products, "datas");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [del, dispatch]);
  // const handleChange = () => {

  //   navigate("/Additem")
  // }
  const handleDelete = (product) => {
    dispatch(deleteproducts(product))
    setDel(true)
  }

  const handleSub = (e) => {
    e.preventDefault();
    navigate("/Additem");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <Image src=""></Image>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-12">
              {/* <CardHeader>List Of Items</CardHeader>
              <Row>
                {data.map((Info) => {
                  return (
                    <Col>
                      <Card style={{ width: "230px" }} key={Info.id}>
                        <Card.Img variant="top" src={Info.url} />
                        <Card.Body>
                          <Card.Title>{Info.Title}</Card.Title>
                          <Card.Text>{Info.Price}</Card.Text>

                          <Button variant="info">Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row> */}
               {products && products.length > 0 && products.map((product) => {
            return (
              <Row>
                <Col>




                  <Card
                    style={{ width: "18rem" }}>
                    <Card.Img
                      src={product.url}>
                    </Card.Img>
                    <Card.Body >
                      <div> {product.id}</div>
                      <div> {product.Title}</div>
                      <div> {product.Price}</div>

                    </Card.Body>

                    {/* <Button className="btn-warning" style={{ width: "10rem" }} onClick=
                      {() => handleEdit(product.id)}>Edit</Button> */}
                    <Button className="btn-danger" style={{ width: "10rem" }} onClick=
                      {() => handleDelete(product.id)}>Delete</Button>

                    {/* <td><Button className="btn-primary" onClick={()=>handleEdit(demy.id)}>Edit</Button></td></tr> */}

                  </Card>

                </Col>
              </Row>
            )
          })}
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <Button variant="dark" onClick={handleSub}>
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxHome;
