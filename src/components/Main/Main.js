import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: 'url(background.png)' }}>
      <AnimalList animals={animals} />
    </main>
  );
}
