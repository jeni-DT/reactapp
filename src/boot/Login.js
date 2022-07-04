import { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate()




    const handleChange = (e) => {
        const { name, value } = e.target

        switch (name) {
            case "username":
                error.username = ""
                break;

            case "password":
                error.password = ""
                break;

            default:
                break;
        }
        setInput({ ...input, [name]: value })

    }
    const Validation = () => {
        const { username, password } = input
        let errors = {}
        if (username === "") {
            errors.username = "Username is required"
        }
        if (password === "") {
            errors.password = "Password is required"
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        let errorValid = Validation()
        if (Object.keys(errorValid).length === 0) {
            console.log("success", input)

            let reg = localStorage.getItem('inValue');
            let newreg = JSON.parse(reg);
            console.log(newreg);
            console.log([input.username, input.password]);
            let data = newreg.find((item) => item.username === input.username && item.password === input.password);

            console.log(data);
            if (data) {
                navigate('/Home')
            }

            else if (!data) {
                alert('Invalid Username and password');
            }




        }
        else {
            console.log("errorvalid", errorValid)
            setError(errorValid)

        }
    }
    return (
        <Container className="global-container" >
            <div className="login-form">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="title">Login Form</h1>
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control type="text" placeholder="username"
                        name="username" className="text" onChange={handleChange}
                        value={input.username}>

                    </Form.Control>
                    <p style={{ color: "red" }}>{error.username}</p>
                    <br></br>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"
                        onChange={handleChange} value={input.password}>
                    </Form.Control>
                    <p style={{ color: "red" }}>{error.password}</p>
                    <br></br>

                    <div className="button">
                        <Button type="submit" className='btn btn-primary btn-block'
                        >submit</Button>{''}

                    </div>


                </Form>
            </div>
        </Container>
    )
}

export default Login;

