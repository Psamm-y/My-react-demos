import React from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', age: 5 });

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Profile;
