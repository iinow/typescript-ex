function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet // 좋아요
  }
  name = name || 'Bob'
  return postfix('great')
}

console.log(fixed(null))

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

type LinkedList<T> = T & { next: LinkedList<T> }

interface APerson {
  name: string
}

let people: LinkedList<APerson>
// @ts-ignore
// let dd = people.name
// console.log(dd)

type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface

// aliased({num: 1}).num

interface Mapa<T> {
  [key:string]: T
}

let maa: Mapa<number> = {
  "1" : 1,
  "2" : 2
}

let keys: keyof Mapa<number> = "fasf"
let value: Mapa<number>['foo'] = 24

console.log(keys, value)

type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
}
type Partial1<T> = {
  [P in keyof T]?: T[P];
}

class PPPP {
  name: string
}

type ReadP = Readonly1<PPPP>

Symbol(1)