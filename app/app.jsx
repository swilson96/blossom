import React from 'react';

import BlossomManager from './blossomManager.jsx';
import AddNode from './addNode.jsx';
import InputGrid from './inputGrid.jsx';

require("./css/app.scss");

class App extends React.Component {
  constructor() {
    super();
    this.state = {blossom:{nodes:[], edges:[]}}
  }

  resetBlossom() {
    this.setState({
      blossom: {
        nodes: [],
        edges: []
      }
    });
  }

  render () {
    return (
      <div>
        <nav>
          <h1>I AM BLOSSOM</h1>
          <BlossomManager reset={() => this.resetBlossom()} />
        </nav>
        <AddNode />
        <InputGrid blossom={this.state.blossom} />
      </div>
    )
  }
}

export default App;
