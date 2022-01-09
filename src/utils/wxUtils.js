import { md5 } from './md5.js';

export async function getOpenId() {
  return new Promise((resolve) => {
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: (res) => {
        // console.log(res);
        let md5_openId = md5(res.result.userInfo.openId);
        // console.log("md5加密过的openid" + md5_openId)
        resolve(md5_openId);
        // resolve('7815696ecbf1c96e6894b779456d330e')
      },
    });
  });
}

//获取用户信息
export async function getUserInfo() {
  return new Promise((resolve) => {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success({ userInfo }) {
        // console.log(userInfo)
        resolve(userInfo);
      },
    });
  });
}
