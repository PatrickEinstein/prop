import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    signedInUser: [],
    loggedInUser: [],
    typeofProfilePage: "",
    openModal: false,
    openModal2: false,
    selectedCollection: {},
  },
  reducers: {
    setSelectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
    },
    toggleopenModal: (state, action) => {
      state.openModal = !state.openModal;
    },
    toggleopenModal2: (state, action) => {
      state.openModal2 = !state.openModal2;
    },
    setSignedUpUser: (state, action) => {
      state.signedInUser = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setProfileIndex: (state, action) => {
      state.typeofProfilePage = action.payload;
    },
  },
});

export const {
  toggleopenModal2,
  setSignedUpUser,
  setLoggedInUser,
  setProfileIndex,
  toggleopenModal,
  setSelectedCollection,
} = auth.actions;

export default auth.reducer;
