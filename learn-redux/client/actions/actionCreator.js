// increment likes
  export var increment = index => {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
//add comments
  export var addComment = (postId, author, comment) => {
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
  }
//remove comments
export var removeComment = (postId, i) => {
  return{
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
