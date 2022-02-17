import axios from 'axios';

const KEY = 'c5e77d61a1324228b832fdfa9c021248';
const NEW_KEY = '7f21bc70908c4fd096a6205251e6f4f5';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
});
