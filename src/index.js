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
      <div>
        <Header />
        {this.state.page === 'select' && <Select update={(payload) => this.update('page', payload)} />}
        {this.state.page === 'set' && <Set />}
        {this.state.page === 'get' && <Get />}
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
