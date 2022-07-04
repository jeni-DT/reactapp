
import { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate()
    const [inValue, setInValue] = useState({
        username: "",
        email: "",
        password: "",
        mnum: ""

    })
    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        mnum: ""
    })

    const handleText = (e) => {
        const { name, value } = e.target

        switch (name) {
            case "username":
                error.username = ""
                break;

            case "email":
                error.email = ""
                break;

            case "password":
                error.password = ""
                break;

            case "mnum":
                error.mnum = ""
                break;


            default:
                break;
        }

        setInValue({ ...inValue, [name]: value })
    }

    const Validate = () => {
        const { username, email, password, mnum } = inValue

        let errors = {}
        if (username === "") {
            errors.username = "Username can not be blank"
        }


        if (email === "") {
            errors.email = "Email can not be blank"
        }
        if (password === "") {
            errors.password = "Password can not be blank"
        }
        if (mnum === "") {
            errors.mnum = "Mobilenumber can not be blank"
        }
        else if (mnum.length != 10) {
            errors.mnum ="Enter valid mobile number"
        }

        return errors

    }

    const handleSub = (e) => {
        e.preventDefault();
        // console.log(e.target);
        let errorsValid = Validate()
        if (Object.keys(errorsValid).length === 0) {
            console.log("success", inValue)
            let localData = localStorage.getItem("inValue")
            console.log("locals", localData)
            if (localData) {
                let local = JSON.parse(localData)
                console.log("parse-->", local)
                local.push(inValue)
                console.log("local", local)
                localStorage.setItem('inValue', JSON.stringify(local));
            }
            else {
                localStorage.setItem('inValue', JSON.stringify([inValue]));
            }
            navigate('/login')

        }
        else {
            console.log("errorvalid", errorsValid)
            setError(errorsValid)
        }


    };



    return (
        <div>
            <Container className='global-container1'>
                <div className="reg-form">
                <Form onSubmit={(e) => handleSub(e)} >
                    <h1>Registration form</h1>
                    <div>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' name='username'
                            onChange={handleText} value={inValue.username}>
                        </Form.Control>
                        {error.username && <span style={{ color: "red" }}>
                            {error.username}
                        </span>}
                    </div>
                    <div>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email'
                            onChange={handleText} value={inValue.email} />
                        {/* </Form.Control> */}
                        {error.email && <p style={{ color: "red" }}>
                            {error.email}
                        </p>}
                    </div>
                    <div>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password'
                            onChange={handleText} value={inValue.password}>
                        </Form.Control>
                        {error.password && <p style={{ color: "red" }}>
                            {error.password}
                        </p>}
                    </div>
                    <div>
                        <Form.Label>MobileNumber</Form.Label>
                        <Form.Control type='number' name='mnum'
                            onChange={handleText} value={inValue.mnum}>
                        </Form.Control>
                        {error.mnum && <p style={{ color: "red" }}>
                            {error.mnum}
                        </p>}
                    </div><br></br>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary" size="lg">
                            Submit
                        </Button>

                    </div>
                </Form>
                </div>
            </Container>
        </div>

    )
}

export default Register
