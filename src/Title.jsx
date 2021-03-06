import React from 'react';

const Title = ({ user }) => {
  return (
    <div className="title">
      <h1>FireGram</h1>
      <h2>Your Moments {user?.name}</h2>
      <p>Create Moment because you own it.</p>
    </div>
  );
};

export default Title;
