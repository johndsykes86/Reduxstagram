// a reducer takes two arguments, an action and a copy of current state

var postComments = (state = [], action)=>{
  switch(action.type){
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment

        }]

    case 'REMOVE_COMMENT':
      console.log("removing comment", action.index)
      return [
        //up to the deleted comment
        ...state.slice(0, action.index),
        //after the deleted comment
        ...state.slice(action.index + 1)
      ];
    case 'EDIT_COMMENT':
      return[

      ]
    default:
      return state;
  }
  return state;
}


var comments = (state = [], action)=> {
  if(typeof action.postId !== undefined){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}


export default comments
