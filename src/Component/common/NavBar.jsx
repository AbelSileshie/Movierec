import React from 'react';
import Logo from './Logo';

export default function NavBar({ children }) {
  return (
    <nav className="text-white">
      <Logo />
      {children}
    </nav>
  );
}
