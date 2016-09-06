import React from 'react';
import { connect } from 'react-redux';
import { blossomMatching } from '../algorithm';
import { setResult } from '../actions';

import BlossomStore from '../storage/blossomStore';

require("./css/calculateMatching.scss");

class CalculateMatching extends React.Component {
  constructor() {
    super();
    this.blossomStore = new BlossomStore();
  }

  calculate(e) {
    e.preventDefault();

    if (this.blossomStore.isConnected()) {
      this.blossomStore.getEdges(val => this.publishResultFromEdges(val))
    } else {
      this.publishResultFromEdges(this.props.edges)
    }
  }

  publishResultFromEdges(edges) {
      var result = blossomMatching(this.props.nodes, edges);
      this.props.dispatch(setResult(result));
  }

  render() {
    return (
      <div className="calculateBlossom">
        <form onSubmit={(e) => this.calculate(e)}>
          <button id="addNodeSubmit" type="submit">Calculate Matching</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes,
    edges: state.edges
  };
}

export default connect(mapStateToProps)(CalculateMatching);
