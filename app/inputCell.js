import React from 'react';

class InputCell extends React.Component {
  render() {
    var className = "inputCell";
    if (this.props.x.key == this.props.y.key) {
      className += " diagonal";
    }
    return (
      <td className={className} id={this.props.x.key + ":" + this.props.y.key}>
      </td>
    )
  }
}

export default InputCell
