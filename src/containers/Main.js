import { connect } from 'react-redux';

import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;
