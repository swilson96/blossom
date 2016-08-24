import React from 'react';

import BlossomManager from './blossomManager.jsx';
import AddNode from './addNode.jsx';
import InputGrid from './inputGrid.jsx';

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
      </div>
    )
  }
}

export default App;
