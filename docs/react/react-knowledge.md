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

注意：useState 只可以用在函数组件里。如果写在 Class 里会报错。

### Effect hook

::: tip
useEffect 方法是在每次渲染之后执行，可以理解为 class 写法中的 componentDidMount / componentDidUpdate（为了方便理解可以这么理解，但不完全一样）
:::

使用方法：

```jsx
useEffect(didUpdate);
```

参数：function，在每次渲染之后执行，在函数里可以编写更新 dom ，添加订阅等。

参数返回值： function(可以不返回) 如果 didUpdate 函数中返回了一个函数，这个函数会在组件卸载前执行(每次渲染都会执行)需要清除上次订阅的内容可以再这里面写。

执行条件： useEffect 的第二个参数是一个数组，只有当数组中的的值发生改变的时候才会调用 effect，如果执行在第一次挂载和卸载的时候调用，只需要传一个[]空数组
