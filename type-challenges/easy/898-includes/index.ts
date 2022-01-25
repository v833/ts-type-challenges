/* 

Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

For example*/
// import { Equal, Expect } from '@type-challenges/utils'

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type IsEqual<F, U> = (<T>() => T extends F ? true : false) extends <T>() => T extends U
  ? true
  : false
  ? true
  : false
type Includes<T extends readonly any[], U> = T extends [infer R, ...infer args]
  ? IsEqual<R, U> extends true
    ? true
    : Includes<args, U>
  : false
// // 将元组转换一个value为true的对象
// type Includes<T extends any[], U> = {
//   [K in T[number]]: true
// }[U] extends true
//   ? true
//   : false
