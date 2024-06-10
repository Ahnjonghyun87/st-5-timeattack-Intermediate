// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:"counter"
  initialState: 0,
  reducers: {
    addNumber:(state) => (state.number + 1)
  },
    minusNumber: (state) => (state.number - 2)

})


export const { addNumber, minusNumber} = conterSlice.actions

export default conterSlice.reducer
