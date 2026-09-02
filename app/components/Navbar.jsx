import React from 'react'

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
    <a className="navbar-brand" href="index.html">
    <img src="/images/logoone.png" alt="Logo"/> </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/Menu" className="nav-link">Menu</a></li>
         
          <li className="nav-item"><a href="/Blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          <li className="nav-item dropdown">
        {/*    <a className="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="room.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
  </div> */}
          </li>
          <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
          <li className="nav-item cart"><a href="cart.html" className="nav-link"><span className="icon icon-shopping_cart"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar