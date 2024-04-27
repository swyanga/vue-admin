<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  account: '123',
  password: ''
})

</script>

<template>
  <div class="bg-slate-300 w-full h-screen flex justify-center items-start md:items-center p-5">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
        <div class="mt-8">
          <hdInput placeholder="请输入邮箱或手机号" v-model="form.account" />
          <hdInput placeholder="请输入登录密码" class="mt-5" />
        </div>
        <hdButton />
        <div class="flex gap-2 justify-center mt-5">
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