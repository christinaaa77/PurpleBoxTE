import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import './Home.css';
import seminarImg1 from '../assets/seminar2.jpg';
import seminarImg2 from '../assets/seminar1.jpg';
import seminarImg3 from '../assets/seminar3.jpg';
import headerImage from '../assets/bckgr.png';

const images = [seminarImg1, seminarImg2, seminarImg3];

const EventCard = ({ title, description, onRegisterClick }) => (
  <div className="event-card">
    <h2 className="event-title">{title}</h2>
    <p>{description}</p>
    <button className="btn" onClick={onRegisterClick}>Register Now!</button>
  </div>
);

const Gallery = ({ images, currentImageIndex, onDotClick }) => (
  <section className="gallery">
    <h3>Event Highlights</h3>
    <div className="gallery-slider">
      {images.map((image, index) => (
        <img
          src={image}
          alt={`Seminar ${index + 1}`}
          className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
          key={index}
        />
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </section>
);

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleRegisterClick = () => {
    // Navigasi ke halaman registrasi (misalnya /registration)
    navigate('/register');
  };

  return (
    <section className="home">
      <img src={headerImage} alt="Header for Home Page" className="header-image" /> 
      <p>This website is dedicated to providing information about upcoming seminars and events.</p>

      <div className="events-preview">
        <EventCard 
          title="Event 1: React Basics" 
          description="This seminar will cover the basics of React.js for web development." 
          onRegisterClick={handleRegisterClick} // Menghubungkan tombol "Learn More" ke handler
        />
        <EventCard 
          title="Event 2: Advanced JavaScript" 
          description="This seminar will delve deep into advanced JavaScript techniques." 
          onRegisterClick={handleRegisterClick} 
        />
        <EventCard 
          title="Event 3: Web Development Best Practices" 
          description="This seminar will provide insights into modern web development practices." 
          onRegisterClick={handleRegisterClick} 
        />
      </div>

      <Gallery
        images={images}
        currentImageIndex={currentImageIndex}
        onDotClick={handleDotClick}
      />
    </section>
  );
}

export default Home;
