import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTitle: (state, { payload }) => {
      state.data.push(payload);
    },
    deletTitle: (state, { payload }) => {
      const filterTodo = state.data.filter((itme) => itme.id !== payload);
      state.data = filterTodo;
    },
    ClearCompleted: (state) => {
      state.data = [];
    },
    textDecoration: (state, { payload }) => {
      const item = state.data.find((item) => item.id == payload);
      item.Completed = !item.Completed;
    },
    ActiveTitle: (state) => {
      state.data.map((item) => {
        item.Completed = false;
      });
    },
    textDecorationAll: (state) => {
      state.data.map((item) => {
        item.Completed = !item.Completed;
      });
    },
    incrementByAmount: (state, action) => {},
  },
});

export const {
  addTitle,
  deletTitle,
  ClearCompleted,
  textDecoration,
  incrementByAmount,
  ActiveTitle,
  textDecorationAll,
} = counterSlice.actions;

export default counterSlice.reducer;
