import React from 'react';
import Routers from './assets/routers';
import Navigation from './components/nav';
import Footer from './components/footer';

function App() {
  console.clear();
  return (
    <React.Fragment>
      <Navigation />
      <Routers />
      <Footer />
    </React.Fragment>
  );
}

export default App;
