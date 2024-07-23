import React from 'react';

const FormSection = ({ title, fields, addMore }) => {
  return (
    <section className="form-section">
      <h2>{title}</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type={field.type} />
        </div>
      ))}
      {addMore && <button>Add More</button>}
    </section>
  );
};

export default FormSection;