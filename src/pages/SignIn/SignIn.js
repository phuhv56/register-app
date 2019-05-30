import React from 'react';
import './SignIn.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

function SignIn() {
    return (
        <div className="SignIn">
            <Form className="login-form">
                <h2>Login</h2>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                
                <FormGroup>
                    <Button id="loginBtn">Login</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default SignIn;
