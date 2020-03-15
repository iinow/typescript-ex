"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this._numberOfLegs = 8;
        this._name = theName;
    }
    Object.defineProperty(Octopus.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Octopus.prototype, "numberOfLegs", {
        get: function () {
            return this._numberOfLegs;
        },
        set: function (_numberOfLegs) {
            // this._numberOfLegs = _numberOfLegs
        },
        enumerable: true,
        configurable: true
    });
    Octopus.prototype.hello = function () {
        // name = 'd'
    };
    return Octopus;
}());
new Octopus('Hi').hello();
new Octopus('').name;
var dd = [11, 1, 2, 3, 4];
var a = dd[0], v = dd[2];
console.log(a, v);
// @ts-ignore
var d = { d: 'hi' }.d;
console.log(d);
var BaseAnimal = /** @class */ (function () {
    function BaseAnimal() {
    }
    return BaseAnimal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("makeSound");
    };
    return Dog;
}(BaseAnimal));
new Dog().makeSound();
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.namew = 'dfdf';
        this.namew = name;
    }
    Greeter.hello = function () {
        return this.path;
    };
    Greeter.path = 'hihihi';
    return Greeter;
}());
console.log(Greeter.path);
console.log(Greeter.hello());
var maker = Greeter;
console.log();
new maker('dfd');
