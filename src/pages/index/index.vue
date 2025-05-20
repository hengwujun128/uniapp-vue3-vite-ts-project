<!--
 * @Author: 张泽全 hengwujun128@gmail.com
 * @Date: 2023-11-20 20:55:53
 * @LastEditors: 张泽全 hengwujun128@gmail.com
 * @LastEditTime: 2025-05-20 19:17:01
 * @Description: 
 * @FilePath: /my-uni-vue3-ts-vite-project/src/pages/index/index.vue
-->
<template>
  <view class="index-page">
    <Hello />

    <uni-section title="卡片+列表" type="line">
      <uni-card padding="0" spacing="0">
        <template v-slot:cover>
          <view class="custom-cover">
            <image class="cover-image" mode="aspectFill" :src="cover"> </image>
            <view class="cover-content">
              <text class="uni-subtitle uni-white">今日新闻热点</text>
            </view>
          </view>
        </template>
        <uni-list>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
        </uni-list>

        <view slot="actions" class="card-actions no-border">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>

    <easycom />
    <UnoCss />
    <text class="h2"> 查看其它页面示例↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{ v.title }}</navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import Hello from '@/components/hello/index.vue'
  import UnoCss from '@/components/unocss/index.vue'

  const cover = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
  const actionsClick = (text: string) => {
    uni.showToast({
      title: text,
      icon: 'none'
    })
  }

  const pages = reactive([
    {
      title: 'Pinia Demo',
      url: '/pages/pinia/index'
    },
    {
      title: 'Axios Demo',
      url: '/pages/axios/index'
    },
    {
      title: 'uView Demo',
      url: '/pages/uview/index'
    },
    {
      title: 'UnoCSS Demo',
      url: '/pages/unocss/index'
    }
  ])
</script>

<style lang="scss" scoped>
  .index-page {
    font-style: normal;
    text-align: center;
  }
  .h2 {
    color: green;
    font-size: 50rpx;
  }
  navigator {
    color: #1e80ff;
  }
  .container {
    overflow: hidden;
  }

  .custom-cover {
    flex: 1;
    flex-direction: row;
    position: relative;
  }

  .cover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    font-size: 14px;
    color: #fff;
  }

  .card-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 45px;
    border-top: 1px #eee solid;
  }
  .card-actions-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .card-actions-item-text {
    font-size: 12px;
    color: #666;
    margin-left: 5px;
  }
  .cover-image {
    flex: 1;
    height: 150px;
  }
  .no-border {
    border-width: 0;
  }
</style>
