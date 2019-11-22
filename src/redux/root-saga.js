import "regenerator-runtime/runtime";
import { spawn } from "redux-saga/effects";
import { createPostSaga, createCommentSaga } from "./modules/posts";

function* rootSaga() {
  const { watchAddPostSaga } = createPostSaga();

  yield spawn(watchAddPostSaga);

  const { watchAddCommentSaga } = createCommentSaga();

  yield spawn(watchAddCommentSaga);
}

export default rootSaga;
