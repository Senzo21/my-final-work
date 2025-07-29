import React from 'react';
import '../styles/Card.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} />}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default Card;
