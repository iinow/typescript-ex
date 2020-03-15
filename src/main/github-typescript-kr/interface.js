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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log("\uBC84\uD2BC \uC120\uD0DD");
    };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () {
        console.log("\uD14D\uC2A4\uD2B8 \uBC15\uC2A4 \uC120\uD0DD");
    };
    return TextBox;
}(Control));
var Image1 = /** @class */ (function () {
    function Image1() {
    }
    Image1.prototype.select = function () {
        console.log("\uC774\uBBF8\uC9C0 \uC120\uD0DD");
    };
    return Image1;
}());
new Button().select();
new TextBox().select();
new Image1().select();
