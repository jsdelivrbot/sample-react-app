import axios from 'axios';

import { FETCH_POSTS, FETCH_POSTS_ERROR } from '../constants/actionTypes'

export function fetchPosts(){
  return function (dispatch){
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => dispatch({
        type: FETCH_POSTS,
        payload: response.data
      })).catch((error) => dispatch({
        type: FETCH_POSTS_ERROR,
        payload: error
      }))
  }
}
