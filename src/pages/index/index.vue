<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <button @click="login">登陆</button>
    </view>
  </view>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { getOpenId } from '../../utils/wxUtils';

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      console.log('111');
      // console.log(store.getters.getUserInfo)
      wx.cloud.init();
    });
    async function login() {
      console.log('登陆开始');
      let openId = await getOpenId();
      let a = store.dispatch({
        type: 'login',
        openId,
      });
    }
    return {
      title: 'hello',
      login,
    };
  },
};
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
