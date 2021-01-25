import React, {useState} from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {useHistory} from 'react-router-dom'

const initialValues= {
  credentials: {
    username: '',
    password: '',
  }
};

const Login = () => {
 const [state, setState]=useState(initialValues)
 const history = useHistory()

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", state.credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      history.push("/BubblePage");
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
