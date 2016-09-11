import React from 'react';
import { connect } from 'react-redux';
import { deselectNode } from '../actions/selectNodeActions';
import InputGridHeader from './inputGridHeader';
import InputGridRow from './inputGridRow';

require("./css/selectedNode.scss");

class SelectedNode extends React.Component {
  close() {
    this.props.deselectNode();
  }

  render() {
    let nodes = this.props.nodes;

    if (!this.props.selectedNode) {
      return <div></div>
    }

    return (
      <div className="overlay">
        <div className="popup">
          <button className="close" onClick={e => this.close(e)}>Close</button>
          <table id="selectedNode" className="inputGrid">
            <InputGridHeader nodes={nodes} />
            <tbody>
              <InputGridRow currentNode={this.props.selectedNode} isExpanded={true} nodes={nodes} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes,
    selectedNode: state.selectedNode
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deselectNode: () => {
      dispatch(deselectNode())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedNode);
