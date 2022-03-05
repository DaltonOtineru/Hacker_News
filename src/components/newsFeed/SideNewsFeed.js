import React, { useState, useEffect } from 'react';
import newsApi from '../../apis/newsApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNewsItem from './MainNewsItem';
import axios from 'axios';
import SideNewsItem from './SideNewsItem';

import '../../css/sideNewsFeed.css';

export const SideNewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const topNews =
    'https://newsapi.org/v2/top-headlines/?apiKey=7f21bc70908c4fd096a6205251e6f4f5';

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(topNews, {
        params: {
          pageSize: 6,
          q: 'apple',
        },
      });
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  console.log(articles);
  return articles.map(({ title, urlToImage, url, description, content }) => (
    <>
      <SideNewsItem
        title={title}
        urlToImage={urlToImage}
        url={url}
        description={description}
        key={content}
      />
    </>
  ));
};

export default SideNewsFeed;
