import React from 'react';
import config from  '../config';
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

const fetchMenus = async () => {
	// Define the request options including HTTP method and headers
	const reqOptions = {
	  method: 'GET',  // HTTP method as GET to fetch data
	  headers: {
		'Authorization': `Bearer ${process.env.API_TOKEN}`,  // the authorization header using a Bearer token
	  }
	};
	// Make the API request to the Strapi server, appending a timestamp to URL to prevent caching
	const url = await fetch(`${config.api}/api/categories?populate[Categories][populate]=*&time=${new Date().getTime()}`, reqOptions);
	// Parse the JSON response from the API request
	const response = await url.json();
	// Log the full API response to the console for debugging
	console.log("API Response:", JSON.stringify(response, null, 2));
	// Return the response object for further use
	return response;
  };  
  
  const Menu = async () => {
	const categories = await fetchMenus(); // Fetching categories
	const menus = await fetchMenus(); // Fetch menus
	if (!menus || !menus.data) {
	  console.error('No data received from fetchMenus'); // Logging error if no data
	  return;
	}
	console.log('Menus', menus.data);
	menus.data.forEach(category => { // Looping through each category
	  console.log('Category:', category.attributes.CategoryName);
	  const menusRelatedToCategory = category.attributes.Categories?.data; // Get menus related to this category
	  if (menusRelatedToCategory && menusRelatedToCategory.length > 0) {
		menusRelatedToCategory.forEach(menu => {
		  console.log('Menu Item:', menu.attributes);
		});
	  } else {
		console.log('No menu items found for this category:', category.attributes.CategoryName);
	  }
	});
	
  
/*
const fetchMenus = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  };
  const request = await fetch(`${config.api}/api/categories?populate=Categories`, reqOptions)
  const response = await request.json();
  
  return response;

}


const Menu = async () => {
	const menus = await fetchMenus();
	console.log('Menus', menus.data);
	menus.data.forEach(category => {
		console.log('Category:', category.attributes.CategoryName);
		// The relation is named "Categories" and not "menus", so we update it here.
		const menusRelatedToCategory = category.attributes.Categories?.data;
		if (menusRelatedToCategory && menusRelatedToCategory.length > 0) {
		  menusRelatedToCategory.forEach(menu => {
			console.log('Menu Item:', menu.attributes);
		  });
		} else {
		  console.log('No menu items found for this category:', category.attributes.CategoryName);
		}
	
});
*/
	return (
		
		<Wraps>

			 <Navbar />
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
          <h1 className="mb-3 mt-5 bread">Our Menu</h1>
          <p className="breadcrumbs">
            <span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

		
			<section class="ftco-intro">
				<div class="container-wrap">
					<div class="wrap d-md-flex align-items-xl-end">
						<div class="info">
							<div class="row no-gutters">
								<div class="col-md-4 d-flex ftco-animate">
									<div class="icon"><span class="icon-phone"></span></div>
									<div class="text">
										<h3>24 33838</h3>
										<p>A small river named Duden flows by their place and supplies.</p>
									</div>
								</div>
								<div class="col-md-4 d-flex ftco-animate">
									<div class="icon"><span class="icon-my_location"></span></div>
									<div class="text">
										<h3>Seeb, Muscat</h3>
										<p>	203 Fake St. Hail South</p>
									</div>
								</div>
								<div class="col-md-4 d-flex ftco-animate">
									<div class="icon"><span class="icon-clock-o"></span></div>
									<div class="text">
										<h3>Open Sunday-Friday</h3>
										<p>8:00am - 9:00pm</p>
									</div>
								</div>
							</div>
						</div>
						<div class="book p-4">
							<h3>Book a Table</h3>
							<form action="#" class="appointment-form">
								<div class="d-md-flex">
									<div class="form-group">
										<input type="text" className="form-control" placeholder="First Name"/>
									</div>
									<div class="form-group ml-md-4">
										<input type="text" clasName="form-control" placeholder="Last Name"/>
									</div>
								</div>
								<div class="d-md-flex">
									<div class="form-group">
										<div class="input-wrap">
									<div class="icon"><span class="ion-md-calendar"></span></div>
									<input type="text" className="form-control appointment_date" placeholder="Date"/>
								</div>
									</div>
									<div class="form-group ml-md-4">
										<div class="input-wrap">
									<div class="icon"><span class="ion-ios-clock"></span></div>
									<input type="text" className="form-control appointment_time" placeholder="Time"/>
								</div>
									</div>
									<div class="form-group ml-md-4">
										<input type="text" className="form-control" placeholder="Phone"/>
									</div>
								</div>
								<div class="d-md-flex">
									<div class="form-group">
							  <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
							</div>
							<div class="form-group ml-md-4">
							  <input type="submit" value="Appointment" className="btn btn-white py-3 px-4"/>
							</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		
			<section class="ftco-section">
				<div class="container">
				<div class="row">
					
					<div class="col-md-6 mb-5 pb-3">
					<div> 
      {categories.data.map(category => (
        <div key={category.id} className="col-md-6 mb-5 pb-3">
          <h3 className="mb-5 heading-pricing ftco-animate" title="Category">{category.attributes.CategoryName}</h3>
          {category.attributes.Categories.data.map(menu => (
            <div key={menu.id} className="pricing-entry d-flex ftco-animate" title="Image">
              <div className="img" style={{ backgroundImage: `url(${config.api}${menu.attributes.Image?.data?.attributes?.url})` }}></div>
              <div className="desc pl-3">
                <div className="d-flex text align-items-center" title="Name of item">
                  <h3><span>{menu.attributes.Name}</span></h3>
                  <span className="price" title='Price'>${menu.attributes.Price}</span>
                </div>
                <div className="d-block" title="Description">
                  <p>{menu.attributes.Description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
					{/*	 <h3 class="mb-5 heading-pricing ftco-animate" title="Category">Optimum Signature</h3>
							<div class="pricing-entry d-flex ftco-animate" title="Image">
							<div class="img" style={{background: 'url("images/dish-1.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center" title="Name of item">
									<h3><span>Cornish - Mackerel</span></h3>
									<span class="price" title='Price'>$20.00</span>
								</div>
								<div class="d-block" title="Description">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div> 
</div> */} 
					{/*	<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-2.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Roasted Steak</span></h3>
									<span class="price">$29.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div> 
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-3.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Seasonal Soup</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-4.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Chicken Curry</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
					</div>
		
					<div class="col-md-6 mb-5 pb-3">
						<h3 class="mb-5 heading-pricing ftco-animate">Classic Coffee</h3>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-5.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Sea Trout</span></h3>
									<span class="price">$49.91</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-6.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Roasted Beef</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-7.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Butter Fried Chicken</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dish-8.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Chiken Filet</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
					</div>
		
					<div class="col-md-6">
						<h3 class="mb-5 heading-pricing ftco-animate">Sweet Coffee</h3>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dessert-1.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Cornish - Mackerel</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dessert-2.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Roasted Steak</span></h3>
									<span class="price">$29.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dessert-3.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Seasonal Soup</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/dessert-4.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Chicken Curry</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
					</div>
		
					<div class="col-md-6">
						<h3 class="mb-5 heading-pricing ftco-animate">Sweets</h3>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/drink-5.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Sea Trout</span></h3>
									<span class="price">$49.91</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/drink-6.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Roasted Beef</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/drink-7.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Butter Fried Chicken</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div>
						</div>
						<div class="pricing-entry d-flex ftco-animate">
							<div class="img" style={{ background: 'url("images/drink-8.jpg")'}}></div>
							<div class="desc pl-3">
								<div class="d-flex text align-items-center">
									<h3><span>Chiken Filet</span></h3>
									<span class="price">$20.00</span>
								</div>
								<div class="d-block">
									<p>A small river named Duden flows by their place and supplies</p>
								</div>
							</div> 
</div> */}
					</div>
				</div>
				</div>
			</section>
		
		{/*	<section class="ftco-menu mb-5 pb-5">
				<div class="container">
					<div class="row justify-content-center mb-5">
				  <div class="col-md-7 heading-section text-center ftco-animate">
					  <span class="subheading">Discover</span>
					<h2 class="mb-4">Our Products</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				  </div>
				</div>
					<div class="row d-md-flex">
						<div class="col-lg-12 ftco-animate p-md-5">
							<div class="row">
						  <div class="col-md-12 nav-link-wrap mb-5">
							<div class="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							  <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main Dish</a>
		
							  <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
		
							  <a class="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
							</div>
						  </div>
						  <div class="col-md-12 d-flex align-items-center">
							
							<div class="tab-content ftco-animate" id="v-pills-tabContent">
		
							  <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
								  <div class="row">
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-1.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-2.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-3.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-4.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-5.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dish-6.jpg);"">'}}/>
											  <div class="text">
												  <h3><a href="#">Grilled Beef</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
		
							  <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
								<div class="row">
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-1.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Lemonade Juice</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-2.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Pineapple Juice</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-3.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Soda Drinks</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-4.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Lemonade Juice</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-5.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Pineapple Juice</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/drink-6.jpg);""'}}/>
											  <div class="text">
												  <h3><a href="#">Soda Drinks</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
		
							  <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
								<div class="row">
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-1.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-2.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-3.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-4.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-5.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
									  <div class="col-md-4 text-center">
										  <div class="menu-wrap">
											  <a href="#" class="menu-img img mb-4" style={{ background: 'url("images/dessert-6.jpg")'}}></a>
											  <div class="text">
												  <h3><a href="#">Hot Cake Honey</a></h3>
												  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
												  <p class="price"><span>$2.90</span></p>
												  <p><a href="#" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				</div>
</section> */}
		
			<Footer />
			
		  
		  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>
		
		
		  <script src="./js/jquery.min.js"></script>
		  <script src="./js/jquery-migrate-3.0.1.min.js"></script>
		  <script src="./js/popper.min.js"></script>
		  <script src="./js/bootstrap.min.js"></script>
		  <script src="./js/jquery.easing.1.3.js"></script>
		  <script src="./js/jquery.waypoints.min.js"></script>
		  <script src="./js/jquery.stellar.min.js"></script>
		  <script src="./js/owl.carousel.min.js"></script>
		  <script src="./js/jquery.magnific-popup.min.js"></script>
		  <script src="./js/aos.js"></script>
		  <script src="./js/jquery.animateNumber.min.js"></script>
		  <script src="./js/bootstrap-datepicker.js"></script>
		  <script src="./js/jquery.timepicker.min.js"></script>
		  <script src="./js/scrollax.min.js"></script>
		  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
		  <script src="./js/google-map.js"></script>
		  <script src="./js/main.js"></script>

		</Wraps>
	)
}
export default Menu;
