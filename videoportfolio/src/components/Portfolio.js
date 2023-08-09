import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Work from './Work';

function PortfolioContainer() {

    return (
        <div>
          <Header/>

          <About/>

          <Work/>
          
          <Footer/>
        </div>
      );
    }

export default PortfolioContainer;