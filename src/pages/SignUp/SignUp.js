import React from 'react';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        birthMonth: "",
        birthYear: ""
    }

    onChangeHandle = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="SignUp">
                <Form className="register-form">
                    <h2>Registration</h2>
                    <FormGroup>
                        <Input 
                            type="text" 
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
                    <FormGroup row>
                        <Col sm={3}>
                            <Input 
                                type="select" 
                                value={this.state.birthDate} 
                                onChange={this.onChangeHandle}
                                name="birthDate" 
                                id="birthDate">
                                <option value="Date">Date</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                            </Input>
                        </Col>
                        <Col sm={3}>
                            <Input 
                                type="select" 
                                value={this.state.birthMonth} 
                                onChange={this.onChangeHandle}
                                name="birthMonth" 
                                id="birthMonth">
                                <option value="Month">Month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                            </Input>
                        </Col>
                        <Col sm={3}>
                            <Input 
                                type="select" 
                                value={this.state.birthYear} 
                                onChange={this.onChangeHandle}
                                name="birthYear"
                                id="birthYear">
                                <option value="Year">Year</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup tag="fieldset" inline>
                        <FormGroup check>
                            <Input 
                                type="radio" 
                                value = 'male'
                                onChange={this.onChangeHandle}
                                name="gender" />{' '}
                            Male
                        </FormGroup>
                        <FormGroup check>
                            <Input 
                                type="radio" 
                                value = 'female'
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
                        <Button id="registerBtn" onClick={this.onSubmit}>Register</Button>
                    </FormGroup>
                </Form>
                <Link to="/signin">
                    <Button id="loginBtn">Login</Button>
                </Link>
            </div>
        );
    }

}

export default SignUp;
