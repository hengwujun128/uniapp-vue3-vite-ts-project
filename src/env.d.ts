/*
 * @Author: 张泽全 hengwujun128@gmail.com
 * @Date: 2023-11-20 20:55:53
 * @LastEditors: 张泽全 hengwujun128@gmail.com
 * @LastEditTime: 2025-05-21 09:37:27
 * @Description:
 * @FilePath: /my-uni-vue3-ts-vite-project/src/env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vk-uview-ui'

interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_APP_AXIOS_BASE_URL: string
}
