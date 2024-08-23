import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactDialog() {
  const [show, setShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [validationError, setValidationError] = useState(""); // State for validation error

  const accessKey = "79e4bb50-f542-41c9-ab5a-c43967fbb958";

  // Automatically show the modal after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 7000); // 7000ms = 7 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Eco-Luxury",
      subject: "New Inquiry From Eco-Luxury",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult("Form submitted successfully!");
      reset();
      setTimeout(() => {
        setShow(false); // Close the modal after 2 seconds
        setResult(null); // Clear the success message after modal closes
      }, 2000);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const handleFormSubmit = (data) => {
    if (data.contact.length !== 10) {
      setValidationError("Contact number must be exactly 10 digits.");
      return;
    }
    setValidationError(""); // Clear the error if validation passes
    onSubmit(data);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result && (
            <Alert variant={isSuccess ? 'success' : 'danger'}>
              {result}
            </Alert>
          )}
          {validationError && (
            <Alert variant="danger">
              {validationError}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                isInvalid={errors.name}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  Name is required.
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="formContact" className="mt-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your number"
                {...register("contact", { required: true })}
                isInvalid={errors.contact}
              />
              {errors.contact && (
                <Form.Control.Feedback type="invalid">
                  {errors.contact.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
            <Button variant="danger" onClick={handleClose} className="mt-3 mx-2">
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {isSuccess && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
          <Alert variant="success" onClose={() => setIsSuccess(false)} dismissible>
            Form submitted successfully!
          </Alert>
        </div>
      )}
    </>
  );
}

export default ContactDialog;
