import React from 'react'

const Navbar = () => {
  return (
     <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
    <a class="navbar-brand" href="index.html">
    <img src="/images/logoone.png" alt="Logo"/> </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="/Menu" class="nav-link">Menu</a></li>
         
          <li class="nav-item"><a href="/Blog" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          <li class="nav-item dropdown">
        {/*    <a class="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="shop.html">Shop</a>
              <a class="dropdown-item" href="product-single.html">Single Product</a>
              <a class="dropdown-item" href="room.html">Cart</a>
              <a class="dropdown-item" href="checkout.html">Checkout</a>
  </div> */}
          </li>
          <li class="nav-item"><a href="/Contact" class="nav-link">Contact</a></li>
          <li class="nav-item cart"><a href="cart.html" class="nav-link"><span class="icon icon-shopping_cart"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar