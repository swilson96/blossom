import React from 'react';
import {render} from 'react-dom';

import BlossomManager from './blossomManager.jsx';
import NameList from './nameList.jsx';

require("./css/app.scss");

class App extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <h1>I AM BLOSSOM</h1>
          <BlossomManager />
        </nav>
        <NameList />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
