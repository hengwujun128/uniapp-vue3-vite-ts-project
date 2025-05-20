<!--
 * @Author: 张泽全 hengwujun128@gmail.com
 * @Date: 2023-11-20 20:55:53
 * @LastEditors: 张泽全 hengwujun128@gmail.com
 * @LastEditTime: 2025-05-20 19:15:25
 * @Description: 
 * @FilePath: /my-uni-vue3-ts-vite-project/src/App.vue
-->

<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

  onLaunch(() => {
    console.log('App Launch')
  })
  onShow(() => {
    console.log('App Show')
  })
  onHide(() => {
    console.log('App Hide')
  })
</script>
<style lang="scss">
  @import 'vk-uview-ui/index.scss';
</style>
