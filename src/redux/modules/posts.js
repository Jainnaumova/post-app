import { put, takeEvery } from "redux-saga/effects";

// Actions
export const RECEIVE_POST = "RECEIVE_POST";
export const ADD_POST = "ADD_POST";
// export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
// export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
// export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
// export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
// export const LIKE_POST = "LIKE_POST";
// export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
// export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

// Reducer
const initialState = {
  posts: [],
  comments: []
};

export default function reducer(state = initialState, action = {}) {
  let newPosts, newComments;

  switch (action.type) {
    case RECEIVE_POST:
      newPosts = state.posts.slice();
      newPosts.push(action.payload);

      return {
        ...state,
        posts: newPosts
      };
    case RECEIVE_COMMENT:
      newComments = state.comments.slice();
      newComments.push(action.payload);

      return {
        ...state,
        comments: newComments
      };

    // case ADD_POST:
    //   // Perform action
    //   return state;

    // case ADD_POST_SUCCESS:
    //   // Perform action
    //   return state;
    //
    // case ADD_POST_FAILURE:
    //   // Perform action
    //   return state;
    // case ADD_COMMENT:
    //   // Perform action
    //   return state;
    //
    // case ADD_COMMENT_SUCCESS:
    //   // Perform action
    //   return state;
    //
    // case ADD_COMMENT_FAILURE:
    //   // Perform action
    //   return state;
    //
    // case LIKE_POST:
    //   // Perform action
    //   return state;
    //
    // case LIKE_POST_SUCCESS:
    //   // Perform action
    //   return state;
    //
    // case LIKE_POST_FAILURE:
    //   // Perform action
    //   return state;

    default:
      return state;
  }
}

// Action Creators

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
}
//
// export function likePost() {
//   return {
//     type: LIKE_POST
//   };
// }

// Sagas
export function createPostSaga() {
  let index = 0;

  function* addPostSaga(action) {
    yield put({
      type: RECEIVE_POST,
      payload: {
        ...action.payload,
        id: index++
      }
    });
  }

  function* watchAddPostSaga() {
    yield takeEvery(ADD_POST, addPostSaga);
  }

  return {
    watchAddPostSaga
  };
}

export function createCommentSaga() {
  let index = 0;

  function* addCommentSaga(action) {
    yield put({
      type: RECEIVE_COMMENT,
      payload: {
        ...action.payload,
        id: index++
      }
    });
  }

  function* watchAddCommentSaga() {
    yield takeEvery(ADD_COMMENT, addCommentSaga);
  }

  return {
    watchAddCommentSaga
  };
}
