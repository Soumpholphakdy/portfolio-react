import React from 'react';
import '../styles/styles.css';
import Images from './Images';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="row">
        <div className="image-text-container">
          <img
            src= {Images.pro}
            alt="Avatar"
            className="img-fluid"
          />
          <div className="text-content">
            <h2>Hello</h2>
            <p>
              I'm am working my way to becoming a full stack web developer. I'm based in Connecticut.
              I have a interest in designing websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;