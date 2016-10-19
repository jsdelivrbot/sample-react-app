import React from 'react';

const Home = React.createClass({
  render() {
    const { posts, fetchPosts } = this.props; 
    return (
      <div>
        <h3>Home</h3>
        <button onClick={fetchPosts}>Get Posts</button>
        {
          posts.map((post, key) => {
            return <li>{post.title}</li>
          })
        }
      </div>
    );
  }
});

export default Home;
