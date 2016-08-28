import React from 'react';

import BlossomManager from './blossomManager';
import AddNode from './addNode';
import InputGrid from './inputGrid';
import CalculateMatching from './calculateMatching';

require("./css/app.scss");

class App extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <h1>I AM BLOSSOM</h1>
          <BlossomManager />
        </nav>
        <AddNode />
        <InputGrid />
        <CalculateMatching />
      </div>
    )
  }
}

export default App;
