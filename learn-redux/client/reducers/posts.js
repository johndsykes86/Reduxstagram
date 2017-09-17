// a reducer takes two arguments, an action and a copy of current state

var posts = (state = [])=> {
  console.log(state, action)
  return state
}


export default posts
