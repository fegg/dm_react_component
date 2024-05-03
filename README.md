# React Component

主要是一些条件、分支、Portal 等组件封装，参考 Solid。

### For

```jsx
<For each={[1, 2, 3]}>
  {(item, index) => `${index}: ${item}`}
</For>
```

### Show

```jsx
<Show when={ true }>
  <p>Hello World</p>
</Show>
```

### Switch

```jsx
<Switch>
  <Match when={ false }>
    <p>Hello World</p>
  </Match>
  <Match when={ true }>
    <p>Hello Real World</p>
  </Match>
</Switch>
```


### Match (alias If)

> If 是 Match 的别名，更形象一些写逻辑的时候。

```jsx
<Match when={ true }>
  <p>Hello World</p>
</Match>
<If when={ false }>
  <p>Goodbye World</p>
</If>
```

### Portal

```jsx
<Portal>
  <p>Hello document.body</p>
</Portal>

<Portal container={document.getElementById('test')}>
  <p>Hello #test</p>
</Portal>
```
