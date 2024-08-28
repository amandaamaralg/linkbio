// src/components/Header.jsx
import React from 'react';

const Header = ({ profilePic, userName, displayName }) => {
  return (
    <div style={styles.header}>
      <img src={profilePic} alt="Profile" style={styles.profilePic} />
      <h2>{displayName}</h2>
      <p>{userName}</p>
    </div>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profilePic: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
};

export default Header;
