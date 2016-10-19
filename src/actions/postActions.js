import axios from 'axios';

import { FETCH_POSTS } from '../constants/actionTypes'

export function fetchPosts(){
  return function (dispatch){
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => dispatch({
        type: FETCH_POSTS,
        payload: response.data
      }).error((response) => {
        //handle error possibly with an error action
      }))
  }
}
