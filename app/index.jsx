import React from 'react';
import {render} from 'react-dom';

import NameList from './nameList.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>I AM BLOSSOM</h1>
        <NameList />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
