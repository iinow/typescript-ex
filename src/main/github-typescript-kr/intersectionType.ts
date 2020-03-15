function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    ;(<any>result)[id] = (<any>first)[id]
  }

  for (let id in second) {
    // @ts-ignore
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = (<any>second)[id]
    }
  }

  return result
}

class IPerson {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log(): void {
    console.log('write log')
  }
}

let jim = extend(new IPerson('Jim'), new ConsoleLogger())
let n = jim.name
jim.log()

interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

function getSmallPet(): Fish | Bird {
  const n = Math.floor(Math.random())
  if (n % 2 == 0) {
    let b: Bird = {
      fly(): void {},
      layEggs(): void {}
    }
    return b
  } else {
    let c: Fish = {
      swim(): void {},
      layEggs(): void {}
    }
    return c
  }
}

let pet = getSmallPet()

// 타입 가드와 차별된 타입
// @ts-ignore
if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}
function isFish(pet: any): any
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ')
  }

  test() {

  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder(' ')
}

let padder: Padder = getRandomPadder()

if (padder instanceof SpaceRepeatingPadder) {
    padder.test()
}