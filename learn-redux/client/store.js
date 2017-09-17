import {createStore, compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

//seed data
import comments from './data/comments'
import posts from './data/posts'

//creating an object for the default data
const defaultState={
  //ES6
  posts,
  comments
}

//store needs the rootReducer and defaultState object
const store = createStore(rootReducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store;
