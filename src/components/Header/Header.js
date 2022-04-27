import React from 'react';
import './Header.css';

export default function Header({ greeting }) {
  return (
    <header>
      <div>
        <h3>
          {greeting}
        </h3>
      </div>
    </header>
  );
}
