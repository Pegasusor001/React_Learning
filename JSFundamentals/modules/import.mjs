// 动态导入
let dir = "./export.js"
console.log(await import(dir))

// 静态导入
import {name} from "./export.js"
console.log(name)
