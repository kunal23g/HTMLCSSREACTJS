import React, { useState } from 'react';

const SignupForm = () => {
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  });

  
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clears error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
      isValid = false;
    }

    
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
      isValid = false;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

   
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      
      const submissionData = {
        ...formData,
        phone_number: Number(formData.phone_number)
      };
      
      console.log(submissionData);
      
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: ''
      });
    }
  };

  return (
    <div className="max-w-7xl  mx-auto px-4 py-12 md:px-6 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:px-8 lg:text-5xl font-bold text-gray-900 mb-4">
          Ready to take a free trial?
        </h1>
        <p className="text-2xl  text-black max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sign up for a free account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

           
            <div>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;