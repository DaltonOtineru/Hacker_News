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
      const response = await Axios.get(allNews);
      const articlesWithMedia = response.data.response.docs.filter(
        (article) => article.multimedia.length > 34
      );
      setArticles(articlesWithMedia);
      console.log(articlesWithMedia, 'Main news Articles');
      // changeDefaultSearchTerm(searchTerm);
    };
    getArticles();
  }, [defaultSearchTerm]);

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  return articles.map((article) => (
    <MainNewsItem
      title={article.headline.main}
      description={article.snippet}
      url={article.web_url}
      urlToImage={`http://www.nytimes.com/${article.multimedia[34]?.url}`}
      author={article.byline.original}
      publishedAt={date}
      key={article._id}
    />
  ));
};

export default MainNewsFeed;
