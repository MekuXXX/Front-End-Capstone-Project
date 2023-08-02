import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Specials from './components/Specials/Specials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Landing />
      <Specials />
      <Footer />
    </div>
  );
}

export default App;
