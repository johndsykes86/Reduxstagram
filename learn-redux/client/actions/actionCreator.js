// increment likes
  export var increment = (index) => {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
//add comments
  export var addComment = (postId, author, comment) => {
    console.log("Dispatching add comment", postId, author, comment)
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
  }
//remove comments
export var removeComment = (postId, index) => {
  console.log(postId,index)
  return{
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}

export var editComment = (postId, author, comment, index) => {
  console.log("Dispatching edit comment", postId, author, comment, index)
  return {
    type: 'EDIT_COMMENT',
    postId,
    author,
    comment,
    index
  }
}
