import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
