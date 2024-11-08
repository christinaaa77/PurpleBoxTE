const TextField = ({ label, type, placeholder, value, onChange, name, validationMessage, title, autocomplete, pattern }) => (
    <div className="input-group">
        <label htmlFor={name} title={title}>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            pattern={pattern} 
            title={validationMessage || title}
            autoComplete={autocomplete}
            required
        />
        {validationMessage && <p className="error">{validationMessage}</p>}
    </div>
);

export default TextField;
