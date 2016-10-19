import React from 'react';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h2>Sample ReactJS App</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

export default Main;
