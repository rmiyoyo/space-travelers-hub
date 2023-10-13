import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragon = createAsyncThunk(
  'books/getDragons',
  async () => {
    const response = await axios.get(apiEndpoint);
    return response.data.map((apidata) => ({
      id: apidata.id,
      name: apidata.name,
      description: apidata.description,
      flickr_images: apidata.flickr_images,
      reserved: false,
    }));
  },
);

const initialState = {
  dragonStore: [],
  status: 'idle',
  error: '',
};

const dragonsSlice = createSlice({
  name: 'apidata',
  initialState,
  reducers: {
    bookDragon: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((apidata) => (apidata.id === id
        ? { ...apidata, reserved: true } : apidata));
    },
    bookingCancelation: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((apidata) => (apidata.id === id
        ? { ...apidata, reserved: false } : apidata));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragon.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.dragonStore = action.payload;
      })
      .addCase(fetchDragon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { bookDragon, bookingCancelation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
