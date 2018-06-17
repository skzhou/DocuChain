import React from 'react';

export default class Signee extends React.Component {
  update(payload) {
    this.props.update(payload);
  }
  render() {
    return (
      <div>
        <label>Signee {this.props.reference}</label>
        <div class="form-group">
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(event) => this.update({name: event.target.value})}
            style={{width: '100%'}}>
            <option></option>
            {this.props.options.map((signee) => 
              <option>{signee.name}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
};