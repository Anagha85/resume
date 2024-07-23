
import React from 'react';
import FormSection from './FormSection';

const PersonalInfo = () => {
  const fields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' },
    { label: 'Phone', type: 'tel' },
  ];



  return (
    <FormSection title="Personal Info" fields={fields} />
  );
};

export default PersonalInfo;