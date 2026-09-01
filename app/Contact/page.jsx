'use client'
import React, { useState } from 'react';
import Wraps from '../components/wrap.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../css/open-iconic-bootstrap.min.css';
import '../css/animate.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.css';
import '../css/aos.css';
import '../css/ionicons.min.css';
import '../css/bootstrap-datepicker.css';
import '../css/jquery.timepicker.css';
import '../css/flaticon/font/flaticon.css';
import '../css/icomoon.css';
import '../css/style.css';
import config from  '../config';

 {/* const fetchContact = async () => {
	// Define the request options including HTTP method and headers
	const reqOptions = {
	  method: 'POST',  // HTTP method as POST because sending data
	  headers: {
      'Content-Type': 'application/json', // Specify the content type
		'Authorization': `Bearer ${process.env.API_TOKEN}`,  // Set the authorization header using a Bearer token
	  }
    
	};
	// Make the API request to the Strapi server, appending a timestamp to URL to prevent caching
	const request = await fetch(`${config.api}/api/contact-messages?populate=*&time=${new Date().getTime()}`, reqOptions);
	// Parse the JSON response from the API request
	const response = await request.json();  
	// Log the full API response to the console for debugging
	console.log("API Response:", JSON.stringify(response, null, 2));
	// Return the response object for further use
	return response;
 
  };  */}

const Contact = () => {
  
    /*const [formData, setFormData] = useState({
      Subject: '',
      Name: '',
      Email: '',
      Message: ''
    });
    console.log('Contact Component Rendered');
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };*/

    const handleClick = async () => {
      const name = document.getElementById('name').value;
      const subject = document.getElementById('subject').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      params = {
        Name: name,
        Subject: subject,
        Email: email,
        Messages: message
      }

      const xhr = new XMLHttpRequest;
      xhr.open('POST', `${config.api}/api/contact-messages`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', `Bearer ${process.env.API_TOKEN}`);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE  && xhr.status === 200){
          console.log('Success');
        }
        else{
          console.log('Error: ', xhr.status);
        }
     
      xhr.send(JSON.stringify(params));
      }
      
      {/*console.log('Submitting Data:', data); // Log the data being submitted
      const reqOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
        body: JSON.stringify({ data: data })*/
      };
  {/*
      try {
        console.log('Sending request to Strapi...');
        const response = await fetch(`${config.api}/api/contact-messages`, reqOptions);
        console.log('Response Status:', response.status);
        const result = await response.json();
        if (response.ok) {
          console.log('Form submitted successfully:', result);
          // Handle success here (e.g., clear form, show success message)
        } else {
          console.error('Failed to submit form:', result);
          // Handle errors here (e.g., show error message)
        }
        return result;
      } catch (error) {
        console.error('Network error:', error);
        // Handle network errors (e.g., show error message)
      } */}
    };

    {/*const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Form Submitted:', formData);
      const result = await submitContactForm({
        "data":
        {
        "Subject": formData.Subject,
        "Name": formData.Name,
        "Email": formData.Email,
        "Message": formData.Message
    }});

      if (result) {
        console.log('Resetting form data...');
        setFormData({
          Subject: '',
          Name: '',
          Email: '',
          Message: ''
        });
      }
    };
  
  {/* const contactmessage = await fetchContact();
console.log('messages', contactmessage); */}
  return (
   <Wraps>
  <Navbar/> 

    <section class="home-slider owl-carousel">

      <div class="slider-item" style={{background: 'url("images/bg_3.jpg")',  backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'}} data-stellar-background-ratio="0.5">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text justify-content-center align-items-center" style= {{ height: '100%', // Full height of the container
        display: 'flex', // Flexbox for alignment
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        paddingTop:'19%'}}>

            <div class="col-md-7 col-sm-12 text-center ftco-animate">
            	<h1 class="mb-3 mt-5 bread">Contact Us</h1>
	            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section contact-section">
      <div class="container mt-5">
        <div class="row block-9">
					<div class="col-md-4 contact-info ftco-animate">
						<div class="row">
							<div class="col-md-12 mb-4">
	              <h2 class="h4">Contact Information</h2>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Address:</span> <a href="https://maps.app.goo.gl/Pw3iCo8o9tR5AaVE9" target="_blank" rel="noopener noreferrer">November Square, Al Hail, Seeb</a></p>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Phone:</span> <a href="tel:+96879292707">+968 7929 2707</a></p>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Instagram:</span> <a href="https://www.instagram.com/optimumcafe.om/" target="_blank" rel="noopener noreferrer">@optimumcafe.om</a></p>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Menu:</span> <a href="https://menu.fascano.com/selectLanguage/optimumcafe" target="_blank" rel="noopener noreferrer">View Digital Menu</a></p>
	            </div>
						</div>
					</div>
					<div class="col-md-1"></div>
          <div class="col-md-6 ftco-animate">
          <form className="contact-form">
      <div className="form-group">
        <input
          type="text"
          name="Subject"
          className="form-control"
          placeholder="Subject"
          //onChange={handleChange}
          id='subject'
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="Name"
          id='name'
          className="form-control"
          placeholder="Your Name"

        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id='email'
          name="Email"
          className="form-control"
          placeholder="Your Email"
          //onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
        id='message'
          name="Message"
          rows="7"
          className="form-control"
          placeholder="Message"
          //onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary py-3 px-5" onClick={handleClick}>
          Send Message
        </button>
      </div>
    </form>
       
         {/*   <form action="#" class="contact-form">
            
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Email" />
      </div>
    </div>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Subject" />
  </div>
  <div className="form-group">
    <textarea id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
  </div>
  <div className="form-group">
    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
  </div>
  </form> */}

          
            {/*	<div class="row">
            		<div class="col-md-6">
	                <div class="form-group">
	                  <input type="text" class="form-control" placeholder="Your Name">
	                </div>
                </div>
                <div class="col-md-6">
	                <div class="form-group">
	                  <input type="text" class="form-control" placeholder="Your Email">
	                </div>
	                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject">
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
              </div>
  </form> */}
          </div>
        </div>
      </div>
    </section>

   {/* <div id="map"></div> */}

    <Footer/>
    
  
{/*
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>
*/}

  <script src="js/jquery.min.js"></script>
  <script src="js/jquery-migrate-3.0.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/jquery.waypoints.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/aos.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/bootstrap-datepicker.js"></script>
  <script src="js/jquery.timepicker.min.js"></script>
  <script src="js/scrollax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="js/google-map.js"></script>
  <script src="js/main.js"></script>
    
 </Wraps>
  )
}

export default Contact
  
