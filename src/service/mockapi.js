import axios from 'axios'

axios.defaults.baseURL = 'https://643feefa3dee5b763e29f717.mockapi.io'
const params = {
    l: 3,
  };

export async function fetchUsers(page) {
  const {data} = await axios.get('/test-task-app', {
    params: { ...params, page },
  });
  return data;
};

export async function updateFollowers(userId, updatedUser) {
    const {data} = await axios.put(`/test-task-app/${userId}`, updatedUser);
    return data;
};

// export async function 