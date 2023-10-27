import React, { useState } from 'react';
import {
    Container,
    Card,
    Button,
    Row,
    Col,
    Form,
    Alert
} from 'react-bootstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { REMOVE_CLIENT } from '../utils/mutations';

const User = () => {

    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error }] = useMutation(ADD_USER);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
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
            const response = await createUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    // const [userData] = useQuery(REMOVE_CLIENT);

    document.body.style.backgroundColor = "#84C5F4";

    return (
        <>
            {/* <div fluid className='p-5' style={{ color: '#F0F4F8', backgroundColor: '#84C5F4' }}>
                <Container>
                    <h1>Signup</h1>
                </Container>
            </div> */}

            <div className='d-flex justify-content-center mt-5'>

                <Form noValidate className='d-flex flex-column align-items-center w-30 py-4 px-5 mt-5'
                    validated={validated} onSubmit={handleFormSubmit} style={{ color: '#102A43', backgroundColor: '#F0F4F8', borderRadius: '5px' }}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your signup!
                    </Alert>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your username'
                            name='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Your email address'
                            name='email'
                            onChange={handleInputChange}
                            value={userFormData.email}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Your password'
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                        type='submit'
                        variant='success'
                        style={{ color: '#102A43', backgroundColor: '#F7C948' }}>
                        Submit
                    </Button>
                </Form>

            </div>
        </>
    );
};

export default User;
