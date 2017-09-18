// a reducer takes two arguments, an action and a copy of current state

var posts = (state = [], action)=> {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing Likes!!")
      const i = action.index
      console.log(action)
      return [
        ...state.slice(0, i), //before the updated post.
        { ...state[i], likes: state[i].likes + 1}, //updates the post with the new like.
        ...state.slice(i+1) //after the updated post.
      ]
    // return updated state
    default:
      return state;

  }
}


export default posts
