import { FETCH_POSTS } from '../constants/actionTypes.js';

function posts(state = [], action){
  switch (action.type) {
    case FETCH_POSTS:
      //update state here
      break;
    default:
      return state;
  }
}

export default posts;
