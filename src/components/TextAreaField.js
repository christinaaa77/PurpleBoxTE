import React from 'react';
import './RegistrationForm.css';

const TextAreaField = ({ label, placeholder, value, onChange, validationMessage, title }) => (
    <div className="form-field">
        <label htmlFor={label}>{label}</label>
        <textarea
            id={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={label.toLowerCase()}
            title={title}
        />
        {validationMessage && <span className="error-message">{validationMessage}</span>}
    </div>
);

export default TextAreaField;
