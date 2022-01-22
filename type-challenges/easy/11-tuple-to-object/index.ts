// 完整的对象键只能是string、number、symbol
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// keyof array 得到索引
type result = TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
