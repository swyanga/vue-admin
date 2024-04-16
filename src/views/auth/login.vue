<script lang="ts" setup>
import hdInput from '@/components/form/hd-input.vue';
import hdButton from '@/components/form/hd-button.vue';
import hdLink from '@/components/form/hd-link.vue';
</script>

<template>
  <div class="bg-slate-300 w-full h-screen flex justify-center items-start md:items-center p-5">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
        <div class="mt-8">
          <!-- <input type="text" placeholder="请输入手机号或邮箱" class="hd-input">
          <input type="text" placeholder="请输入手机号或邮箱" class="hd-input mt-3"> -->
          <hdInput />
          <hdInput class="mt-5" />
          <hdButton />
        </div>

        <div class="flex gap-2 justify-center mt-5">
          <!-- <a href="" class="text-xs text-gray-700">网站首页</a> -->
          <hdLink />
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-80 w-full object-cover">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>