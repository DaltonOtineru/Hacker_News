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
      setArticles(response.data.response.docs);

      console.log(response.data.response.docs);

      // changeDefaultSearchTerm(searchTerm);
    };
    getArticles();
  }, [defaultSearchTerm]);

  return articles.map((article) => (
    <MainNewsItem
      title={article.headline.main}
      description={article.snippet}
      url={article.web_url}
      urlToImage={`http://www.nytimes.com/${article.multimedia[1].url}`}
      author={article.byline.original}
      publishedAt={article.pub_date}
      key={article._id}
    />
  ));
};

export default MainNewsFeed;
