import React from 'react';
import '@/style/services.css'; 

const serviceData = [
  {
    iconClass: "ri-code-s-slash-line",
    title: "Web Development",
    description: "Learn More",
  },
  {
    iconClass: "ri-code-s-slash-line",
    title: "Backend Development",
    description: "Learn More",
  },
  {
    iconClass: "ri-paint-brush-line",
    title: "UI/UX Design",
    description: "Learn More",
  },
  {
    iconClass: "ri-wordpress-fill",
    title: "WordPress Developer",
    description: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="headings">
        <h2>Services</h2>
        <p>Our Services</p>
      </div>
      <div className="service_card_container">
        {serviceData.map((service, index) => (
          <div className="service_card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
