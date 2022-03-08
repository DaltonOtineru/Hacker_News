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

  const apiKey = 'hfe0DWIRg7rLvoG2VPRXlugehH7gG2q2';
  const allNews = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${defaultSearchTerm}&api-key=${apiKey}`;

  useEffect(() => {
    const getArticles = async () => {
      const response = await Axios.get(allNews, {
        params: {
          pageSize: 9,
          q: defaultSearchTerm,
        },
      });
      setArticles(response.data.response.docs);
      console.log(response.data.response.docs);

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
            key={title}
          />
        )
      )}
    </>
  );
};

export default MainNewsFeed;
