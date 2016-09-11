import React from 'react';

import EditableTitle from './editableTitle';
import BlossomManager from './blossomManager';
import AddNode from './addNode';
import InputGrid from './inputGrid';
import CalculateMatching from './calculateMatching';
import DisplayResults from './displayResults';
import SelectedNode from './selectedNode';

require("./css/app.scss");

class App extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <EditableTitle />
          <BlossomManager keyFromUrl={this.props.location.query.key}/>
        </nav>
        <AddNode />
        <InputGrid />
        <CalculateMatching />
        <DisplayResults />
        <SelectedNode />
      </div>
    )
  }
}

export default App;
