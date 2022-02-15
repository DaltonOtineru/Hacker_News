import React from 'react';
import { GoCalendar } from 'react-icons/go';
import { BsFillPersonFill } from 'react-icons/bs';
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
            <p className="main--date--published">
              <span>
                <GoCalendar className="calendar--icon" />
              </span>
              February 15, 20222
            </p>
            <p className="main--author">
              <span>
                <BsFillPersonFill className="calendar--icon" />
              </span>
              {author}
            </p>
          </div>
          <p className="main--article--description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
