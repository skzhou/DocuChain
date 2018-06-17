import React from 'react';

import Contract from './Contract/index';
import Signee from './../Signee/index';
import Key from './Key/index';

export default class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signeeName: '',
      contract: {
        contract: '',
        signee1Name: 'Tom',
        signee2Name: 'Jerry',
      },
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    newState[field] = payload;
    this.setState(newState);
  }
  shouldEnableSubmitButton() {
    return this.state.signeeName.length;
  }
  shouldShowContract() {
    return this.state.contract.contract.length !== 0;
  }
  submit() {
    const newState = Object.assign(this.state);
    newState.contract.contract = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.setState(newState);
  }
  render() {
    return (
      <div>
        {/* <Key update={(payload) => this.update('key', payload)} /> */}
        <Signee
          // disabled={this.state.signee1.alreadySigned}
          reference=""
          options={this.props.signees}
          update={(payload) => this.update('signeeName', payload.name)}
        />
        <input
          id="get-contract"
          className="btn btn-primary"
          type="button"
          value="Get contract"
          onClick={() => this.submit()}
          disabled={!this.shouldEnableSubmitButton()}
        />
        <div style={{display: this.shouldShowContract() ? 'block' : 'none'}}>
          <Contract model={this.state.contract} />
        </div>
      </div>
    );
  }
};