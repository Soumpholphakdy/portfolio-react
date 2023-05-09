import React from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemFeatured from './PortfolioItemFeatured';
import Images from './Images';
import '../styles/styles.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'TotoroBank',
      description: 'This project was created to simulate a bank website that appeals to the younger demographic, and provides a user friendly interface with ease of use that is both fun and easily navigable.',
      image: Images.tBank,
      link: 'https://murmuring-escarpment-43025.herokuapp.com/login',
      featured: true,
    },
    {
      title: "Pear'd",
      description:"Pear'd provides images, ingredients list, and recipes with 2 clicks of a button. Feel like a five star chef and bartender all in the comfort and privacy of your own home.",
      image: Images.pear,
      link: 'https://sampaul10.github.io/Project-01/',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that will allow user to input a location, click search, and get a 5 day forcast of the desired location showing the date, tempreature, and humidity.',
      image: Images.wDash,
      link: 'https://soumpholphakdy.github.io/Weather-Dashboard/',
    },

  ];

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-wrapper">
        <div className="featured-grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <PortfolioItemFeatured
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
        <div className="masonry-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <PortfolioItem
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;