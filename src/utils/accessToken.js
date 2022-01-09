import { TOKEN_NAME } from '../static/constant.js';

/*请求那一部分待重写，可以统一使用localstorage去存取
 */
export function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function setToken(token) {
  return localStorage.setItem(TOKEN_NAME, token);
}

export function removeToken() {
  return localStorage.removeItem(TOKEN_NAME);
}
