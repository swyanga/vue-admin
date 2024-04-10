// test.ts
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: '后盾人',
        },
      }
    },
  },
] as MockMethod[]