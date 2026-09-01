import React from 'react'; // Assuming React is installed
import axios from 'axios';
 
const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const formData = {
      Name: event.target.name.value,
      Email: event.target.email.value,
      Subject: event.target.subject.value,
      Message: event.target.message.value,
    };
 
    try {
      const response = await axios.post('http://127.0.0.1:1337/api/contact-messages', formData);
 
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
 
  return (
<form onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" required />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />
<label htmlFor="subject">Subject:</label>
<input type="text" id="subject" name="subject" required />
<label htmlFor="message">Message:</label>
<textarea id="message" name="message" required></textarea>
<button type="submit">Submit</button>
</form>
  );
};
 
export default ContactForm;