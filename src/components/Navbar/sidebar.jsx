import React from 'react';
import { CloseButton, SidebarWrapper } from './styled';

export const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <SidebarWrapper className={`sidebar${isSidebarOpen ? ' open' : ''}`}>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#'>
            About
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#'>
            Services
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#'>
            Contact
          </a>
        </li>
      </ul>
      <CloseButton
        className='close-btn'
        onClick={handleSidebarToggle}>
        <span className='close-icon'>&times;</span>
      </CloseButton>
    </SidebarWrapper>
  );
};
