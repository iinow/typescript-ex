"use strict";
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(1, 2));
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(' ');
}
var employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'Mackinzie');
console.log(employeeName);
(function call(value) {
    console.log('Hello?', value);
})(1);
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
console.log(deck.createCardPicker()().suit);
console.log(deck.createCardPicker()().card);
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        this.info = e.composed;
    };
    return Handler;
}());
var h = new Handler();
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    // 객체 / 배열로 작업하고 있는지 확인해보세요
    // 그렇다면 그것들은 덱을 주고 사용자는 카드를 선택할 것입니다.
    if (typeof x == 'object') {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않으면 카드를 선택하게하세요.
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
pickCard(1).card;
