import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const rocketsWithDescriptionAndImages = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      images: rocket.flickr_images, // Assuming images are stored in 'flickr_images' property
    }));
    return rocketsWithDescriptionAndImages;
  } catch (error) {
    throw new Error('the data was unable to be fetched');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
