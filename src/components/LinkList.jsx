// src/components/LinkList.jsx
import React from 'react';
import LinkItem from './LinkItem';
import VideoItem from './VideoItem';
import CountdownItem from './CountdownItem';
import SpotifyPlaylistItem from './SpotifyPlaylistItem';

const LinkList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        if (item.type === 'video') {
          return <VideoItem key={index} videoUrl={item.url} />;
        } else if (item.type === 'countdown') {
          return <CountdownItem key={index} title={item.title} url={item.url} />;
        } else if (item.type === 'spotify') {
          return <SpotifyPlaylistItem key={index} playlistUrl={item.url} />;
        } else {
          return <LinkItem key={index} url={item.url} title={item.title} />;
        }
      })}
    </div>
  );
};

export default LinkList;
