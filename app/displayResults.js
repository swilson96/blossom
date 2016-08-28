import React from 'react';
import { connect } from 'react-redux';

require("./css/displayResults.scss");

class DisplayResults extends React.Component {
  render() {
    return (
      <div className="results">
        {this.props.result.length? <h2>RESULTS</h2> : ''}
        {this.props.result.map(pair => {
            return(
              <div key={pair[0]}>{pair[0]}, {pair[1]}</div>
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  };
}

export default connect(mapStateToProps)(DisplayResults);
