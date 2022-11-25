import axios from 'axios';

let PROJECT_ID = 'epd7a49a';
let DATASET = 'production';
let QUERY = encodeURIComponent(`*[_type == "posts"]{
  author, date, id, image, text, title, likes,
  postCategory->
}`);
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export default class PostService {
  static async getAll() {
    const response = await axios.get(PROJECT_URL);
    const result = response.data.result;
    return result;
  }

  static async getById(id) {
    let QUERY_BY_ID = encodeURIComponent(`*[_type == "posts" && id == ${id}]{
      author, date, id, image, text, title, likes,
      postCategory->
    }`);
    let PROJECT_BY_ID = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_BY_ID}`;

    const response = await axios.get(PROJECT_BY_ID);
    const result = response.data.result[0];
    return result;
  }

  static async getCategories() {
    let QUERY_CATS = encodeURIComponent(`*[_type == 'posts'] {
      postCategory->
    }`);
    let PROJECT_CATS = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_CATS}`;

    const response = await axios.get(PROJECT_CATS);
    const result = response.data.result;
    return result;
  }

  static async getAbout() {
    let QUERY_ABOUT = encodeURIComponent('*[_type == "about"]');
    let PROJECT_ABOUT = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_ABOUT}`;

    const response = await axios.get(PROJECT_ABOUT);
    const result = response.data.result;
    return result;
  }
}
