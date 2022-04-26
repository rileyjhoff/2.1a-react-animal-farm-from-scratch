import React from 'react';
import './Header.css';

export default function Header({ greeting }) {
  return (
    <header>
      <div>
        {greeting}
      </div>
    </header>
  );
}
