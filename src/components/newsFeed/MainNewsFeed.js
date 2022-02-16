import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MainNewsItem from './MainNewsItem';
import NewsFeed from './NewsFeed';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainNewsFeed = ({
  searchTerm,
  setSearchTerm,
  defaultSearchTerm,
  changeDefaultSearchTerm,
}) => {
  const [articles, setArticles] = useState([]);

  const allNews =
    'https://newsapi.org/v2/everything/?apiKey=c5e77d61a1324228b832fdfa9c021248';

  useEffect(() => {
    const getArticles = async () => {
      const response = await Axios.get(allNews, {
        params: {
          pageSize: 9,
          q: defaultSearchTerm,
        },
      });
      setArticles(response.data.articles);
      console.log(defaultSearchTerm);
    };
    getArticles();
  }, [defaultSearchTerm]);

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
            // key={title}
          />
        )
      )}
    </>
  );
};

export default MainNewsFeed;
