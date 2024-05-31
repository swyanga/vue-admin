export interface IData {
  expire: number,
  [key: string]: any
}

export default {
  /**
   * @param key 存储数据时使用的键，为字符串类型
   * @param data 存储的数据，数据类型为IData
   */
  set(key: string, data: IData): void {
    if (data.expire) {
      data.expire = Date.now() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): IData | null {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      const expire = data?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return data;
    }
    return null;
  }
}