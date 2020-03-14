class Octopus {
  private readonly _name: string
  readonly _numberOfLegs: number = 8

  get name(): string {
    return this._name
  }

  get numberOfLegs(): number {
    return this._numberOfLegs
  }

  set numberOfLegs(_numberOfLegs: number) {
    // this._numberOfLegs = _numberOfLegs
  }

  constructor(theName: string) {
    this._name = theName
  }

  hello() {
    // name = 'd'
  }
}

new Octopus('Hi').hello()

new Octopus('').name

const dd = [11, 1, 2, 3, 4]
const [a, , v] = dd

console.log(a, v)

// @ts-ignore
const { d } = { d: 'hi' }

console.log(d)

abstract class Animal {
  abstract makeSound(): void
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`makeSound`)
  }
}

new Dog().makeSound()

class Greeter {
  static path = 'hihihi'
  public namew: string = 'dfdf'

  constructor(name: string) {
    this.namew = name
  }

  public static hello() {
    return this.path
  }
}

console.log(Greeter.path)
console.log(Greeter.hello())

let maker: typeof Greeter = Greeter
console.log()
new maker('dfd')
