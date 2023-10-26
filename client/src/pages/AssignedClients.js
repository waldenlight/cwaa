import React, { useState } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// import { getMe, deleteClient } from '../utils/API';
import Auth from '../utils/auth';
// import { removeClientId } from '../utils/localStorage';
import { REMOVE_CLIENT } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';


const AssignedClients = () => {
  const [userData, setUserData] = useQuery(REMOVE_CLIENT);
  const [deleteClient, { error }] = useMutation(REMOVE_CLIENT);

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useQuery(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  const handleDeleteClient = async (clientId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteClient(clientId, token);

      const { data } = deleteClient();

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      removeClientId(clientId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className='text-light bg-dark p-5'>
        <Container>
          <h1>Assigned Clients</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.assignedClients.length
            ? `Viewing ${userData.assignedClients.length} saved ${userData.assignedClients.length === 1 ? 'client' : 'clients'}:`
            : 'You have no assigned clients'}
        </h2>
        <Row>
          {userData.savedClients.map((client) => {
            return (
              <Col md="4">
                <Card key={client.clientId} border='dark'>
                  {client.image ? <Card.Img src={client.image} alt={`The cover for ${client.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{client.title}</Card.Title>
                    <p className='small'>Writers: {client.writers}</p>
                    <Card.Text>{client.description}</Card.Text>
                    {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteClient(client.clientId)}>
                      Drop Client
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedClients;
