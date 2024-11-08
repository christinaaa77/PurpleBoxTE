import React, { useState } from 'react';
import TextField from './TextField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../features/form/formSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        comments: '',
        event: '',
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [formStatus, setFormStatus] = useState(null); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        
        if (!formData.name || !/^[a-zA-Z\s]+$/.test(formData.name)) {
            errors.name = 'Name is required and must contain only letters';
        }

       
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

       
        if (!formData.phone || !/^\d+$/.test(formData.phone)) {
            errors.phone = 'Phone number must only contain numbers';
        }

        if (!formData.gender) {
            errors.gender = 'Gender is required';
        }

       
        if (!formData.event) {
            errors.event = 'Please select an event';
        }

        setValidationErrors(errors);

        return Object.keys(errors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            
            dispatch(saveFormData(formData));
            setFormStatus('success'); 
            setTimeout(() => {
                navigate('/confirmation'); 
            }, 2000);
        } else {
            setFormStatus('error'); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="registration-title">REGISTRATION</h2>


            <TextField
                label="Name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
                validationMessage={validationErrors.name}
                title="Your full name"
                autocomplete="name"
            />
            <TextField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                validationMessage={validationErrors.email}
                title="Your email address"
                autocomplete="email"
            />
            <TextField
                label="Phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                name="phone"
                validationMessage={validationErrors.phone}
                title="Your phone number"
                autocomplete="tel"
            />

            <SelectField
                label="Gender"
                options={['', 'Male', 'Female']} 
                value={formData.gender}
                onChange={handleInputChange}
                name="gender"
                validationMessage={validationErrors.gender}
                title="Select your gender"
            />

            <TextAreaField
                label="Comments"
                placeholder="Your comments"
                value={formData.comments}
                onChange={handleInputChange}
                name="comments"
                validationMessage={validationErrors.comments}
                title="Any additional comments"
            />

            <SelectField
                label="Event"
                options={['', 'Event 1', 'Event 2', 'Event 3']} 
                value={formData.event}
                onChange={handleInputChange}
                name="event"
                validationMessage={validationErrors.event}
                title="Select the event you want to attend"
            />

            <button type="submit">Submit</button>

            {formStatus === 'success' && <div className="success-message">Registration successful! Redirecting...</div>}
            {formStatus === 'error' && <div className="error-message">There were errors in the form. Please check your inputs.</div>}
        </form>
    );
};

export default RegistrationForm;
