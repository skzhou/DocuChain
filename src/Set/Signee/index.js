import React from 'react';

export default class Signee extends React.Component {
  update(payload) {
    this.props.update(payload);
  }
  render() {
    return (
      <div>
        <label>Signee {this.props.reference}</label>
        <input
          id={`signee${this.props.reference}-name`}
          className="form-control"
          disabled={this.props.disabled}
          type="text"
          placeholder="Enter name"
          value={this.props.model.name}
          onChange={(event) => this.props.update({name: event.target.value})}
        />
        <textarea
          id={`signee${this.props.reference}-key`}
          className="form-control"
          disabled={this.props.disabled}
          rows="4"
          cols="50"
          placeholder="Enter public key"
          onChange={(event) => this.props.update({key: event.target.value})}
          value={this.props.model.key}
          // value={this.props.disabled && this.props.model.key ? '**********' : this.props.model.key}
        ></textarea>
      </div>
    );
  }
};