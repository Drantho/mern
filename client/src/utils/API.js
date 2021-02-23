import axios from "axios";

const url = "http://localhost:3001";

export default {
    
  getQuestionById: id => {
    console.log(`${url}/api/question?id=${id}`);
    return axios.get(`${url}/api/question?id=${id}`);
  },
  getQuestionByUser: id => {
    console.log(`${url}/api/question?userId=${id}`);
    return axios.get(`${url}/api/question?userId=${id}`);
  },
  getQuestionsByTagName: tagName => {
    console.log(`${url}/api/question?tag=${tagName}`);
    return axios.get(`${url}/api/question?tag=${tagName}`);
  },
  getQuestionsBySearch: search => {
    console.log(`${url}/api/question?search=${search}`);
    return axios.get(`${url}/api/question?search=${search}`);
  },
  getAllQuestions: () => {
    console.log(`${url}/api/question`);
    return axios.get(`${url}/api/question`);
  },
  createQuestion: data => {
    console.log(`${url}/api/question`);
    return axios.post(`${url}/api/question`, data);
  },
  createTag: data => {
    console.log((`${url}/api/tag/`));
    console.log(data);
    return axios.post(`${url}/api/tag/`, data)
  },
  linkTagToQuestion: data => {
    console.log((`${url}/api/tag/question/`));
    console.log(data);
    return axios.put(`${url}/api/tag/question/`, data)
  },
  getAllTags: () => {
    console.log((`${url}/api/tag/`));
    return axios.get(`${url}/api/tag/`)
  },
<<<<<<< HEAD
  getServicesByUser: id =>{
    console.log((`${url}/api/service?user=${id}`));
    return axios.get(`${url}/api/service?user=${id}`)
  },
  createService: data => {
    console.log((`${url}/api/service/`));
    console.log(data);
    return axios.post(`${url}/api/service/`, data)
  },
  linkServiceToTag: data => {
    console.log((`${url}/api/tag/service/`));
    console.log(data);
    return axios.put(`${url}/api/tag/service/`, data)
=======
  getTagById: id => {
    console.log(`${url}/api/tag?id=${id}`);
    return axios.get(`${url}/api/tag?id=${id}`);
  },
  getTagBySearch: search => {
    console.log(`${url}/api/tag?search=${search}`);
    return axios.get(`${url}/api/tag?search=${search}`);
>>>>>>> 5c94f9ea5bf032d5cacfa4541dbb718dd61319fb
  }
};
