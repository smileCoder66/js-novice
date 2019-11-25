/*
  js-esay.
*/

/* 1.
  let const 块级作用域不会提升
  const 常量 let 变量
*/
console.log(_var); //1 变量提升
var _var = 1;

console.log(a) //a is not define
let a = 1

const b = 2
b = 3 //error

//2. 箭头函数 
const arrowFn1 = () => {
  //this指向当前函数本身,不受影响
}
const arrowFn2 = (arr) => {
  return arr
}
//一个参数可省略(),且单行return时{}可省略(多了其他不可省略)
const arrowFn3 = arr => arr
const arrowFn4 = (num1, num2) => num1 + num2
console.log(arrowFn4(1, 2)); //3
//如果返回对象,则外加()
const arrowFn5 = (num1, num2) => ({
  num1: num1,
  num2: num2
})

//3. 模板字符串：  `` 遇到变量： ${变量}
let str = 'is father'
let str1 = 'zxl' + str + 'yes'
let str2 = `zxl${str}yes${str1},ok`

//4. 解构
let arr = [4, 2, 32]
let obj = {
  d: 1,
  e: 2,
  f: 3
}
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
let [a, b, c] = arr
// var d = obj[d]

//所有的变量赋值--
//设置的变量名:拿obj解构的值
let {
  d: d,
  e: e,
  f: f
} = obj
//当属性名==变量名时 等同于->
let {
  d,
  e,
  f
} = obj

//5.设置默认值
const ary = ["zxl", 18]
let [name, age] = ary
let [name1, age1 = 25] = ['zxl']
console.log(name, age) //zxl 18
console.log(name1, age1) //zxl 25

//同理在方法内接收参数时
const getMsg = (num = 1) => {
  console.log(num)
}

//6.对象函数
const objHasFn = {
  talk: function () {

  },
  talk1: () => {

  },
  talk2() {

  }
}

//7.arguments:JS的一个内置对象,类似数组除了length属性和索引元素之外没有任何Array属性
function arg() {
  console.log(arguments)
}
arg(1, 2, 3) // [1,2,3,callee]

const argArrow = () => {
  console.log(arguments)
  //拿不到值,箭头函数不绑定Arguments对象
}

//8.展开运算符... (先了解浅拷贝与深拷贝-引用赋值的影响)
const arys = ["zxl", 18]
let open = [...arys] //等同于Array.from(arys)
console.log(open) //["zxl", 18]
open = [...open, 1]
console.log(open) //["zxl", 18,1]
open = [...arys, ...open] //展开赋值的顺序位置
console.log(open) //["zxl", 18, "zxl", 18, 1]

//同样 对象内
const objs = {
  a: 1,
  b: 2,
  c: ['e', 'f']
}
let opens = {
  ...objs
}
console.log(opens) //{a:1,b:2,c:['e','f']}

//解构+展开...
let [e, f] = [...objs.c]
console.log(e, f) //e,f

//再来
let {
  x,
  y,
  ...z
} = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};
//z == {a:3,b:4}

//9.模块(modules)
/*
ES5
  导出module.exports
  导入require
ES6
  export
  import
  ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，
  以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。
*/

//10.面向对象class类/extends继承(可先了解普通构造函数)
/*
  1.class内 this 永不指向window
  2.static 静态属性&方法:可直接访问
  3.实例属性:需要实例化后才能访问
  4.私有方法:export不导出的方法,只能在当前js内部调用,具体看export.js
  5.super
*/
class ZXL {
  constructor(age, name) {
    //定义实例属性
    this.age = age
    this.name = name
    this.code = () => { //实例方法
      console.log('coding...');
    }
  }
  skill = ['js', 'css', 'node'] //实例属性
  static see = 'so easy' //静态属性
  static fn() { //静态方法
    console.log('static');
  }
}

console.log(ZXL.see) //so easy
console.log(ZXL.skill) //undefined
let zxls = new ZXL(25, 'zxl')
console.log(zxls) // {age:25,name:'zxl',skill,code}
// 实例化后无静态属性see 及 方法fn

//继承
class JJG extends ZXL {
  //子类如果这里不写constructor 默认为空
  constructor(sb) {
    super(sb, sb)
    //super调用父类ZXL构造函数(constructor)并传参
  }
  //写在constructor外部的方法
  //相当于es5的写法放在prototype上: JJG.prototype.getName = ...
  getName() {
    console.log(this.name, this.age)
  }
}

let jjg = new JJG(250)
console.log(jjg) //{age:250,name:250,skill...,code...}
jjg.getName() //250,250
//getName在prototype上


// 11.Object.assign(target, ...sources)
  let obs = {
    a: 1,
    b: 2
  }
  let newOb = Object.assign(obs, {
    b: 4,
    c: 5
  })
  let newOb1 = {
    ...obs,
    ...{
      b: 4,
      c: 5
    }
  }
  console.log(newOb) //{a:1,b:4,c:5} 
  //有则替换,无则添加 展开运算符同样可以->

// 12.Array.from()
  //类数组转为数组
  let set = new Set([1, 2, 3, 4]) //object
  let cArr = Array.from(set) //array

// 13.遍历
  //Array.map ->返回一个新数组 内部每次循环都会返回值到函数体内部
  let arr = [1, 2, 3, 4]
  let arr1 = arr.map((item, index) => {
    if (item == 3) {
      return 'hasVal'
    }
  })
  console.log(arr1) //[undefined,undefined,'hasVal',undefined]
  //默认每次return undefined

  //利用此返回特性 -- 比如编写jsx时-->
  // {
  //   arr.map(item=><p>{item}</p>)
  // }
  // 能够比较方便得到循环生成的标签

// 14.Array.prototype.includes,filter
//检测数组可替代indexOf 因为indexOf无法检测NaN
  [1, 2, NaN].includes(NaN) //返回boolean为true
  //filter 过滤返回数组
  let a = [1, 2, 3, 4, 5]
  let b = a.filter(item => item > 3)
  //b -> [4,5]

// 15.Object.values/Object.entries
  let obj = {
    a: 1,
    b: 2,
    c: 3
  }
  Object.values(obj).forEach(value => console.log(value)) //1 2 3
  //对比Object.keys() 返回对象自身可迭代属性的数组
  //用for...of
  for (let value of Object.values(obj)) {
    console.log(value) // 1 2 3
  }

  let b = Object.entries(obj) // 返回一个数组(以键值对数组存储)
  //b -> [['a',1],['b',2]...]
  //for of
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key},${value}`)
  }

// 17.promise async await
  /*
    Promise
    -- 异步处理 队列化
    三个状态 pending[待定]初始 fulfilled[实现]成功 rejected[被否决]失败
    从 Pending->fullilled || Pending->rejected 
    结束状态
  */
  let wait1 = new Promise(resolve => {
    setTimeout(() => {
      resolve('wait1')
    }, 2000);
  })

  let wait2 = wait1.then(res => {
    console.log(res) //两秒后拿到'wait1'
  })

  // async await
  // 异步代码同步化 解决回调地狱
    const get = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('abcd')
        }, 2000);
      })
    }

    async function getwait() {
      let data = await get('abcd')
      console.log(data)
    }

    getwait();

//try catch && then().catch()