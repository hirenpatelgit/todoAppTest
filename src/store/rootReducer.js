import { configureStore, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import AddTodoReducer from './reducer/addTodoReducer';

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable: true
})

export default configureStore({
  reducer: {
    rTodo: AddTodoReducer,
    // middleware: [serializableMiddleware, ReduxThunk]
  },
});
