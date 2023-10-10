import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './reduxFeatures/RocketsSlice';
import Rockets from './components/Rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <li><img alt="My-logo" /></li>
        <nav>
          <ul>
            <li>
              <NavLink to="/rockets" activeClassName="active">
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" activeClassName="active">
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/Dragons" activeClassName="active">
                Dragons
              </NavLink>
            </li>
            <li>
              <NavLink to="/Profile" activeClassName="Profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
