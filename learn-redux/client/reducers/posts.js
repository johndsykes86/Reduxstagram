// a reducer takes two arguments, an action and a copy of current state

var posts = (state = [], action)=> {
  console.log("the post will change")
  console.log(state, action)
  return state
}


export default posts
