import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNewsItem = ({ urlToImage, url, title, description, content }) => {
  return (
    <div className="side--news--article" key={content}>
      <a href={url} target="_blank" className="news--article--anchor">
        <img src={urlToImage} alt={description} className="side--news--img" />
        <p className="side--article--description">{title}</p>
      </a>
    </div>
  );
};

export default SideNewsItem;
