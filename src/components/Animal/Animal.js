import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className='animal-item' style={{ position: 'fixed', top, left }}>
      <img alt={type} src={`${type}.svg`} />
      <h4>{name}</h4>
      <p>{says}</p>
    </div>
  );
}
