
// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';  // Import FaBars for the hamburger icon
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);  // State to toggle the menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar_container">
//       <div className="navbar_brand">
//          <h1 className="gradient_text">Shalom Exports</h1>
//          <span className="gradient_subtext">Your Partner in Harmonious Trade</span>
//       </div>

//       <div className={`navbar_links ${isOpen ? 'open' : ''}`}>
//         <span style={{ color: 'rgb(255, 99, 71)' }}>Services</span> {/* Tomato */}
//         <span style={{ color: 'rgb(255, 165, 0)' }}>Overseas Network</span> {/* Orange */}
//         <span style={{ color: 'rgb(60, 179, 113)' }}>Our Strengths</span> {/* Medium Sea Green */}
//         <span style={{ color: 'rgb(0, 191, 255)' }}>About Us</span> {/* Deep Sky Blue */}
//         <span style={{ color: 'rgb(255, 105, 180)' }}>Contact Us</span> {/* Hot Pink */}
//       </div>

//       <div className="hamburger" onClick={toggleMenu}>
//         <FaBars size={24} /> {/* Use the FaBars icon here */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Import FaBars for the hamburger icon
// import { Offcanvas, Nav } from 'react-bootstrap'; // Import Offcanvas and Nav from React-Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className="navbar_container">
//         <div className="navbar_brand">
//           <h1 className="gradient_text">Shalom Exports</h1>
//           <span className="gradient_subtext">Your Partner in Harmonious Trade</span>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="hamburger" onClick={toggleMenu}>
//           <FaBars size={24} /> {/* Use the FaBars icon here */}
//         </div>

//         {/* Normal Nav Links for Larger Screens */}
//         <div className="navbar_links">
//           <Nav className="d-none d-md-flex">
//             <Nav.Link href="#services" style={{ color: 'rgb(255, 99, 71)' }}>Services</Nav.Link>
//             <Nav.Link href="#overseas-network" style={{ color: 'rgb(255, 165, 0)' }}>Overseas Network</Nav.Link>
//             <Nav.Link href="#our-strengths" style={{ color: 'rgb(60, 179, 113)' }}>Our Strengths</Nav.Link>
//             <Nav.Link href="#about-us" style={{ color: 'rgb(0, 191, 255)' }}>About Us</Nav.Link>
//             <Nav.Link href="#contact-us" style={{ color: 'rgb(255, 105, 180)' }}>Contact Us</Nav.Link>
//           </Nav>
//         </div>
//       </nav>

//       {/* Offcanvas Component for Mobile */}
//       <Offcanvas show={isOpen} onHide={toggleMenu} placement="start" style={{ width: '50%', borderRadius:'10px'}}> {/* Adjust placement as needed */}
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link href="#services" onClick={toggleMenu} style={{ color: 'rgb(255, 99, 71)' }}>Services</Nav.Link>
//             <Nav.Link href="#overseas-network" onClick={toggleMenu} style={{ color: 'rgb(255, 165, 0)' }}>Overseas Network</Nav.Link>
//             <Nav.Link href="#our-strengths" onClick={toggleMenu} style={{ color: 'rgb(60, 179, 113)' }}>Our Strengths</Nav.Link>
//             <Nav.Link href="#about-us" onClick={toggleMenu} style={{ color: 'rgb(0, 191, 255)' }}>About Us</Nav.Link>
//             <Nav.Link href="#contact-us" onClick={toggleMenu} style={{ color: 'rgb(255, 105, 180)' }}>Contact Us</Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Offcanvas, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="navbar" className="navbar_container">
        <div className="navbar_brand">
          <h1 className="gradient_text">Shalom Exports</h1>
          <span className="gradient_subtext">Your Global Trade Partner</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars size={30} /> {/* Larger icon for better visibility */}
        </div>

        {/* Nav Links for Desktop */}
        <div className="navbar_links">
          <Nav className="d-none d-md-flex">
            <Nav.Link href="#services_and_products" className="nav_item">Services</Nav.Link>
            <Nav.Link href="#network" className="nav_item">Overseas Network</Nav.Link>
            <Nav.Link href="#strength" className="nav_item">Our Strengths</Nav.Link>
            <Nav.Link href="#profile" className="nav_item">Profile</Nav.Link>
            <Nav.Link href="#contact" className="nav_item">Contact Us</Nav.Link>
          </Nav>
        </div>
      </nav>

      {/* Offcanvas for Mobile Menu */}
      <Offcanvas show={isOpen} onHide={toggleMenu} placement="start" style={{ width: '60%', borderRadius: '15px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#services_and_products" onClick={toggleMenu} className="offcanvas_link">Services</Nav.Link>
            <Nav.Link href="#network" onClick={toggleMenu} className="offcanvas_link">Overseas Network</Nav.Link>
            <Nav.Link href="#strength" onClick={toggleMenu} className="offcanvas_link">Our Strengths</Nav.Link>
            <Nav.Link href="#profile" onClick={toggleMenu} className="offcanvas_link">About Us</Nav.Link>
            <Nav.Link href="#contact" onClick={toggleMenu} className="offcanvas_link">Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
