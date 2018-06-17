import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <textarea
          className="form-control"
          rows="4"
          cols="50"
          placeholder="Enter contract"
          onChange={(event) => this.props.update(event.target.value)}
          value={this.props.model}
        ></textarea>
      </div>
    );
  }
};