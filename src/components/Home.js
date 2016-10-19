import React from 'react';
import { Segment, Header, Divider, Button, List } from 'semantic-ui-react';

const Home = React.createClass({
  render() {
    const { posts, fetchPosts } = this.props; 
    return (
      <div>
        <Header 
          as='h3' 
          attached='top'
          color='grey'>
          Home Component</Header>
        <Segment attached>
          <Button positive onClick={fetchPosts}>Get Posts</Button>
          <List divided relaxed>
            {
              posts.map((post, key) => {
                return (
                  <List.Item key={key}>
                    <List.Content>
                      <List.Header>{post.title}</List.Header>
                      <List.Description>{post.body}</List.Description>
                    </List.Content>
                  </List.Item>
                  )
              })
            }
          </List>
        </Segment>
      </div>
    );
  }
});

export default Home;
