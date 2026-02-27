import { createSlice } from '@reduxjs/toolkit';

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    projects: []
  },
  reducers: {
    saveProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(item => item.title !== action.payload);
    },
    clearSaved: (state) => {
      state.projects = [];
    }
  }
});

export const { saveProject, removeProject, clearSaved } = savedSlice.actions;
export default savedSlice.reducer;