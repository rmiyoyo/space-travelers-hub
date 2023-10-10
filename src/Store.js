import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './reduxFeatures/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    // missions: missionsReducer,
    // Dragons: DragonsReducer,
  },
});

export default store;
