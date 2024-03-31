# 工具函数

在开发中，经常会将一些常用的代码块、功能块进行封装，为的是更好的复用。此文章收录一些常用的功能函数，之后遇到的也会加入进来

### 获取随机数

```js
/* 返回 [min, max) 间的随机整数 */
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)
```

示例：

```js
getRandom(0, 10) // 2
getRandom(0, 10) // 9
```

### 判断数据是否为空

如果该值是以下中的一个，即被判定为空：

- `null`
- `undefined`
- `NaN`
- `''`（空字符串）
- `[]`（长度为 0 的数组）
- `{}`（无属性的对象）

```js
/* 判断一个值是否为空 */
const isEmpty = value => {
  if (value === null || typeof value === 'undefined') {
    return true
  }
  if (typeof value === 'number' && isNaN(value)) {
    return true
  }
  if (typeof value === 'string' && value === '') {
    return true
  }
  if (Array.isArray(value) && value.length === 0) {
    return true
  }
  if (Object.prototype.toString.call(value) === '[object Object]' && Object.keys(value).length === 0) {
    return true
  }
  return false
}
```

另外，还可以提供一个判断数据是否不为空的函数：

```js
/* 判断一个值是否不为空 */
const isNotEmpty = value => !isEmpty(value)
```

### 深拷贝

使用递归引用数据类型完成深拷贝，该函数只能对数组和对象进行深拷贝，不能对如 Map、Set 等数据类型深拷贝，若要使用通用类型的深拷贝函数，可以采用 lodash 库的 [cloneDeep](https://www.lodashjs.com/docs/lodash.cloneDeep)

```js
/* 深拷贝 */
const deepClone = value => {
  if (value === null || typeof value !== 'object') {
    return value
  }
  let result = Array.isArray(value) ? [] : {}
  for (const key in value) {
    result[key] = deepClone(value[key])
  }
  return result
}
```

### 阻塞程序运行

```js
/* 阻止 JS 运行，默认 500 毫秒*/
const delay = (duration = 500) => {
  const start = Date.now()
  while (true) {
    const now = Date.now()
    if (now - start >= duration) {
      break
    }
  }
}
```

示例：

```js
console.log(1) // 输出 1
delay(2000)
console.log(2) // 两秒钟后，输出 2
```

### 异步等待一段时间

```js
const sleep = (duration = 500) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}
```

示例：

```js
async function foo() {
  await sleep(2000)
}
```

### 解析 URL 参数

```js
/* 解析 URL 参数 */
const parseQuery = (url = location.href) => {
  const index = url.indexOf('?')
  const result = {}
  if (index === -1) {
    return result
  }
  const arr = url.substring(index + 1).split('&')
  for (let i = 0; i < arr.length; i++) {
    const q = arr[i].split('=')
    result[q[0]] = q[1]
  }
  return result
}
```

示例：

```js
const url = 'http://localhost:7777/path?key1=value1&key2=value2'
const query = parseQuery(url)
console.log(query) // { key1: 'value1', key2: 'value2' }
```

### 防抖

防抖的核心思想是，在一连串触发事件后，只有当事件停止一段时间后，才执行相应的函数。常用于处理频繁触发的事件（例如窗口大小调整、搜索建议等）。

```js
const debounce = (fn, duration = 100) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, duration)
  }
}
```

使用示例：

```js
// 使用防抖
const debouncedFn = debounce(function () {
  // 这里放置你要执行的函数代码
}, 300) // 延迟300毫秒执行

// 绑定事件
element.addEventListener('input', debouncedFn)
```

### 节流

节流的核心思想是，无论事件触发多频繁，都只在固定时间间隔内执行一次函数。常用于需要限制函数执行速率的情况（例如滚动事件、按钮点击等）。

```js
const throttle = (fn, duration = 50) => {
  let isThrottled = false
  return function (...args) {
    if (!isThrottled) {
      fn.apply(this, args)
      isThrottled = true
      setTimeout(() => {
        isThrottled = false
      }, duration)
    }
  }
}
```

使用示例：

```js
// 使用节流
const throttledFn = throttle(function () {
  // 这里放置你要执行的函数代码
}, 300) // 间隔300毫秒执行一次

// 绑定事件
element.addEventListener('scroll', throttledFn)
```

### 提取对象指定属性

```js
const pick = (obj, ...props) => {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)))
}
```

示例

```js
const foo = { a: 1, b: 2, c: 3 }

pick(foo, 'a', 'b') // { a: 1, b: 2 }
pick(foo, 'a', 'c') // { a: 1, c: 3 }
```

### 模糊搜索

```js
/**
 * @param {Array} list 要模糊搜索的数组
 * @param {String} keyword 用户输入的关键字
 * @param {String} prop 根据此属性名模糊搜索
 * @returns {Array}
 */
const fuzzyQuery = (list, keyword, prop) => {
  const reg = new RegExp(keyword)
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][prop])) {
      arr.push(list[i])
    }
  }
  return arr
}
```

示例：

```js
const users = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
  { id: 4, name: '张三丰' },
]

console.log(fuzzyQuery(users, '张', 'name'))
// [ { id: 1, name: '张三' }, { id: 4, name: '张三丰' } ]
```

### 数组对象去重

```js
/**
 * @param {Array} arr 要去重的数组
 * @param {String} key 根据该属性去重
 * @returns {Array}
 */
const uniqueByProp = (arr = [], key = 'id') => {
  if (arr.length === 0) return
  let list = []
  const map = {}
  arr.forEach(item => {
    if (!map[item[key]]) {
      map[item[key]] = item
    }
  })
  list = Object.values(map)
  return list
}
```

示例：

```js
const users = [
  { name: '张三', age: 18 },
  { name: '张三', age: 19 },
  { name: '李四', age: 20 },
  { name: '李四', age: 21 },
  { name: '王五', age: 22 },
  { name: '王五', age: 23 },
]

const result = uniqueByProp(users, 'name')
console.log(result)
```

### 生成 UUID

```js
/**
 * @returns {String}
 */
const createUUID = () => {
  const temp_url = URL.createObjectURL(new Blob())
  const uuid = temp_url.toString()
  URL.revokeObjectURL(temp_url) //释放这个url
  return uuid.substring(uuid.lastIndexOf(':') + 1)
}
```

示例：

```js
const id = createUUID()
console.log(id) // 02ca0781-fdcf-4b86-b6e4-3e01adfbc978
```

### 滚动到指定元素位置

```js
const smoothScroll = element => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
  })
}
```

示例：

```js
smoothScroll('#container') // 平滑滚动至 #container 元素
```

### 按比率混合颜色

类似 `scss` 的 `mix` 函数。

```js
const blendColors = (color1, color2, ratio) => {
  ratio = Math.max(0, Math.min(1, ratio)) // Clamp ratio between 0 and 1
  const hex = c => {
    const hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }
  const r = Math.ceil(parseInt(color1.substring(1, 3), 16) * ratio + parseInt(color2.substring(1, 3), 16) * (1 - ratio))
  const g = Math.ceil(parseInt(color1.substring(3, 5), 16) * ratio + parseInt(color2.substring(3, 5), 16) * (1 - ratio))
  const b = Math.ceil(parseInt(color1.substring(5, 7), 16) * ratio + parseInt(color2.substring(5, 7), 16) * (1 - ratio))
  return `#${hex(r)}${hex(g)}${hex(b)}`
}
```

示例

```js
const color1 = '#FF0000' // Red
const color2 = '#0000FF' // Blue
const blendedColor = blendColors(color1, color2, 0.5) // Mix with a 50/50 ratio
console.log(blendedColor) // Output: "#800080" (Purple)
```