import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
  subreddits: [
    { id: 1, url: 'r/college', display_name: 'r/college' },
    { id: 2, url: 'r/CollegeLife', display_name: 'r/CollegeLife' },
    { id: 3, url: 'r/CollegeCooking', display_name: 'r/CollegeCooking' },
    { id: 4, url: 'r/productivity', display_name: 'r/productivity' },
    { id: 5, url: 'r/CollegeHumor', display_name: 'r/CollegeHumor' }
  ],
  error: false,
  isLoading: false,
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const selectSubreddits = (state) => state.subreddits.subreddits;
