import React, { Component } from 'react';
import Header from './components/header';
import Message from './components/message';
import Cart from './components/cart';
import Footer from './components/footer';
import ProductsContainer from './containers/products_container';
import CartsContainer from './containers/carts_container';

class App extends Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <header>
          <Header />
               </header>
        <main id="mainContainer">
        <div className="container">
       <ProductsContainer /> 
<Message />
          {/* <!-- Cart --> */}
          <CartsContainer />
</div>
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
