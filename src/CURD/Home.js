

import React from 'react'
import { Container, Navbar, Nav, Row, Col, Card, Image ,Button} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Fetch from '../Crud/Fetch';
import {data} from './Data'
import {Table}from './Table'

function Home() {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">

                <Navbar.Brand href="#home"><Image src=''></Image></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>

            </Navbar>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Container className='col-12'>
                            <CardHeader>List Of Items</CardHeader>
                            <Row>
                                {
                                    data.map((Info)=>{
                                        return(
                                            <Col>
                                            <Card style={{ width: '150px' }}key={Info.id}>
                                                    <Card.Img variant="top" src={Info.url} />
                                                    <Card.Body>
                                                        <Card.Title>{Info.Title}</Card.Title>
                                                        <Card.Text>
                                                            {Info.Price}
                                                        </Card.Text>
                                                        <Button variant="primary">Action</Button>
            
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }


                               
                                
                            </Row>
                            


                        </Container>


                    </div>
                    <div className='col-lg-6'>
                  {/* <tablePass={IDsTATE} */}
                  {/* <Table/> */}
                  <Fetch/>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default Home