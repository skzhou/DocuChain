import React from 'react';
import ReactDOM from 'react-dom';
// import { Web3Provider } from 'react-web3';

import Header from './Header/index';
import Footer from './Footer/index';
import Select from './Select/index';
import Set from './Set/index';
import Get from './Get/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'select' // ['select', 'set', 'get']
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    newState[field] = payload;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div style={{display: (this.state.page === 'select' ? 'block' : 'none')}}>
          <Select update={(payload) => this.update('page', payload)} />
        </div>
        <div style={{display: (this.state.page === 'set' ? 'block' : 'none')}}>
          <Set />
        </div>
        <div style={{display: (this.state.page === 'get' ? 'block' : 'none')}}>
          <Get />
        </div>
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
