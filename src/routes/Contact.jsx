import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server or an email service; keeping this for now
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };
    return (
        <div className='contact'>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="Your name here." onChange={(e) => setName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Questions, comments, or ideas:</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setMessage(e.target.value)} placeholder="I'd love to hear about them! Leave them here and I'll check in with you!" rows={3} required/>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={submitHandler}>Submit</Button>{' '}
        </div>
    )
}

export default Contact