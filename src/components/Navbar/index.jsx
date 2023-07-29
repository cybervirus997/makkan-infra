import React from 'react';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Your Logo</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    );
  };
  
  // <nav class='navbar bg-light'>
  //   <div class='container-fluid'>
  //     <a
  //       class='navbar-brand'
  //       href='#'>
  //       LOGO
  //     </a>
  //     <div class='d-flex'>
  //       <div class='container-fluid'>
  //         <a
  //           class='navbar-brand'
  //           href='#'>
  //           PRICING
  //         </a>
  //       </div>
  //       <div class='container-fluid'>
  //         <a
  //           class='navbar-brand'
  //           href='#'>
  //           OUR PROJECTS
  //         </a>
  //       </div>
  //       <div class='container-fluid'>
  //         <a
  //           class='navbar-brand'
  //           href='#'>
  //           CONTACT US
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </nav>