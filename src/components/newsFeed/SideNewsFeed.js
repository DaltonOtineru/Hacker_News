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
    'https://newsapi.org/v2/top-headlines/?apiKey=c5e77d61a1324228b832fdfa9c021248';

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

  return articles.map(({ title, urlToImage, url, description }) => (
    <>
      <SideNewsItem
        title={title}
        urlToImage={urlToImage}
        url={url}
        description={description}
        // key={index}
      />
    </>
  ));
};

export default SideNewsFeed;
