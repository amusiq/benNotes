# React

> Ben 第一次接触的前端框架。

## Hooks

- 使用 Hooks 原因：Hooks 是 react 16.8 引入的特性，他允许你在不写 class 的情况下操作 state 和 react 的其他特性。hooks 只是多了一种写组件的方法，使编写一个组件更简单更方便，同时可以自定义 hook 把公共的逻辑提取出来，让逻辑在多个组件之间共享。

基本用法：

```jsx
import React, { useState } from 'react';

export default function() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
```

### State hook

::: tip
state hook 的主要作用就是获取需要的 state 和 更新 state 的方法
:::

使用方法：

```jsx
const [state, setState] = useState(initialState);
```

参数： initialState 可以直接是当前 state 的初始值，也可以是一个函数，函数的返回值将作为 state 的值，参数只会在组件的初始渲染中起作用

返回值：返回的是一个数组，一个是当前 state 的值，另一个是更新 state 的方法，这里面 setState 方法与 class 中的 setState 不同在于，此 setState 不会合并 state 中的值

如果需要定义多个 state 只需要多次调用 useState 方法就行。
