// src/components/CountdownItem.jsx
import React, { useState, useEffect } from 'react';

const CountdownItem = ({ title, url }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0
    );

    const diff = midnight - now;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
      <div>{title}</div>
      <div style={styles.countdown}>Expira em: {timeLeft}</div>
    </a>
  );
};

const styles = {
  linkItem: {
    display: 'block',
    padding: '15px 20px',
    margin: '10px 0',
    backgroundColor: '#f7a072',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  countdown: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#ffeb3b',
  },
};

export default CountdownItem;
