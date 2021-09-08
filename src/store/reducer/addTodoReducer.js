import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [],
  },
  reducers: {
    addTodoList: (state, action) => {
      // let arr = [...state.list]
      // arr.push(action.payload)
      state.list = [...state.list, action.payload]
    },
    updateList: (state, action) => {
      state.list = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodoList, updateList } = todoListSlice.actions;

export default todoListSlice.reducer;
