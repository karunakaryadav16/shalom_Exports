import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import { Helmet } from 'react-helmet';

import { Carousel } from 'antd';

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const contentStyle = {
    height: '20px',
    width:"100%",
    objectFit: 'fill',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
  };
  const contentStyle2 = {
    height: '100%',
    width:"100%",
    objectFit: 'fill',
    color: '#fff',
  
    background: '#364d79',
    
  };




  return (
    <div className="home_overall_container">
      <Helmet>
        <title>Logistics Solutions - Efficient and Reliable Services</title>
        <meta name="description" content="We provide reliable logistics solutions, ensuring efficient movement of goods across the globe. Our services include Ocean Freight, Air Freight, Cargo Handling, and more." />
        <meta name="keywords" content="Logistics, Freight, Ocean Freight, Air Freight, Cargo, Supply Chain, Transport" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Logistics Solutions - Efficient and Reliable Services" />
        <meta property="og:description" content="Your partner in global logistics. Discover our comprehensive logistics solutions tailored to your business needs." />
        <meta property="og:image" content="https://example.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Navbar className="sticky_navbar" id="navbar" />

      {/* Existing Home Container Section */}

    
















      {/* Profile Section with Image and Text */}
      <div id="profile" className="profile_section">
        <div className="profile_content">
          {/* Left Side Image */}
          <div className="image_container">
          
          
          <img src="https://img.freepik.com/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663057.jpg?t=st=1730190577~exp=1730194177~hmac=39be41964d1109d2bd3e7067e41905c3d8c7d95e4a8c75acb0cb8e9708aa9112&w=2000"/>
          </div>

          {/* Right Side Text with Borders */}
          <div className="text_container">
            <div data-aos="fade-left">
              <h1>OUR PROFILE</h1>
              <div className="mission">
                <h2>Our Mission</h2>
                <p>To facilitate the seamless and efficient movement of goods across the supply chain, providing reliable logistics solutions for businesses and individuals.</p>
              </div>
              <div className="vision">
                <h2>Our Vision</h2>
                <p>To be a global leader in innovative and sustainable logistics, connecting the world through seamless cargo movement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* key products section */}
      <div id="services_and_products" className="key_products">
        <h2>Key Products AND Services</h2>
        <ul>
          <li>Ocean Freight</li>
          <li>Air Freight</li>
          <li>Handling Hazardous Cargo</li>
          <li>Customs Clearance</li>
          <li>End to End Logistics Solutions</li>
          <li>Cargo Consolidation</li>
          <li>Freight Insurance</li>
          <li>Supply Chain Consultation</li>
        </ul>
      </div>

      {/* overseas network conatiner   */}
      <div id="network" className="overseas_network">
        <h2>OVERSEAS NETWORK</h2>

        <div data-aos="fade-left">
          <p>We provide customized solutions to clients to cater to continents like Africa, Europe, Gulf, Upper Gulf, Far East, Middle East, South America, and the rest of the world.</p>
        </div>
      </div>

      <div id="strength" className="our_strength">
        <h2>OUR STRENGTH</h2>
        <div className="strength_list">
          <div className="strength_item">
            <i className="fas fa-plane-departure"></i>
            <h3>Access to Major Air and Sea Ports</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-globe"></i>
            <h3>Best Overseas Network</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-dollar-sign"></i>
            <h3>Cost Savings</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-users"></i>
            <h3>Expertise Staff</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-handshake"></i>
            <h3>Personalized Customer Service</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-box"></i>
            <h3>Efficient Cargo Consolidation</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-cogs"></i>
            <h3>Supply Chain Optimization</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-clock"></i>
            <h3>Time-Sensitive Solutions</h3>
          </div>
          <div className="strength_item">
            <i className="fas fa-sync-alt"></i>
            <h3>Flexibility and Adaptability</h3>
          </div>
        </div>
      </div>

  

      <section id="contact" class="thank-you-section">
        <div class="thank-you-container">
          <h2 class="thank-you-title">Thank You!</h2>
          <p class="thank-you-message">We look forward to working with you.</p>
          <div class="thank-you-contact-info">
            <h3 class="contact-heading">Contact Us</h3>
            <p class="contact-detail">
              <strong>Office:</strong> 9652925892
            </p>
            <p class="contact-detail">
              <strong>Location:</strong> Mundra / Ahmedabad / Hyderabad
            </p>
            <p class="contact-detail">
              <strong>Email:</strong> <a href="mailto:exports24@gmail.com">exports24@gmail.com</a>
            </p>
          </div>
        </div>


        <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shalom Exports. All rights reserved.</p>
      </div>
    </footer>


        <a href="#navbar" className='back_to_top'> Back to top</a>
      </section>
    </div>
  );
}

export default Home;
