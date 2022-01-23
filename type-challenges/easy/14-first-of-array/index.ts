type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [infer Head, ...unknown[]] ? Head : never
type First<T extends any[]> = T extends [infer Head, ...infer R] ? T[0] : never