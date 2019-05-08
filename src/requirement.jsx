import React from 'react';

class Requirement extends React.Component {
  render() {
    return (
      <span
       className={this.props.className}>
        {this.props.txt}
      </span>
    )
  }
}

export default Requirement;