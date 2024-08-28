// src/components/LinkItem.jsx
import React from 'react';

const LinkItem = ({ url, title }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
      {title}
    </a>
  );
};

const styles = {
  linkItem: {
    display: 'block',
    padding: '15px 20px',
    margin: '10px 0',
    backgroundColor: '#eee',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default LinkItem;
