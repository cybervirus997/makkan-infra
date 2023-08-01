import React from 'react';
import { CloseButton, SidebarWrapper } from './styled';

export const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <SidebarWrapper className={`sidebar${isSidebarOpen ? ' open' : ''}`}>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#/'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#/about'>
            About
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#services'>
            Services
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='#/contact'>
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
