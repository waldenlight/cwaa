import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createClient } from '../utils/API';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../utils/mutations';

const NewClientForm = () => {
    // set initial form state
    const [clientFormData, setClientFormData] = useState({ name: '', email: '', description: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [addClient, { error }] = useMutation(ADD_CLIENT);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClientFormData({ ...clientFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await createClient(clientFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { client } = await response.json();
            console.log(client);
            client.createClient(client)
            // Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setClientFormData({
            name: '',
            email: '',
            description: '',
        });
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='name'>Client Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Client Name'
                        name='name'
                        onChange={handleInputChange}
                        value={clientFormData.name}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Client name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Client email address'
                        name='email'
                        onChange={handleInputChange}
                        value={clientFormData.email}
                    />
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='description'>Description</Form.Label>
                    <Form.Control
                        type='description'
                        placeholder='Description'
                        name='description'
                        onChange={handleInputChange}
                        value={clientFormData.description}
                    />
                </Form.Group>
                <Button
                    disabled={!(clientFormData.name)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default NewClientForm;
