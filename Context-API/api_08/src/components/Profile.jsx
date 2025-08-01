import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login bbg</div>;

  return <div>Welcome {user.username}</div>;
};

export default Profile;
