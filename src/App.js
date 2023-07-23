import React from 'react';
import './App.css';

import {
  Blog,
  Header,
  Feature,
  Footer,
  Possibility,
  Whatgpt3,
} from './containers';

import { CTA, Brand, Navbar } from './components';

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
