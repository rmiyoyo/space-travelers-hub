import { useSelector } from 'react-redux';
import '../css/ProfileMissions.css';

const ProfileMission = () => {
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);

  if (joinedMissions.length === 0) {
    return (
      <div className="reserved-container">
        <h2>Reserved Missions</h2>
        <div className="rocket-profile">
          <p>None</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reserved-container">
      {joinedMissions && joinedMissions.map((mission) => (
        <div key={mission.id} className="rocket-profile">
          <p>{mission.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileMission;
