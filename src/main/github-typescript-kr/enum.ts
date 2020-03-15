enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'Right'
}

enum YesNo {
  Yes,
  No
}

enum LangType {
  ANDROID = 0xa12,
  IOS = 0xa13,
  ALL = ANDROID | IOS
}

LangType.ANDROID.valueOf()
LangType.ALL.valueOf()

let sdd = YesNo[1]

enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle
  radius: number
}

interface Square {
  kind: ShapeKind.Square
  sideLength: number
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 1
}

enum E {
  X,
  Y,
  Z
}

function f(obj: { X: number }) {
  return obj.X
}

f(E)

const enum Enum {
    A = 1,
    B= 2
}

declare enum Enum1 {
    A = 1,
    B
}

enum Eum2 {
    A = 1,
    B = 2
}