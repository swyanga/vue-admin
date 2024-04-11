<script setup lang="ts">
import { env } from './types/helper'

// console.log(import.meta.env.VITE_ROUTE_AUTOLOAD);
console.log(env);
</script>

<template>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <ul>
    <li class="bg-red-700">首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view />
</template>

<style scoped></style>
