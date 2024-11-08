import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    const formData = useSelector((state) => state.form.formData); // Ambil data form dari Redux
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        
        if (!formData || Object.keys(formData).length === 0) {
        
            navigate('/');
        } else {
            
            const timer = setTimeout(() => {
                setAnimationCompleted(true);
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, [formData, navigate]);
    return (
        <div className="confirmation-container">
            <div className={`confirmation-message ${animationCompleted ? 'show' : ''}`}>
                <div className={`checkmark ${animationCompleted ? 'animate' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="#fff" d="M9 19.23l-4.5-4.5 1.41-1.41L9 16.41l9.59-9.59L21 8l-12 12z" />
                    </svg>
                </div>
                <h2>Thank You for Registering!</h2>
                <p>Your registration was successful. We look forward to seeing you at the event.</p>

                <div className="user-details">
                    <h3>Your Details:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{formData.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{formData.email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{formData.phone}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{formData.gender}</td>
                            </tr>
                            <tr>
                                <th>Event</th>
                                <td>{formData.event}</td>
                            </tr>
                            <tr>
                                <th>Comments</th>
                                <td>{formData.comments || 'No comments provided'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
