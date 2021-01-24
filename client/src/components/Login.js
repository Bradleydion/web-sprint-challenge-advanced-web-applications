import React from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
const Login = () => {
  const state = {
    credentials: {
      username: '',
      password: '',
    }
  };

  const handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/protected");
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Form onSubmit={login} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Username</Label>
        <Input type="text" name="username" id="username" value={state.credentials.username} onChange={handleChange}placeholder="Username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" value={state.credentials.password} onChange={handleChange} placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </>
  );
};

export default Login;
