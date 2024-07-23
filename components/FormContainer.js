import React from 'react';
import FormSection from './FormSection';
import { generateResume } from '../../utils/resume';
import personalInfo from './PersonalInfo';
import workExperience from './WorkExperience';
import education from './Education';

const FormContainer = () => {
  const data = {
    personalInfo,
    workExperience,
    education,
  };

  const resume = generateResume(data);
  const [formData, setFormData] = useState({
    personalInfo: {},
    workExperience: [],
    education: [],
  });
  const handlePersonalInfoChange = (field, value) => {
    <FormSection
  title="Personal Info"
  fields={personalInfo}
  onChange={handlePersonalInfoChange}
  />
  };
  
  const handleWorkExperienceChange = (index, field, value) => {
    
<FormSection
  title="Work Experience"
  fields={workExperience}
  onChange={handleWorkExperienceChange}
/>
  };
  
  const handleEducationChange = (index, field, value) => {
    
<FormSection
  title="Education"
  fields={education}
  onChange={handleEducationChange}
/>

  };
  useState(() => generateResume(formData), [formData]);

  
  return (
    <div className="form-container">
      <FormSection title="Personal Info" fields={personalInfo} />
      <FormSection title="Work Experience" fields={workExperience} />
      <FormSection title="Education" fields={education} />
      <div className="resume">
        <h2>Generated Resume:</h2>
        <pre>{resume}</pre>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import FormSection from './FormSection';

useState(()=> FormContainer = () => {
    useStateFormContainer = () => {
    useStateFormContainer = () => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    workExperience: [],
    education: [],
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.personalInfo.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.personalInfo.email) {
      errors.email = 'Please enter your email';
    }
    // Add more validation logic here...
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log('Form submitted:', formData);
      // Submit the form data to the server or perform other actions
    }
  };

  return (
    <div className="form-container">
        <FormSection
        title="Personal Info"
        fields={personalInfo}
        onChange={handlePersonalInfoChange}
      />

      <FormSection
        title="Work Experience"
        fields={workExperience}
        onChange={handleWorkExperienceChange}
      />

      <FormSection
        title="Education"
        fields={education}
        onChange={handleEducationChange}
      />

      <div className="error-message">
        {Object.keys(errors).map((field, index) => (
          <p key={index}>{errors[field]}</p>
        ))}
      </div>

      <div className="resume">
        <h2>Generated Resume:</h2>
        <pre>{resume}</pre>
      </div>

      <button onClick={handleSubmit}>Submit</button>


    </div>
    
  );
};
export default FormContainer;