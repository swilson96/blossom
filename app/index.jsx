import React from 'react';
import {render} from 'react-dom';

import BlossomManager from './blossomManager.jsx';
import NameList from './nameList.jsx';
import InputGrid from './inputGrid.jsx';

require("./css/app.scss");

class App extends React.Component {
  constructor() {
    super();
    this.state = {blossom: {nodes:[], edges:[]}};
  }

  resetBlossom() {
    this.setState({
      blossom: {
        nodes: [],
        edges: []
      }
    });
  }

  addNode(nodeName) {
    var itemArray = this.state.blossom.nodes;

    itemArray.push(
      {
        name:nodeName,
        key: Date.now()
      }
    );

    this.setState({
      blossom: {
        nodes: itemArray,
        edges: this.state.blossom.edges
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
        <NameList blossom={this.state.blossom} addNode={(n) => this.addNode(n)} />
        <InputGrid blossom={this.state.blossom} />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
