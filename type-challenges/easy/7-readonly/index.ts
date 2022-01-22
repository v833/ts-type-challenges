interface Todo {
  title: string
  description: string
}

// const todo1: MyReadonly<Todo> = {
//   title: 'Hey',
//   description: 'foobar',
// }

// todo1.title = 'Hello' // Error: cannot reassign a readonly property
// todo1.description = 'barFoo' // Error: cannot reassign a readonly property

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
