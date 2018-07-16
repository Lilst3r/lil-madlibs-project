import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

//things we need to fix
//placeholder
//gray/green number labels
//content labels
//generate btn space


export default Home;
