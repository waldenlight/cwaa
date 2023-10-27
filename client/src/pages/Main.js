import React, { useState } from 'react';
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { REMOVE_CLIENT } from '../utils/mutations';

const SignupForm = () => {

    // const [userData] = useQuery(REMOVE_CLIENT);

    document.body.style.backgroundColor = "#BCCCDC";

    return (
        <>
            <div fluid className='p-5' style={{ color: '#F0F4F8', backgroundColor: '#84C5F4' }}>
                <Container>
                    <h1>Welcome to CWAA</h1>
                </Container>
            </div>

            <div class="d-flex flex-wrap align-items-start justify-content-around">

                <div class='card d-inline-block mt-5' style={{ width: 18 + 'rem', color: '#102A43', backgroundColor: '#F0F4F8' }}>
                    <div class='card-body'>
                        <h5 class='card-title'>Why CWAA?</h5>
                        <hr></hr>
                        {/* <h6 class='card-subtitle mb-2 text-body-secondary'>The Homebase for Content Writing</h6> */}
                        <p class='card-text'>Content Writing Agency Application - name pending - or CWAA is a centralized platform for managing your content writing agency.</p>
                        <ul>
                            <li>Manage clients</li>
                            <li>Oversee writing process</li>
                            <li>No need for other softwares</li>
                        </ul>
                    </div>
                </div>

                <div class='card d-inline-block mt-5' style={{ width: 25 + 'rem', color: '#102A43', backgroundColor: '#F0F4F8' }}>
                    <img src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?auto=format&fit=crop&q=80&w=3464&ixlib=rb-4.0.
                3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="Writer at a desk with laptop."></img>
                    <div class="card-body">
                        <h5 class='card-title'>Quick & Easy</h5>
                        <p class="card-text">Manage your writers anytime, anywhere with a web-based solution.</p>
                    </div>
                </div>

                <div class='card d-inline-block mt-5' style={{ width: 25 + 'rem', color: '#102A43', backgroundColor: '#F0F4F8' }}>
                    <div class="card-body">
                        <h5 class="card-title">Ready to Begin?</h5>
                        <ul>
                            <li>30 day free trial</li>
                            <li>Unlimited access</li>
                            <li>Up to ten writers</li>
                        </ul>
                        <a href="/user" class="btn btn-success" style={{ color: '#102A43', backgroundColor: '#F7C948' }} >Sign Up</a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SignupForm;
