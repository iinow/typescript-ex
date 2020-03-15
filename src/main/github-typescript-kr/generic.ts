function identity<T, R>(arg: T): T {
  if (typeof arg == 'number') {
    // arg.length
  }
  return arg
}

console.log(identity(111))

class Person<T> {
  tt: T
}

let myIdentity: <T>(arg: T) => T = identity
let myIdentity2: { <T>(arg: T): T } = identity

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  return arg
}

function create<T>(c: { new (): T }): T {
  return new c()
}

create<Person<number>>(Person).tt

class BeeKeeper {
  hasMask: boolean
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag