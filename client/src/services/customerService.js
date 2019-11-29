import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/customers`);
    return res.data || [];
  },
  addUser: async (data) => {
    let res = axios.post('/api/customers', data);
    return res.data || [];
  }
}
