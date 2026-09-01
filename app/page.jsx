
import MyComponent from './components/JSX.jsx';
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/flaticon/font/flaticon.css';
import './css/icomoon.css';
import './css/style.css';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';


export default function Home() {
  return (
    <MyComponent>

     <Navbar />   
<section className="video-background">
    
    <div className="overlay"></div>
   
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src="\images\IMG_6738.MP4"  type="video/mp4"/>
    </video>
  
    <div className="buttons-container">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>

            <div className="col-md-8 col-sm-12 text-center">
    
                <p>
                  {/*  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> */}
        
                    <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">View Menu</a>
                </p>
            </div>
        </div>
    </div>
</section> 

          {/* <section className="home-slider owl-carousel">
    <div className="slider-item" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

          <div className="col-md-8 col-sm-12 text-center ftco-animate">
            <span className="subheading">Welcome</span>
            <h1 className="mb-4">The Best Coffee Testing Experience</h1>
            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
          </div>

        </div>
      </div>
    </div>

    <div className="slider-item" style={{ backgroundImage: 'url("/images/bg_2.jpg")' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

          <div className="col-md-8 col-sm-12 text-center ftco-animate">
            <span className="subheading">Welcome</span>
            <h1 className="mb-4">Amazing Taste &amp; Beautiful Place</h1>
            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
          </div>

        </div>
      </div>
    </div>

    <div className="slider-item" style={{ background: 'url(images/bg_3.jpg)' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

          <div className="col-md-8 col-sm-12 text-center ftco-animate">
            <span className="subheading">Welcome</span>
            <h1 className="mb-4">Creamy Hot and Ready to Serve</h1>
            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
          </div>

        </div>
      </div>
    </div>
  </section> */} 

            <section className="ftco-intro">
              <div className="container-wrap">
                <div className="wrap d-md-flex align-items-xl-end">
                  <div className="info">
                    <div className="row no-gutters">
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-phone"></span></div>
                        <div className="text">
                        <h3><a href="tel:+96879292707">+968 7929 2707</a></h3>
										<p>Call to ask about today's roast or to book the meeting room.</p>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-my_location"></span></div>
                        <div className="text">
                        <h3>Seeb, Muscat</h3>
										<p><a href="https://maps.app.goo.gl/Pw3iCo8o9tR5AaVE9" target="_blank" rel="noopener noreferrer">November Square, Al Hail</a></p>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-clock-o"></span></div>
                        <div className="text">
                        <h3>Open Daily</h3>
										<p>7:00am - 12:00am (8:00am Fri &amp; Sat)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book p-4">
                    <h3>Book a Table</h3>
                    <form action="#" className="appointment-form">
                      <div className="d-md-flex">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="First Name"></input>
                        </div>
                        <div className="form-group ml-md-4">
                          <input type="text" className="form-control" placeholder="Last Name"></input>
                        </div>
                      </div>
                      <div className="d-md-flex">
                        <div className="form-group">
                          <div className="input-wrap">
                            <div className="icon"><span className="ion-md-calendar"></span></div>
                            <input type="text" className="form-control appointment_date" placeholder="Date"></input>
                          </div>
                        </div>
                        <div className="form-group ml-md-4">
                          <div className="input-wrap">
                            <div className="icon"><span className="ion-ios-clock"></span></div>
                            <input type="text" className="form-control appointment_time" placeholder="Time"></input>
                          </div>
                        </div>
                        <div className="form-group ml-md-4">
                          <input type="text" className="form-control" placeholder="Phone"></input>
                        </div>
                      </div>
                      <div classNameName="d-md-flex">
                        <div className="form-group">
                          <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group ml-md-4">
                          <input type="submit" value="Appointment" className="btn btn-white py-3 px-4"></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-about d-md-flex">
              <div className="one-half img" style={{ background: 'url(images/about.jpg)' }}></div>
              <div className="one-half ftco-animate">
                <div className="overlap">
                  <div className="heading-section ftco-animate ">
                    <span className="subheading">Discover</span>
                    <h2 className="mb-4">Our Story</h2>
                  </div>
                  <div>
                    <p>Optimum Cafe &amp; Roastery is a specialty coffee house and in-house roastery tucked into November Square in Al Hail, Seeb. Rated 4.4★ from 149 Google reviews, it's known for a quiet, tidy space with its own meeting room — a favourite for both a quick espresso and a longer sit-down. Dine in or grab a takeaway, seven days a week.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-section ftco-services">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="media d-block text-center block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-5">
                        <span className="flaticon-choices"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Dine In or Takeaway</h3>
                        <p>Stop by for a sit-down cup or grab your order to go — both options available every day.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="media d-block text-center block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-5">
                        <span className="flaticon-delivery-truck"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Meeting Room</h3>
                        <p>A quiet space next door to the counter, ideal for a small meeting or a study session. Book ahead by phone.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="media d-block text-center block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-5">
                        <span className="flaticon-coffee-bean"></span></div>
                      <div className="media-body">
                        <h3 className="heading">Quality Coffee</h3>
                        <p>Specialty beans roasted in-house at Al Hail, from a smooth cappuccino to our signature Cinnamon Spanish Latte.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-md-5">
                    <div className="heading-section text-md-right ftco-animate">
                      <span className="subheading">Discover</span>
                      <h2 className="mb-4">Our Menu</h2>
                      <p className="mb-4">Specialty coffee roasted in-house at Al Hail, from classic espresso drinks to our signature Cinnamon Spanish Latte — most orders run OMR 2–4 per person.</p>
                      <p><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">View Full Menu</a></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-entry">
                          <a href="#" className="img" style={{ background: 'url("/images/menu-1.jpg")' }}></a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-entry mt-lg-4">
                          <a href="#" className="img" style={{ background: 'url(images/menu-2.jpg)' }}></a>

                          <div className="col-md-6">
                            <div className="menu-entry">
                              <a href="#" className="img" style={{ background: 'url(images/menu-3.jpg)' }}></a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="menu-entry mt-lg-4">
                              <a href="#" className="img" style={{ background: ' url(images/menu-4.jpg)' }}></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                </section>

                <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{ background: 'url(images/bg_2.jpg)' }} data-stellar-background-ratio="0.5">
                  <div className="overlay"></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 text-center">
                              <div className="text">
                                <div className="icon"><span className="flaticon-coffee-cup"></span></div>
                                <strong style={{ color: '#c49b63', fontWeight: 400 }}>4.4</strong>
                                <span>Google Rating ★</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 text-center">
                              <div className="text">
                                <div className="icon"><span className="flaticon-coffee-cup"></span></div>
                                <strong className="number" data-number="149">0</strong>
                                <span>Google Reviews</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 text-center">
                              <div className="text">
                                <div className="icon"><span className="flaticon-coffee-cup"></span></div>
                                <strong className="number" data-number="4800">0</strong>
                                <span>Instagram Followers</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 text-center">
                              <div className="text">
                                <div className="icon"><span className="flaticon-coffee-cup"></span></div>
                                <strong className="number" data-number="7">0</strong>
                                <span>Days a Week</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="ftco-section">
                  <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                      <div className="col-md-7 heading-section ftco-animate text-center">
                        <span className="subheading">Discover</span>
                        <h2 className="mb-4">Best Coffee Sellers</h2>
                        <p>Menu highlights from our Al Hail roastery, most orders run OMR 2–4 per person.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="menu-entry">
                          <a href="#" className="img" style={{ background: 'url(images/menu-1.jpg)' }}></a>
                          <div className="text text-center pt-4">
                            <h3><a href="#">Cappuccino</a></h3>
                            <p>Espresso with steamed milk and a layer of foam</p>
                            <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.500</span></p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="menu-entry">
                          <a href="#" className="img" style={{ background: 'url(images/menu-2.jpg)' }}></a>
                          <div className="text text-center pt-4">
                            <h3><a href="#">Cinnamon Spanish Latte</a></h3>
                            <p>Espresso, milk and condensed milk with a hint of cinnamon</p>
                            <p className="price"><span title="OMR" aria-label="OMR">⃄ 3.200</span></p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="menu-entry">
                          <a href="#" className="img" style={{ background: 'url(images/menu-3.jpg)' }}></a>
                          <div className="text text-center pt-4">
                            <h3><a href="#">Iced Tea</a></h3>
                            <p>Chilled black tea served over ice</p>
                            <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.200</span></p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="menu-entry">
                          <a href="#" className="img" style={{ background: 'url(images/menu-4.jpg)' }}></a>
                          <div className="text text-center pt-4">
                            <h3><a href="#">Hot Chocolate</a></h3>
                            <p>Rich melted chocolate with steamed milk</p>
                            <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.800</span></p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="ftco-gallery">
                  <div className="container-wrap">
                    <div className="row no-gutters">
                      <div className="col-md-3 ftco-animate">
                        <a href="gallery.html" className="gallery img d-flex align-items-center" style={{ background: 'url(images/gallery-1.jpg)' }}>
                          <div className="icon mb-4 d-flex align-items-center justify-content-center">
                            <span className="icon-search"></span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 ftco-animate">
                        <a href="gallery.html" className="gallery img d-flex align-items-center" style={{ background: 'url(images/gallery-2.jpg)' }}>
                          <div className="icon mb-4 d-flex align-items-center justify-content-center">
                            <span className="icon-search"></span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 ftco-animate">
                        <a href="gallery.html" className="gallery img d-flex align-items-center" style={{ background: 'url(images/gallery-3.jpg)' }}>
                          <div className="icon mb-4 d-flex align-items-center justify-content-center">
                            <span className="icon-search"></span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-3 ftco-animate">
                        <a href="gallery.html" className="gallery img d-flex align-items-center" style={{ background: 'url(images/gallery-4.jpg)' }}>
                          <div className="icon mb-4 d-flex align-items-center justify-content-center">
                            <span className="icon-search"></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

             {/*   <section className="ftco-menu">
                  <div className="container">
                    <div className="row justify-content-center mb-5">
                      <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Discover</span>
                        <h2 className="mb-4">Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                    <div className="row d-md-flex">
                      <div className="col-lg-12 ftco-animate p-md-5">
                        <div className="row">
                          <div className="col-md-12 nav-link-wrap mb-5">
                            <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main Dish</a>

                              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>

                              <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
                            </div>
                          </div>
                          <div className="col-md-12 d-flex align-items-center">

                            <div className="tab-content ftco-animate" id="v-pills-tabContent">

                              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dish-1.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Grilled Beef</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dish-2.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Grilled Beef</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dish-3.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Grilled Beef</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/drink-1.jpg)' }}> </a>
                                      <div className="text">
                                        <h3><a href="#">Lemonade Juice</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/drink-2.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Pineapple Juice</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/drink-3.jpg)' }}> </a>
                                      <div className="text">
                                        <h3><a href="#">Soda Drinks</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dessert-1.jp' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dessert-2.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <div className="menu-wrap">
                                      <a href="#" className="menu-img img mb-4" style={{ background: 'url(images/dessert-3.jpg)' }}></a>
                                      <div className="text">
                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p className="price"><span title="OMR" aria-label="OMR">⃄ 2.90</span></p>
                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
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

                <section className="ftco-section img" id="ftco-testimony" style={{ background: 'url(images/bg_1.jpg)' }} a-stellar-background-ratio="0.5">
                  <div className="overlay"></div>
                  <div className="container">
                    <div className="row justify-content-center mb-5">
                      <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Testimony</span>
                        <h2 className="mb-4">What Customers Say</h2>
                        <p>4.4★ from 149 Google reviews — here's what people are saying about us.</p>
                      </div>
                    </div>
                  </div>
                  <div className="container-wrap">
                    <div className="row d-flex no-gutters">
                      <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                          <blockquote>
                            <p>&ldquo;A quiet place, great for meetings and getting work done.&rdquo;</p>
                          </blockquote>
                          <div className="author d-flex mt-4">
                            <div className="name align-self-center">Google Reviews <span className="position">★★★★★</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-self-sm-end">
                        <div className="testimony overlay">
                          <blockquote>
                            <p>&ldquo;Specialty beans, roasted right here in Al Hail.&rdquo;</p>
                          </blockquote>
                          <div className="author d-flex mt-4">
                            <div className="name align-self-center">Google Reviews <span className="position">★★★★☆</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                          <blockquote>
                            <p>&ldquo;Try the basque cheesecake with your coffee.&rdquo;</p>
                          </blockquote>
                          <div className="author d-flex mt-4">
                            <div className="name align-self-center">Google Reviews <span className="position">★★★★★</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-self-sm-end">
                        <div className="testimony overlay">
                          <blockquote>
                            <p>&ldquo;Dine in or grab a quick takeaway — either way, great coffee.&rdquo;</p>
                          </blockquote>
                          <div className="author d-flex mt-4">
                            <div className="name align-self-center">Google Reviews <span className="position">★★★★☆</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                          <blockquote>
                            <p>&ldquo;Rated 4.4★ from 149 happy customers on Google.&rdquo;</p>
                          </blockquote>
                          <div className="author d-flex mt-4">
                            <div className="name align-self-center"><a href="https://maps.app.goo.gl/Pw3iCo8o9tR5AaVE9" target="_blank" rel="noopener noreferrer">See all reviews</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="ftco-section">
                  <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                      <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Recent from blog</h2>
                        <p>Notes from the roastery and the counter at Al Hail.</p>
                      </div>
                    </div>
                    <div className="row d-flex">
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                          <a href="blog-single.html" className="block-20" style={{ background: 'url(images/image_1.jpg)' }}>
                          </a>
                          <div className="text py-4 d-block">
                            <div className="meta">
                              <div><a href="#">Optimum Team</a></div>
                            </div>
                            <h3 className="heading mt-2"><a href="#">How We Roast Our Beans</a></h3>
                            <p>A look inside the in-house roastery behind every cup we serve at Al Hail.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                          <a href="blog-single.html" className="block-20" style={{ background: 'url(images/image_2.jpg)' }}>
                          </a>
                          <div className="text py-4 d-block">
                            <div className="meta">
                              <div><a href="#">Optimum Team</a></div>
                            </div>
                            <h3 className="heading mt-2"><a href="#">Meet Our Menu</a></h3>
                            <p>From cappuccino to Cinnamon Spanish Latte — a guide to our specialty drinks.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                          <a href="blog-single.html" className="block-20" style={{ background: 'url(images/image_3.jpg)' }}>
                          </a>
                          <div className="text py-4 d-block">
                            <div className="meta">
                              <div><a href="#">Optimum Team</a></div>
                            </div>
                            <h3 className="heading mt-2"><a href="#">Booking the Meeting Room</a></h3>
                            <p>Planning a small meeting or study session? Here's how to reserve our quiet corner.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                <section className="ftco-appointment">
                  <div className="overlay"></div>
                  <div className="container-wrap">
                    <div className="row no-gutters d-md-flex align-items-center">
                      <div className="col-md-6 d-flex align-self-stretch flex-column">
                        <iframe
                          title="Optimum Cafe & Roastery location"
                          src="https://www.google.com/maps?q=Optimum+Cafe+%26+Roastery+(Al+Hail)&ll=23.6298333,58.2321665&z=16&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: '350px' }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p className="text-center pt-3">
                          <a href="https://maps.app.goo.gl/Pw3iCo8o9tR5AaVE9" target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 px-4">Get Directions</a>
                        </p>
                      </div>
                      <div className="col-md-6 appointment ftco-animate">
                        <h3 className="mb-3">Book a Table</h3>
                        <form action="#" className="appointment-form">
                          <div className="d-md-flex">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="First Name"></input>
                            </div>
                            <div className="form-group ml-md-4">
                              <input type="text" className="form-control" placeholder="Last Name"></input>
                            </div>
                          </div>
                          <div className="d-md-flex">
                            <div className="form-group">
                              <div className="input-wrap">
                                <div className="icon"><span className="ion-md-calendar"></span></div>
                                <input type="text" className="form-control appointment_date" placeholder="Date"></input>
                              </div>
                            </div>
                            <div className="form-group ml-md-4">
                              <div className="input-wrap">
                                <div className="icon"><span className="ion-ios-clock"></span></div>
                                <input type="text" className="form-control appointment_time" placeholder="Time"></input>
                              </div>
                            </div>
                            <div className="form-group ml-md-4">
                              <input type="text" className="form-control" placeholder="Phone"></input>
                            </div>
                          </div>
                          <div className="d-md-flex">
                            <div className="form-group">
                              <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group ml-md-4">
                              <input type="submit" value="Appointment" className="btn btn-primary py-3 px-4"></input>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>

              <Footer/>


                <script src="/js/jquery.min.js"></script>
                <script src="/js/jquery-migrate-3.0.1.min.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/jquery.easing.1.3.js"></script>
                <script src="/js/jquery.waypoints.min.js"></script>
                <script src="/js/jquery.stellar.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/jquery.magnific-popup.min.js"></script>
                <script src="/js/aos.js"></script>
                <script src="/js/jquery.animateNumber.min.js"></script>
                <script src="/js/bootstrap-datepicker.js"></script>
                <script src="/js/jquery.timepicker.min.js"></script>
                <script src="/js/scrollax.min.js"></script>
                <script src="/js/main.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

             
            
        </MyComponent>
        
        )
}