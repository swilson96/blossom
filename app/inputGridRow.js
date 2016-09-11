import React from 'react';
import { connect } from 'react-redux';
import { renameNode } from '../actions/nodeActions';
import { selectNode, deselectNode } from '../actions/selectNodeActions';
import InputCell from './inputCell';
import { RIEInput } from 'riek';

require("./css/inputGridRow.scss");

class InputGridRow extends React.Component {
  createInputCell(x, y) {
    return <InputCell key={x.key} x={x} y={y} />
  }

  onChange(valueObject) {
    this.props.renameNode(this.props.currentNode.key, valueObject.text);
  }

  isValid(value) {
    return value && value != '';
  }

  isSelected() {
    return this.props.selectedNode && this.props.selectedNode.key == this.props.currentNode.key
  }

  rowClass() {
    if (this.props.selectedNode && this.props.selectedNode.key != this.props.currentNode.key) {
      return 'hidden';
    }
    return '';
  }

  iconClick() {
    if (this.isSelected()) {
      this.props.deselectNode();
    } else {
      this.props.selectNode(this.props.currentNode);
    }
  }

  iconClass() {
    if (this.isSelected()) {
      return 'fa fa-expand';
    }
    return 'fa fa-compress';
  }

  render() {
    var inputCells = [];
    for (var k in this.props.nodes) {
      inputCells.push(this.createInputCell(this.props.nodes[k], this.props.currentNode));
    }
    return (
      <tr key={this.props.currentNode.key} className={this.rowClass()}>
        <td className="nameCell" id={this.props.currentNode.key + "_row"}>
          <RIEInput
            value={this.props.currentNode.name}
            change={vo => this.onChange(vo)}
            propName="text"
            className="editable"
            validate={v => this.isValid(v)}
            classLoading="loading"
            classInvalid="invalid"/>
          <span onClick={e => this.iconClick(e)}><i className={this.iconClass()}></i></span>
        </td>
        {inputCells}
      </tr>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    selectedNode: state.selectedNode
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    renameNode: (key, name) => {
      dispatch(renameNode(key, name))
    },
    selectNode: (node) => {
      dispatch(selectNode(node))
    },
    deselectNode: () => {
      dispatch(deselectNode())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputGridRow);
