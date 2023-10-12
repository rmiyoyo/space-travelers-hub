import React from 'react';
import Layout from './profileLayout';
import MyRockets from './MyRockets';

const Profile = () => (
  <Layout>
    <div>
      <div><h2>My Mission</h2></div>
      <div>
        <h2>My Rockets</h2>
        <MyRockets />
      </div>
      <div><h2>My Dragons</h2></div>
    </div>
  </Layout>
);

export default Profile;
