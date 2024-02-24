import React, { useState } from 'react';

const FormExample: React.FC = () => {
  // State to manage form inputs and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Event handler to update form state on input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  // Event handler to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    // Basic form validation
    if (formData.username.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, username: 'Username is required' }));
      hasError = true;
    }
    if (formData.email.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
      hasError = true;
    }
    if (formData.password.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
      hasError = true;
    }

    // If no errors, process form data
    if (!hasError) {
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
