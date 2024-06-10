import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
  name: 'todos',
  initialState:[]
}),
  reducers:{
    addTodos: (state.action) => {} 
 
    removeTodos: (state.action) => {},
    toggleTodos: (state.action) => {
      if ()
    },
  },

export const { addTodos, removeTodos, toggleTodos } = todoSlice.actions;
export default todoSlice.reducer ;