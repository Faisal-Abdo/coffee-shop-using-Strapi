import React from 'react';
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

  
  const fetchblogs = async () => {
    // Define the request options including HTTP method and headers
    const reqOptions = {
      method: 'GET',  // HTTP method as GET to fetch data
      headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,  // Set the authorization header using a Bearer token
      }
    };
    const url = await fetch(`${config.api}/api/blog-posts?populate=*&time=${new Date().getTime()}`, reqOptions);
    // Parse the JSON response from the API request
    const response = await url.json();
    // Log the full API response to the console for debugging
    console.log("API Response:", JSON.stringify(response, null, 2));
    // Return the response object for further use
    return response;
    };


  const Blog = async () => {
    const Blogs = await fetchblogs();
    return (
      <Wraps>
      <Navbar/>

      <section className="home-slider owl-carousel">
  <div className="slider-item" style={{ 
    backgroundImage: 'url("/images/Beans.png")', // Make sure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Example height, adjust as needed
  }} data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="container">
      <div className="row slider-text justify-content-center align-items-center" style={{
        height: '100%', // Full height of the container
        display: 'flex', // Flexbox for alignment
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        paddingTop:'19%', 
      }}>
        <div className="col-md-7 col-sm-12 text-center">
          <h1 className="mb-3 mt-5 bread">Our Blog</h1>
          <p className="breadcrumbs">
            <span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span>
          </p>
        </div>
      </div>
    </div>
  </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20" style={{background: 'url("images/about.jpg")'}}>
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">Sept 28, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Coffee Testing Day</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>

        {Blogs.data.map( blog => (
          <div key={blog.id} class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
        <a href="blog-single.html" class="block-20" style={{background: `url(${config.api}${blog.attributes.Image?.data?.attributes?.url})`}}>
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">{blog.attributes.Published}</a></div>
                  <div><a href="#">{blog.attributes.Author}</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">{blog.attributes.Title}</a></h3>
                <p>{blog.attributes.Content}</p>
              </div>
            </div>
          </div>
  ))}
       {/*   <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">Sept 28, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Coffee Testing Day</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20" style="background-image: url('images/image_4.jpg');">
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">Sept 28, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Coffee Testing Day</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20" style="background-image: url('images/image_5.jpg');">
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">Sept 28, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Coffee Testing Day</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
    </div> 
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20" style="background-image: url('images/image_6.jpg');">
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">Sept 28, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Coffee Testing Day</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div> 
    </div>
    </div> */}
        </div> 
       
      </div>
    </section>

    <Footer />
    
  

  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


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
  
  export default Blog
  
	  


  