// mock 模拟后端返回数据
import { MockMethod } from 'vite-plugin-mock'
import mockjs from 'mockjs'
const { Random } = mockjs;

export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: "success",
        data: {
          name: '要是我',
          age: 18,
          avatar: '/avatar/1.png',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        type: "success",
        data: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]