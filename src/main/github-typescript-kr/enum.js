"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var YesNo;
(function (YesNo) {
    YesNo[YesNo["Yes"] = 0] = "Yes";
    YesNo[YesNo["No"] = 1] = "No";
})(YesNo || (YesNo = {}));
var LangType;
(function (LangType) {
    LangType[LangType["ANDROID"] = 2578] = "ANDROID";
    LangType[LangType["IOS"] = 2579] = "IOS";
    LangType[LangType["ALL"] = 2579] = "ALL";
})(LangType || (LangType = {}));
LangType.ANDROID.valueOf();
LangType.ALL.valueOf();
var sdd = YesNo[1];
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 1
};
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
f(E);
var Eum2;
(function (Eum2) {
    Eum2[Eum2["A"] = 1] = "A";
    Eum2[Eum2["B"] = 2] = "B";
})(Eum2 || (Eum2 = {}));
