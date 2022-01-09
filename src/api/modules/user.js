import { request } from '../axios';
async function login(openId) {
  return request({
    url: '/portal/login',
    method: 'POST',
    params: { openId },
  });
}

async function register() {}

export default {
  login,
};
