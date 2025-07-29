import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <button className={`btn ${variant}`} onClick={onClick}>{label}</button>
);

export default Button;
