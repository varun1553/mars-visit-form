import React, { useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel, InputAdornment } from '@mui/material';
import './MarsVisitForm.css';

// Validation functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^\d{10}$/.test(phone);

const MarsVisitForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    healthDeclaration: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If it's the phone field, allow only numeric input
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Validation for each step
  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full Name is required';
      if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid Email is required';
      if (!formData.phone || !validatePhone(formData.phone)) newErrors.phone = 'Valid Phone Number is required';
    }

    if (currentStep === 2) {
      if (!formData.departureDate) newErrors.departureDate = 'Departure Date is required';
      if (!formData.returnDate) newErrors.returnDate = 'Return Date is required';
    }

    if (currentStep === 3) {
      if (formData.healthDeclaration === '') newErrors.healthDeclaration = 'Health Declaration is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigate to next step
  const handleNext = () => {
    if (validateStep()) setCurrentStep(currentStep + 1);
  };

  // Navigate to previous step
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setSuccessMessage('Form submitted successfully!');
      setTimeout(() => {
        // Clear success message after 5 seconds
        setSuccessMessage('');
      }, 5000);
    }
  };

  return (
    <div className="form-container">
      <h1 className="text-center">Mars Visit Application Form</h1>

      {/* Progress Bar */}
      <ul className="progressbar">
        <li className={currentStep >= 1 ? 'active' : ''}>Personal Info</li>
        <li className={currentStep >= 2 ? 'active' : ''}>Travel Preferences</li>
        <li className={currentStep >= 3 ? 'active' : ''}>Health & Safety</li>
      </ul>

      {/* Form Navigation Buttons */}
      <div className="step-footer">
        {currentStep > 1 && (
          <Button variant="outlined" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {currentStep < 3 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message" style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px' }}>
          {successMessage}
        </div>
      )}

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="form-content">
        {currentStep === 1 && (
          <div>
            <h2>Stage 1: Personal Information</h2>
            <div className="form-group">
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Date of Birth"
                variant="outlined"
                type="date"
                fullWidth
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Nationality"
                variant="outlined"
                fullWidth
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                }}
                inputProps={{ maxLength: 10 }} // Added maxLength
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Stage 2: Travel Preferences</h2>
            <div className="form-group">
              <TextField
                label="Departure Date"
                variant="outlined"
                type="date"
                fullWidth
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.departureDate}
                helperText={errors.departureDate}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Return Date"
                variant="outlined"
                type="date"
                fullWidth
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.returnDate}
                helperText={errors.returnDate}
              />
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <InputLabel>Accommodation Preference</InputLabel>
                <Select
                  label="Accommodation Preference"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                >
                  <MenuItem value="Space Hotel">Space Hotel</MenuItem>
                  <MenuItem value="Martian Base">Martian Base</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <TextField
                label="Special Requests"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2>Stage 3: Health & Safety</h2>
            <div className="form-group">
              <FormControl fullWidth>
                <InputLabel>Health Declaration</InputLabel>
                <Select
                  label="Health Declaration"
                  name="healthDeclaration"
                  value={formData.healthDeclaration}
                  onChange={handleChange}
                  error={!!errors.healthDeclaration}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
                {errors.healthDeclaration && (
                  <p className="error">{errors.healthDeclaration}</p>
                )}
              </FormControl>
            </div>

            <div className="form-group">
              <TextField
                label="Emergency Contact"
                variant="outlined"
                fullWidth
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Medical Conditions"
                variant="outlined"
                fullWidth
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MarsVisitForm;
