import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className='animal-item'>
      <img alt={type} />
      <h4>{name}</h4>
      <p>{says}</p>
    </div>
  );
}
