<!--
 * @Author: 张泽全 hengwujun128@gmail.com
 * @Date: 2023-11-20 20:55:53
 * @LastEditors: 张泽全 hengwujun128@gmail.com
 * @LastEditTime: 2025-05-20 19:16:32
 * @Description: 
 * @FilePath: /my-uni-vue3-ts-vite-project/src/pages/axios/index.vue
-->
<template>
  <view class="axios-demo">
    <view class="title-h1">Axios Page</view>
    <input type="number" v-model="phone" />
    <button @click="getCode">获取验证码(GET)</button>
  </view>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { userApi } from '@/api'

  const phone = ref('12345678901')

  const getCode = () => {
    userApi
      .getCode(phone.value)
      .then((v) => {
        uni.showToast({
          title: `${v.num}`,
          icon: 'success'
        })
      })
      .catch((err) => {
        console.log(err)
        uni.showToast({
          title: '获取验证码失败',
          icon: 'error'
        })
      })
  }
</script>

<style lang="less" scoped>
  .axios-demo {
    text-align: center;
  }
  .title-h1 {
    font-size: 50rpx;
  }
</style>
