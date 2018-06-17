import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <label>Contract</label>
        <textarea readonly id="contract-output"></textarea>
      </div>
    );
  }
};