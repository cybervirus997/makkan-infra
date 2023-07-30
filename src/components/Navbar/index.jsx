import React, { useState } from 'react';
import { CloseButton, SidebarWrapper } from './styled';
import { Sidebar } from './sidebar';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container'>
        <a
          class='navbar-brand'
          href='#'>
          Your Logo
        </a>

        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={handleSidebarToggle}>
          <span class='navbar-toggler-icon'></span>
        </button>

        {!isSidebarOpen ? (
          <div
            class='collapse navbar-collapse'
            id='navbarNav'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  href='#/'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  href='#/about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  href='#/services'>
                  Services
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  href='#/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            handleSidebarToggle={handleSidebarToggle}
          />
        )}
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
