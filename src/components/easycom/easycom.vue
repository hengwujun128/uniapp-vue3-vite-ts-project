<!--
 * @Author: 张泽全 hengwujun128@gmail.com
 * @Date: 2025-05-20 16:18:12
 * @LastEditors: 张泽全 hengwujun128@gmail.com
 * @LastEditTime: 2025-05-20 18:59:27
 * @Description: 
 * @FilePath: /my-uni-vue3-ts-vite-project/src/components/easycom/easycom.vue
-->
<template>
  <div class="example-component">
    <h1>{{ message }}</h1>

    <button @click="handleClick">easycom</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const message = ref('Hello, Vue!')

  function handleClick() {
    message.value = `Button Clicked! ${(Math.random() * 100).toFixed(2)}`
  }
</script>

<style scoped>
  .example-component {
    text-align: center;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }
</style>
