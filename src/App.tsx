import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Specials from './components/Specials/Specials';
import Footer from './components/Footer/Footer';
import BookForm from './components/BookForm/BookForm';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Specials />
      <BookForm />
      <Footer />
    </div>
  );
}

export default App;
