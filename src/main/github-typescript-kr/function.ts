let myAdd: (x: number, y: number) => number = (
  x: number,
  y: number
): number => {
  return x + y
}

console.log(myAdd(1, 2))

function buildName(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'Mackinzie')

console.log(employeeName)
;(function call(value: number) {
  console.log('Hello?', value)
})(1)

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

console.log(deck.createCardPicker()().suit)
console.log(deck.createCardPicker()().card)

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  info: string
  onClickBad(this: Handler, e: Event) {
    this.info = (e.composed as unknown) as string
  }
}

let h = new Handler()

let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x: any): any {
  // 객체 / 배열로 작업하고 있는지 확인해보세요
  // 그렇다면 그것들은 덱을 주고 사용자는 카드를 선택할 것입니다.
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  // 그렇지 않으면 카드를 선택하게하세요.
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)

pickCard(1).card
