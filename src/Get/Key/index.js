import React from 'react';

export default class Key extends React.Component {
  render() {
    return (
      <div>
        <textarea onChange={(event) => this.props.update(event.target.value)}>{this.props.model}</textarea>
      </div>
    );
  }
};