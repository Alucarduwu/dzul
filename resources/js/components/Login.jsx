import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Login() {

  const [formValue, setformValue] = useState({
    email: '',
    password: ''
  })
 const navigate = useNavigate();
  
  const onChange = (e) => {
    e.persist();
    setformValue({...formValue, [e.target.name]: e.target.value});
   }
   
  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post("http://localhost:8888/any/public/api/login",
    formData,
    {headers: {'Content-Type': 'multipart/form-data',
     'Accept':'application/json'}}
    ).then(response => {
        console.log('response:');
        console.log(response);
        navigate("any/public/listcard");
       
    }).catch(error => {
        console.log(error);
    });
  };
  return (
    
    
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email"  value={formValue.email} onChange={onChange} />
       <Form.Text className="text-muted">
                                        Tu correo electrónico es único y no se compartirá jamás
                                    </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu contraseña"
         name="password" value={formValue.password} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      
    </Form> 

    
  );
}
export default Login;