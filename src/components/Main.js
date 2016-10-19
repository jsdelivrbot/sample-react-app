import React from 'react';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h2>Sample ReactJS App</h2>
        <div>{React.cloneElement(this.props.children, this.props)}</div>
      </div>
    );
  }
});

export default Main;
