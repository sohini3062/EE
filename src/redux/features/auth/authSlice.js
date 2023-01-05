import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    loadUser(state) {
      state.token = localStorage.getItem('token') || null;
      state.isLoggedIn = localStorage.getItem('token') ? true : false;
      state.userId = localStorage.getItem('userId') || null;
    },
    signIn(state, action) {
      const { payload } = action;
      const { token, id } = payload;

      state.token = token;
      state.isLoggedIn = true;
      state.userId = id;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
      localStorage.clear();
    },
  },
});

export const { signIn, signOut, setLoading, loadUser } = authSlice.actions;

export default authSlice.reducer;
