<!-- filepath: /src/pages/login/index.vue -->
<template>
  <view class="login-page">
    <button type="primary" @click="wxLogin">微信一键登录</button>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const wxLogin = () => {
    // #ifdef MP-WEIXIN
    uni.login({
      provider: 'weixin',
      success: (res) => {
        // res.code 就是微信登录凭证
        // 发送到后端换取 openid/session_key/token
        uni.request({
          url: 'https://你的后端接口地址/api/wx-login',
          method: 'POST',
          data: { code: res.code },
          success: (resp) => {
            // 登录成功，保存 token
            uni.setStorageSync('token', resp.data.token)
            uni.showToast({ title: '登录成功' })
            // 跳转首页或其他页面
            uni.switchTab({ url: '/pages/index/index' })
          }
        })
      },
      fail: () => {
        uni.showToast({ title: '登录失败', icon: 'none' })
      }
    })
    // #endif
  }
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
