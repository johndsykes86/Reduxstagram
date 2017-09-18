import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreator'
import Main from './Main'


var mapStateToProps = (state) => {
  // binds the current state to the Main components props as posts and comments
  return {
      posts: state.posts,
      comments: state.comments,
  }
}

var mapDispatchToProps = (dispatch) => {
  //binds the actions to dispatch
  return bindActionCreators(actionCreators, dispatch)
}


//connect is imported from 'react-redux and takes two arguments, mapStateToProps and mapDispatchToProps and attaches to the Main component. This gives Main access to all actions and reducers as well as data.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App
