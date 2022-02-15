import React from 'react';

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  author,
  publishedAt,
}) => {
  return (
    <a href={url} className="main--news--anchor">
      <div className="main--news--article">
        <img
          src={urlToImage}
          alt="news article picture"
          className="main--news--img"
        />
        <div className="main--article--info">
          <h3 className="main--article--title">{title}</h3>
          <div className="main--date--author">
            <p className="main--date--published">{publishedAt}</p>
            <p className="main--author">{author}</p>
          </div>
          <p className="main--article--description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
