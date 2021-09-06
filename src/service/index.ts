import axios from 'axios' // Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
import querystring from 'querystring' // ?
import apis from './config'
import { IApi } from '../types';

const TIMEOUT = 5000

const modifyParams = (method: string, data: any, baseInfo: any) => {
  return new Promise(resolve => {
    const param = { ...data, ...baseInfo }
    const isGet = method.toUpperCase() === 'GET'
    const key = isGet ? 'params' : 'data'
    const value = isGet ? param : querystring.stringify(param)

    resolve({ [key]: value })
  })
}

export default function fetchAPI (api: IApi, body: any) {
  return modifyParams(api.method, body, {}).then((params: any) => axios.request({
    url: api.url,
    method: api.method,
    timeout: TIMEOUT,
    ...params
  }))
}

export { apis }
