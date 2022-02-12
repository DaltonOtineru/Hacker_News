import axios from 'axios';

const KEY = 'c5e77d61a1324228b832fdfa9c021248';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
});
