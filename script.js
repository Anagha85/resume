const formData = {};

// Select form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const objectiveInput = document.getElementById('objective');
const educationInput = document.getElementById('education');
const workExperienceInput = document.getElementById('work-experience');
const skillsInput = document.getElementById('skills');

// Add event listener to form submit
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  collectData();
  populateTemplate();
  generateResume();
});

// Function to collect user input data
function collectData() {
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.phone = phoneInput.value;
  formData.objective = objectiveInput.value;
  formData.education = educationInput.value;
  formData.workExperience = workExperienceInput.value;
  formData.skills = skillsInput.value;
}

// Function to populate resume template
function populateTemplate() {
  const resumeTemplate = document.getElementById('resume-template');
  const nameElement = resumeTemplate.content.querySelector('#name');
  const emailElement = resumeTemplate.content.querySelector('#email');
  const phoneElement = resumeTemplate.content.querySelector('#phone');
  const objectiveElement = resumeTemplate.content.querySelector('#objective');
  const educationElement = resumeTemplate.content.querySelector('#education');
  const workExperienceElement = resumeTemplate.content.querySelector('#work-experience');
  const skillsElement = resumeTemplate.content.querySelector('#skills');

  nameElement.textContent = formData.name;
  emailElement.textContent = formData.email;
  phoneElement.textContent = formData.phone;
  objectiveElement.textContent = formData.objective;
  educationElement.textContent = formData.education;
  workExperienceElement.textContent = formData.workExperience;
  skillsElement.textContent = formData.skills;
}

// Function to generate resume
function generateResume() {
  const resumeContainer = document.getElementById('resume-container');
  const resumeTemplate = document.getElementById('resume-template');
  resumeContainer.appendChild(resumeClone);
}
// Function to generate resume
function generateResume() {
    const resumeContainer = document.getElementById('resume-container');
    const resumeTemplate = document.getElementById('resume-template');
    const resumeClone = resumeTemplate.content.cloneNode(true);
    resumeContainer.appendChild(resumeClone);
  }
  
  // Add a download button
  const downloadButton = document.getElementById('download-button');
  
  // Add an event listener to the download button
  downloadButton.addEventListener('click', () => {
    const resumeContainer = document.getElementById('resume-container');
    const resumeHTML = resumeContainer.innerHTML;
    const pdf = new jsPDF();
    pdf.fromHTML(resumeHTML);
    pdf.save('resume.pdf');
  });
  // Function to preview the resume
function previewResume() {
    const resumeContainer = document.getElementById('resume-preview');
    const resumeHTML = '';
    // Generate the resume content using the user input data
    // ... (similar to the generateResume() function)
    resumeContainer.innerHTML = resumeHTML;
  }
  
  // Call the previewResume() function when the download button is clicked
  downloadButton.addEventListener('click', () => {
    generateResume();
    previewResume();
  });

// Function to generate the resume
function generateResume() {
    // ... (rest of the code remains the same)
  }
  
  // Function to preview the resume
  function previewResume() {
    const resumeContainer = document.getElementById('resume-preview');
    const loader = document.getElementById('loader');
    const resumeContent = document.getElementById('resume-content');
    
    // Show the loader animation
    loader.style.display = 'block';
    resumeContent.style.display = 'none';
    
    // Generate the resume content using the user input data
    // ... (similar to the generateResume() function)
    
    // Hide the loader animation and show the resume content
    loader.style.display = 'none';
    resumeContent.style.display = 'block';
    resumeContent.innerHTML = resumeHTML;
  }
  
  // Call the generateResume() and previewResume() functions when the download button is clicked
  downloadButton.addEventListener('click', () => {
    generateResume();
    previewResume();
  });
  function previewResume() {
    const resumeContainer = document.getElementById('resume-preview');
    const loader = document.getElementById('loader');
    const resumeContent = document.getElementById('resume-content');
    
    // Show the loader animation
    loader.style.display = 'block';
    resumeContent.classList.remove('active'); // Remove the "active" class
    
    // Generate the resume content using the user input data
    // ... (similar to the generateResume() function)
    
    // Hide the loader animation and show the resume content
    setTimeout(() => {
      loader.style.display = 'none';
      resumeContent.classList.add('active'); // Add the "active" class
      resumeContent.innerHTML = resumeHTML;
    }, 500); // 500ms delay
  }

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', () => {
  const resumeContent = document.getElementById('resume-content');
  const printWindow = window.open('', '_blank');
  printWindow.document.write(resumeContent.outerHTML);
  printWindow.print();
});

const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
  const resumeContent = document.getElementById('resume-content').outerHTML;
  const shareURL = `(link unavailable){encodeURIComponent(resumeContent)}`;
  window.open(shareURL, '_blank');
});
  
  
  
