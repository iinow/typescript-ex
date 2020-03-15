"use strict";
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // 좋아요
    }
    name = name || 'Bob';
    return postfix('great');
}
console.log(fixed(null));
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
var people;
// @ts-ignore
var dd = people.name;
console.log(dd);
