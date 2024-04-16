import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 初始化拦截器
    this.interceptors()
  }

  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // 配置拦截器
  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  // 配置请求拦截器
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    )
  }

  // 配置响应拦截器
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    )
  }
}