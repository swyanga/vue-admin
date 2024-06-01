<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue';
</script>

<template>
  <div class="admin w-screen h-screen flex">
    <!-- 左侧菜单 -->
    <MenuComponent />
    <!-- 右侧区域 -->
    <div class="content flex-1 bg-gray-200">
      <!-- <el-button type="primary" /> -->
      <Navbar />
      <router-view />
    </div>
  </div>

</template>



<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    },
  }
}
</script>