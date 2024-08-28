// src/components/VideoItem.jsx
import React from 'react';

const VideoItem = ({ videoUrl }) => {
  return (
    <div style={styles.videoContainer}>
      <iframe
        width="100%"
        height="315"
        src={videoUrl}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const styles = {
  videoContainer: {
    margin: '10px 0',
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

export default VideoItem;
