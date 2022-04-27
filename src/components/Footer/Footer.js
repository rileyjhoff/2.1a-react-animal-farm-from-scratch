import React from 'react';
import './Footer.css';

export default function Footer({ email }) {
  return (
    <footer>
      <div>
        Contact us at: {email}
      </div>
    </footer>
  );
}
