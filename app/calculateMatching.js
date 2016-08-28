import React from 'react';
import { connect } from 'react-redux';

require("./css/calculateMatching.scss");

class CalculateMatching extends React.Component {

  calculate(e) {
    // TODO: apply the blossom algorithm
    // TODO: display the results
    console.log("Calculate button clicked. " + this.props.nodes.length + " nodes.");
    e.preventDefault();
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
