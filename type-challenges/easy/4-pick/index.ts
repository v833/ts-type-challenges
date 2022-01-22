/* 
Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T
*/
interface Todo {
  title: string
  description: string
  completed: boolean
}
// 联合类型 union
// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// }
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
// js 实现
// function myPick(T, K) {
//   const obj = {}
//   K.forEach((key) => {
//     if (key in T) obj[key] = T[key]
//   })
//   return obj
// }
