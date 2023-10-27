import React, { useState } from 'react';
import {
    Container,
    Card,
    Button,
    Row,
    Col,
    Modal,
    Tab
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { createUser, deleteClient } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { removeClientId } from '../utils/localStorage';
import { REMOVE_CLIENT } from '../utils/mutations';
import NewClientForm from '../components/NewClientForm';

const Dashboard = () => {

    const [showClientModal, setShowClientModal] = useState(false);
    const [userData, setUserData] = useMutation(REMOVE_CLIENT);

    // Test data for clients
    userData.assignedClients = [
        {
            name: "Mark Jesu"
        },
        {
            name: "Peter Meat"
        },
        {
            name: "Bob Saggott"
        }
    ]

    // const handleDeleteClient = async (clientId) => {
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }

    //     try {
    //         const response = await deleteClient(clientId, token);

    //         const { data } = deleteClient();

    //         if (!response.ok) {
    //             throw new Error('something went wrong!');
    //         }

    //         const updatedUser = await response.json();
    //         setUserData(updatedUser);
    //         removeClientId(clientId);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    document.body.style.backgroundColor = "#BCCCDC";

    return (
        <>
            <div fluid className='p-5' style={{ color: '#F0F4F8', backgroundColor: '#84C5F4' }}>
                <Container>
                    <h1>Dashboard</h1>
                </Container>
            </div>

            <div class="d-flex flex-wrap align-items-start justify-content-around">

                {userData.assignedClients.map((client) => {
                    return (
                        <Col md="4">
                            <Card key={client.clientId} border='dark'>
                                {client.image ? <Card.Img src={client.image} alt={`The cover for ${client.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{client.title}</Card.Title>
                                    <p className='small'>Writers: {client.writers}</p>
                                    <Card.Text>{client.description}</Card.Text>
                                    {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteClient(client.clientId)}>
                                        Delete this Client!
                                    </Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}

            </div>

            {/* Create new client */}

            <a onClick={() => setShowClientModal(true)}>Add New Client</a>

            <Modal
                size='lg'
                show={showClientModal}
                onHide={() => setShowClientModal(false)}
                aria-labelledby='client-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <NewClientForm handleModalClose={() => setShowClientModal(false)} />
                </Modal.Body>
            </Modal>

        </>
    );
};

export default Dashboard;
