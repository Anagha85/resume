
const generateResume = (data) => {
    const { personalInfo, workExperience, education } = data;
  
    const resume = `
      **Personal Info**
      Name: ${personalInfo.name}
      Email: ${personalInfo.email}
      Phone: ${personalInfo.phone}
  
      **Work Experience**
      ${workExperience.map((exp) => `
        **${exp.company}**
        Role: ${exp.role}
        Dates: ${exp.dates}
      `).join('')}
  
      **Education**
      ${education.map((edu) => `
        **${edu.degree}**
        University: ${edu.university}
        Dates: ${edu.dates}
      `).join('')}
    `;
  
    return resume;
  };
  
  export default generateResume;