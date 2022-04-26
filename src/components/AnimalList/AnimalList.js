import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal';

export default function AnimalList({ animals }) {
  return (
    <div className='animal-list'>
      {
        animals.map(animal => 
          <Animal 
            key={animal.name}
            {...animal}
          />
        )
      }
    </div>
  );
}
