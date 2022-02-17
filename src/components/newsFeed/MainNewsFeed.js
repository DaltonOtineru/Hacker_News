import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MainNewsItem from './MainNewsItem';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainNewsFeed = ({
  searchTerm,

  defaultSearchTerm,
  changeDefaultSearchTerm,
}) => {
  const [articles, setArticles] = useState([]);

  const allNews =
    'https://newsapi.org/v2/everything/?apiKey=7f21bc70908c4fd096a6205251e6f4f5';

  useEffect(() => {
    const getArticles = async () => {
      const response = await Axios.get(allNews, {
        params: {
          pageSize: 9,
          q: defaultSearchTerm,
        },
      });
      setArticles(response.data.articles);
      changeDefaultSearchTerm(searchTerm);
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
