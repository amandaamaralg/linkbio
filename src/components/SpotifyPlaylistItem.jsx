// src/components/SpotifyPlaylistItem.jsx
import React from 'react';

const SpotifyPlaylistItem = ({ playlistUrl }) => {
  return (
    <div style={styles.playlistContainer}>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistUrl}?theme=0`} // Adiciona o parâmetro theme=0
        width="100%"
        height="80" // Altura reduzida para mostrar apenas o player
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

const styles = {
  playlistContainer: {
    margin: '10px 0',
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

export default SpotifyPlaylistItem;
