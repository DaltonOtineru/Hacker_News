import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const topHeadlines =
    'https://newsapi.org/v2/everything?q=apple&apiKey=c5e77d61a1324228b832fdfa9c021248';

  useEffect(() => {
    const getArticles = async () => {
      const response = await Axios.get(topHeadlines, {
        params: {
          maxResults: 10,
        },
      });
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  console.log(articles);
  return (
    <>
      {articles.map(
        ({ title, description, url, urlToImage, author, publishedAt }) => (
          <NewsItem
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
