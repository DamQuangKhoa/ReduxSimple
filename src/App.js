import React, { Component } from 'react';
import Header from './components/header';
import Products from './components/products';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <header>
          <Header />
               </header>
        <main id="mainContainer">
       <Products /> 
        </main>
        {/* <!-- Footer --> */}
<footer className="page-footer center-on-small-only">
<Footer />
                </footer>
    </div>
    );
  }
}

export default App;
