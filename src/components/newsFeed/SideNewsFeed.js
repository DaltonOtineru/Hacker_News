import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SideNewsItem from './SideNewsItem';
import '../../css/sideNewsFeed.css';

export const SideNewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'hfe0DWIRg7rLvoG2VPRXlugehH7gG2q2';
  const topNews = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=basketball&api-key=${apiKey}`;

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(topNews, {
        params: {
          pageSize: 6,
          q: 'basketball',
        },
      });
      setArticles(response.data.response.docs);
    };
    getArticles();
  }, []);
  console.log(articles);
  return articles.map((article, index) => (
    <SideNewsItem
      title={article.headline.main}
      urlToImage={`http://www.nytimes.com/${article.multimedia[0].url}`}
      url={article.web_url}
      description={article.snippet}
      key={index}
    />
  ));
};

export default SideNewsFeed;
