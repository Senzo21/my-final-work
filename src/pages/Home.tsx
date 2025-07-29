import React from 'react';
import './Home.css';
import heroImage from '../images/hero.jpeg';
import blurImage from '../images/image.jpg'; // the new image with lady headphones
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCameraRetro,
  FaCode,
  FaRocket,
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <header className="navbar">
        <h1 className="brand">HYKROX</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Designs</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        {/* Blurry overlay image */}
        <div
          className="blur-image"
          style={{ backgroundImage: `url(${blurImage})` }}
        ></div>

        {/* Transparent background letters */}
        <div className="background-letters">HYKROX</div>

        <div className="hero-text">
          <p className="subtitle">Creative Designer</p>
          <h2>
            We Are <span>Creative</span> Designers
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div
          className="hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </section>

      <section className="services">
        <h2>
          What We <span>Do?</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
        <div className="service-cards">
          <div className="card">
            <FaLaptopCode size={40} color="#00f3ff" />
            <p>Website Design</p>
          </div>
          <div className="card">
            <FaMobileAlt size={40} color="#00f3ff" />
            <p>Mobile & Desktop App</p>
          </div>
          <div className="card">
            <FaPaintBrush size={40} color="#00f3ff" />
            <p>UI & UX Design</p>
          </div>
          <div className="card">
            <FaCameraRetro size={40} color="#00f3ff" />
            <p>Editing Photo</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </section>

      <section className="about">
        <h2>
          Who Are <span>We?</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
        <div className="about-details">
          <div className="card">
            <FaCode size={40} color="#00f3ff" />
            <p>Clean Code</p>
          </div>
          <div className="card">
            <FaRocket size={40} color="#00f3ff" />
            <p>Modern Design</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="stats">
          <div>
            <strong>300+</strong> Project
          </div>
          <div>
            <strong>8.9</strong> Pleasure
          </div>
          <div>
            <strong>3000+</strong> Customer
          </div>
          <div>
            <strong>23</strong> Team Members
          </div>
        </div>
        <p>Design by HYKROX</p>
      </footer>
    </div>
  );
};

export default Home;
