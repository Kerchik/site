import profileReducer, {addPostActionCreator} from "./profileReducer"
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('length of post should be incremented', () => {
  let action = addPostActionCreator("It kek");
  let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 5},
    ]
}       
  let newState = profileReducer(state, action)
  expect (newState.posts.length).toBe(3)
});
