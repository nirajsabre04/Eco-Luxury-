import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ContactDialog() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  // Automatically show the modal after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 7000); // 7000ms = 7 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Contact:', contact);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formContact" className="mt-3">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose} className='mt-3 mx-2'>
          Close
        </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactDialog;
