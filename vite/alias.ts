import path from "path"
import { AliasOptions } from 'vite'

// 定义alias对象，用于存储路径
const alias = {
	// @ 映射到当前项目的 src 目录
	'@': path.resolve(__dirname, '../src')
} as AliasOptions

export default alias