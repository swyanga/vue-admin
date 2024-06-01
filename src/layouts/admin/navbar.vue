<script lang="ts" setup>

</script>

<template>
  <div class="bg-white shadow-sm p-4 flex justify-between items-center">
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 右侧用户头像 -->
    <div class="flex justify-center items-center relative group cursor-pointer">
      <img src="/images/xj.jpg" class="w-8 h-8 rounded-full object-cover">
      <span class="ml-2 text-sm font-bold text-gray-600">炒米粉要微微辣</span>
      <section
        class="group-hover:block absolute top-full bg-white shadow-sm px-5 border rounded-md whitespace-nowrap hidden">
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fa fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">网站首页</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fa fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer py-3">
          <a class="fa fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">会员中心</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>