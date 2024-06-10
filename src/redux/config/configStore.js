const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./slices/calculatorSlice.js";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
