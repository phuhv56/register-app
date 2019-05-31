import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        birthday: "",
        isActiveLogin: false,
        message: {
            type: 'success',
            text: 'Success'
        },
        visible: false
    }

    onChangeHandle = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            gender: this.state.gender,
            phone_number: this.state.phoneNumber,
            birthday: this.state.birthday
        };
        console.log(user);
        axios.post('http://localhost:8082/mitrais/user/create', user)
        .then( res => {
            this.setState({isActiveLogin: true, visible: true, message: {
                type: 'success',
                text: 'Success'
            }});
        }).catch( err => {
            if(err.response) {
                let message = err.response.data.data;
                this.setState({visible: true, message: {
                    type: 'danger',
                    text: message
                }});
            }
        });
    }

    render() {
        return (
            <div className="SignUp">
                <Form className="register-form" onSubmit={this.onSubmit}>
                    <h2>Registration</h2>
                    <Alert color={this.state.message.type} isOpen={this.state.visible} >
                        {this.state.message.text}
                    </Alert>
                    <FormGroup>
                        <Input 
                            type="number" 
                            value={this.state.phoneNumber} 
                            onChange={this.onChangeHandle}
                            name="phoneNumber" 
                            id="phoneNumber" 
                            placeholder="Mobile number" 
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            value={this.state.firstName} 
                            onChange={this.onChangeHandle}
                            name="firstName" 
                            id="firstName" 
                            placeholder="First name" 
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            value={this.state.lastName} 
                            onChange={this.onChangeHandle}
                            name="lastName" 
                            id="lastName" 
                            placeholder="Last name" 
                            required />
                    </FormGroup>

                    <Label>Date of birth</Label>
                    <FormGroup>
                        <Input
                            type="date"
                            value={this.state.birthday} 
                            onChange={this.onChangeHandle}
                            name="birthday"
                            id="birthday"
                            placeholder="Birthday"
                        />
                    </FormGroup>

                    <FormGroup tag="fieldset" inline>
                        <FormGroup check>
                            <Input 
                                type="radio" 
                                value = '1'
                                onChange={this.onChangeHandle}
                                name="gender" />{' '}
                            Male
                        </FormGroup>
                        <FormGroup check>
                            <Input 
                                type="radio" 
                                value = '0'
                                onChange={this.onChangeHandle}
                                name="gender" />{' '}
                            Female
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <Input 
                            type="email" 
                            value={this.state.email} 
                            onChange={this.onChangeHandle}
                            name="email" 
                            id="exampleEmail" 
                            placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Button id="registerBtn" disabled={this.state.isActiveLogin}>Register</Button>
                    </FormGroup>
                </Form>
                <Link to="/signin">
                    <Button id="loginBtn" disabled={!this.state.isActiveLogin}>Login</Button>
                </Link>
            </div>
        );
    }

}

export default SignUp;
