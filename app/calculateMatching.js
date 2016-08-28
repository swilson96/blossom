import React from 'react';
import { connect } from 'react-redux';
import { blossomMatching } from '../algorithm';
import { setResult } from '../actions';

require("./css/calculateMatching.scss");

class CalculateMatching extends React.Component {

  calculate(e) {
    e.preventDefault();

    var result = blossomMatching(this.props.nodes, this.props.edges);

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
