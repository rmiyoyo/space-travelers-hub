import React from 'react';
import '../css/profile.css';
import Layout from './profileLayout';
import MyRockets from './MyRockets';
import ProfileMission from '../components/ProfileMission';

const Profile = () => (
  <Layout>
    <div className="profile-wrapper">
      <div className="missions">
        <h2>My Mission</h2>
        <ProfileMission />
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <MyRockets />
      </div>
      <div className="dragons">
        <h2>My Dragons</h2>
      </div>
    </div>
  </Layout>
);

export default Profile;
