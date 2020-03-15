interface Named {
  name: string
}

class Person0 {
  name: string
}

let p: Named

let y = { name: 'Alice', location: 'Seattle' }
p = y

Object.keys(p).forEach((value, index) => {
  console.log(value, index)
})

let xx = (a: number) => 0
let yy = (b: number, s: string) => 0
yy = xx

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  callback(args)
}

invokeLater([1, 2, 3], (x, y?) => console.log(`${x} ${y}`))

enum Status {
  Ready,
  Waiting
}
enum Color {
  Red,
  Blue,
  Green
}

let status1 = Status.Ready
status1 = 2

class TAnimal {
  feet: number
  constructor(name: string, numFeet: number) {}
}

class TSize {
  feet: number
  constructor(numFeet: number) {}
}

let aa: TAnimal = new TAnimal("", 1)
let ss: TSize = new TSize(1)

aa = ss
ss = aa

console.log(aa)
console.log(ss)