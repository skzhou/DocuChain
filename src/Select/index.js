import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <input
            className="btn btn-primary"
            type="button"
            onClick={() => this.props.update('set')}
            value="Sign a contract"
          />
          <input
            className="btn btn-primary"
            type="button"
            onClick={() => this.props.update('get')}
            value="View a contract"
          />
        </div>
      </div>
    );
  }
};