import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MainNewsItem from './MainNewsItem';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainNewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const allNews =
    'https://newsapi.org/v2/everything/?apiKey=c5e77d61a1324228b832fdfa9c021248';

  useEffect(() => {
    const getArticles = async () => {
      const response = await Axios.get(allNews, {
        params: {
          pageSize: 4,
          q: 'cyber security',
        },
      });
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <>
      {articles.map(
        ({ title, description, url, urlToImage, author, publishedAt }) => (
          <MainNewsItem
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
            author={author}
            publishedAt={publishedAt}
          />
        )
      )}
    </>
  );
};

export default MainNewsFeed;
