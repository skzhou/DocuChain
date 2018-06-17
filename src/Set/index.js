import React from 'react';

import Signee from './Signee/index';
import Contract from './Contract/index';

export default class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signee1: {
        name: '',
        key: '',
        alreadySigned: false,
      },
      signee2: {
        name: '',
        key: '',
      },
      contract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      queriedSignee1: true
    };
    // fetch('localhost:4000/api?endpoint=getSignee1Signature')
    //   .then((response => {
    //     // response = {name: 'Signee 1 Name', key: ''} || response = undefined;
    //     if (response) {
    //       const newState = Object.assign(this.state);
    //       newState.signee1 = response;
    //       newState.signee1.alreadySigned = true;
    //       newState.queriedSignee1 = true;
    //       this.setState(newState);
    //     }
    //   }))
    //   .catch(error => {
    //     throw error;
    //   });
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    switch (typeof payload) {
      case 'string': {
        newState[field] = payload;
        break
      }
      case 'object': {
        newState[field] = Object.assign(newState[field], payload);
        break;
      }
      default: {}
    }
    this.setState(newState);
  }
  isSubmitButtonEnabled() {
    const areSigneeFieldsDefined = (signee) => {
      return signee.name.length && signee.key.length;
    }
    return (
      (areSigneeFieldsDefined(this.state.signee1) || this.state.signee1.alreadySigned)
      && (areSigneeFieldsDefined(this.state.signee2) || !this.state.signee1.alreadySigned)
      && this.state.contract.length
    );
  }
  submit() {
    // Save first signee's key
    const signee1Copy = Object.assign(this.state.signee1);
    delete signee1Copy.alreadySigned;
    // fetch('localhost:4000/api?endpoint=setSignee1Signature', {
    //   body: {...signee1Copy}, // {name: 'Signee 1 Name', key: 'asdf'}
    //   method: 'POST',
    // }).catch(error => { throw error; });
  }
  render() {
    // Two submit buttons since Web3's JS file appends a listener onto the submit button to push to Solidity based on id. To avoid the Web3's event listener from overriding the onClick functionality that saves the first signee to backend or vice versa, two buttons
    return (
      <div>
        <div style={{display: (!this.state.queriedSignee1 ? 'block' : 'none')}}>
          <label>Loading</label>
        </div>
        <div style={{display: (this.state.queriedSignee1 ? 'block' : 'none')}}>
          <div className="row">
            <div className="col-md-6">
              <Signee
                disabled={this.state.signee1.alreadySigned}
                reference="1"
                model={this.state.signee1}
                update={(payload) => this.update('signee1', payload)}
              />
            </div>
            <div className="col-md-6">
              <Signee
                disabled={!this.state.signee1.alreadySigned}
                reference="2"
                model={this.state.signee2}
                update={(payload) => this.update('signee2', payload)}
              />
            </div>
          </div>
          <Contract model={this.state.contract} update={(payload) => this.update('contract', payload)} />
          <div style={{display: (!this.state.signee1.alreadySigned ? 'block' : 'none')}}>
            <input // Show this button if no one has signed. Calls backend
              className="btn btn-primary"
              type="button"
              onClick={this.props.submit}
              disabled={!this.isSubmitButtonEnabled()}
              value="Submit signature"
            />
          </div>
          <div style={{display: (this.state.signee1.alreadySigned ? 'block' : 'none')}}>
            <input // Show this button if one signee has signed. Sends completed 
              id="submit-contract"
              className="btn btn-primary"
              type="button"
              disabled={!this.isSubmitButtonEnabled()}
              value="Submit contract"
            />
          </div>
        </div>
      </div>
    );
  }
};