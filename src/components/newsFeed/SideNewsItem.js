import React from 'react';
import SideNewsFeed from './SideNewsFeed';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNewsItem = ({ urlToImage, url, title, description }) => {
  return (
    <div className="side--news--article">
      <a href={url} className="news--article--anchor">
        <img src={urlToImage} alt={description} className="side--news--img" />
        <p className="side--article--description">{title}</p>
      </a>
    </div>
  );
};

export default SideNewsItem;
