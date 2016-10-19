import React from 'react';
import { Container, Header  } from 'semantic-ui-react';

const Main = React.createClass({
  render() {
    return (
      <Container>
        <Header 
          as='h2' 
          content='Sample ReactJS App' 
          subheader='Fetches random list of posts from a remote API' />
        <div>{React.cloneElement(this.props.children, this.props)}</div>
      </Container>
    );
  }
});

export default Main;
