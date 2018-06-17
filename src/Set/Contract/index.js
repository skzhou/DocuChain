import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Contract"
          onChange={(event) => this.props.update(event.target.value)}>
          {this.props.model}
        </textarea>
      </div>
    );
  }
};