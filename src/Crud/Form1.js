import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Form1() {
    const [value, setValue] = useState({})
    const change = (e) => {
        e.preventDefault();
        setValue({...value,[e.target.name]:e.target.value});


    }

    console.log(value);
    const nav= useNavigate();
    const changePath=(e)=>{
        e.preventDefault();
              nav('/fetch');
    }
    return (

        <div>

            <h1>Student Details</h1>
            <Container className="col-3">
                <Form onSubmit={(e)=>(change(e))} >
                    <div>
                        <Form.Label>Reg.no:</Form.Label>
                        <Form.Control type='text' name='reg.no' onChange={change} ></Form.Control>
                    </div>
                    <div>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' name='name' onChange={change}></Form.Control>
                    </div>
                    <div>
                        <Form.Label>Class:</Form.Label>
                        <Form.Control type='text' name='class' onChange={change}></Form.Control>
                    </div>
                    <div>
                        <Form.Label>Mark:</Form.Label>
                        <Form.Control type='text' name='total' onChange={change}></Form.Control>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit" onClick={(e)=>(changePath(e))}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>





        </div>

    )
}

export default Form1