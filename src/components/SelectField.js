import React from 'react';
import './RegistrationForm.css';

const SelectField = ({ label, options, value, onChange, validationMessage, title }) => (
    <div className="form-field">
        <label htmlFor={label}>{label}</label>
        <select
            id={label}
            value={value}
            onChange={onChange}
            name={label.toLowerCase()}
            title={title}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
        {validationMessage && <span className="error-message">{validationMessage}</span>}
    </div>
);

export default SelectField;
