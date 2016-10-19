import { FETCH_POSTS, FETCH_POSTS_ERROR } from '../constants/actionTypes.js';

function posts(state = [], action){
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POSTS_ERROR:
      //error 
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

export default posts;
