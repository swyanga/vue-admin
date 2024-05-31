<script lang="ts" setup>
import userApi from '@/apis/userApi';
import v from '@/plugins/validate'
import store from '@/utils/store';
import { useRouter } from 'vue-router';

const router = useRouter()

const { Form, Field, ErrorMessage } = v

const schema = {
  account: { required: true, regex: /^(?:\d{11}|[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ },
  password: { required: true, min: 3 }
}

const onSubmit = async (values: any) => {
  const { data: { token } } = await userApi.login(values)
  store.set('token', { expire: 10000, token })
  router.push({
    name: 'admin.home'
  })
}


</script>

<script lang="ts">
export default {
  route: {
    name: 'login'
  }
}
</script>

<template>
  <Form class @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
          <div class="mt-8 relative">
            <Field name="account" value="admin@houdunren.com" class="hd-input" label="账号" placeholder="请输入邮箱或手机号" />
            <div v-if="errors.account" class="hd-error">请输入正确的手机号或者邮箱</div>
            <Field name="password" value="admin888" class="hd-input mt-3" label="密码" placeholder="请输入密码"
              type="password" />
            <ErrorMessage name="password" as="div" class="hd-error" />
          </div>
          <hdButton class="w-full" />
          <div class="flex justify-center mt-3">
            <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
          </div>
        </div>

        <div class="flex gap-2 justify-center mt-5">
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover">
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 w-full h-screen flex justify-center items-start md:items-center p-5;
}

.password-toggle-btn {
  position: absolute;
  right: 10px;
  /* 调整按钮的位置 */
  top: 10px;
  /* 调整按钮的位置 */
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>