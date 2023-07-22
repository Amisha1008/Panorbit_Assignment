import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export var UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log("userinfo set", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    clear(state) {
      storage.removeItem("persist:panorbitRoot");
      state.userInfo = null;
    },
  },
});


export const {
  setUserInfo,
  clear
} = UserSlice.actions;

export default UserSlice.reducer;