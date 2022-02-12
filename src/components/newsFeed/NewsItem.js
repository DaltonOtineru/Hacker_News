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
    <a href={url}>
      <div className="news--article">
        <img src={urlToImage} alt="news article picture" />
        <div className="article--info">
          <h3 className="article--title">{title}</h3>
          <div className="date--author">
            <p className="date--published">{publishedAt}</p>
            <p className="author">{author}</p>
          </div>
          <p className="article--description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
