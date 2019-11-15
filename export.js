function send() { //私有方法,不导出只在内部调用
  console.log('send')
}

class ZXL {
  constructor(age, name) {
    this.age = age
    this.name = name
    this.code = () => {
      send()
    }
  }
  // skill = ['js', 'css', 'node']
  // static see = 'so easy'
  static fn() {
    console.log('static')
  }
}

// es5
module.exports = ZXL; 
// node环境可以测--> import.js

// es6
//    export {
//      ZXL
//    }
//    or
//    export default ZXL

// export(可导出多次)
// 导出后默认包裹在modules对象内 其他js使用时:
// import * as [name] from [url]
// 例如 import * as zxl from './export.js'
//      const { ZXL } = zxl
//      let getIt = new ZXL(...)

// export default(只能导出一次)
// 则接收 import [name] from [url]
// 例如 import ZXL from './export.js'
//      let getIt = new ZXL(...)

// 导出多个参数 export default {a,b,...}