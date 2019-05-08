import React from 'react';

class Input extends React.Component {
  render() {
    return (<input type={this.props.type}
      onChange={this.props.onChange}
      id={this.props.id} 
      value={this.props.value}
      className={this.props.className}
      placeholder={this.props.placeholder}/>
    );
  }
}

export default Input;