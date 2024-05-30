<script setup lang="ts">

</script>

<template>
  <div class="admin w-screen h-screen flex">
    <!-- 左侧菜单 -->
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-300 flex items-center">
        <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
        <span class="text-md">晚八点直播</span>
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <dl>
          <dt>错误页面</dt>
          <dd>404错误</dd>
        </dl>
      </div>
    </div>
    <!-- 右侧区域 -->
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>

</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    },
  }
}
</script>