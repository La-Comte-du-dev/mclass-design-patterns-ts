var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.mainAlgorithm = function () {
        this._baseOperation1();
        this.customOperation1();
        this._baseOperation2();
        this.customOperation2();
    };
    AbstractClass.prototype._baseOperation1 = function () {
        console.log("AbstraClass : i'm doing the big stuff");
    };
    AbstractClass.prototype._baseOperation2 = function () {
        console.log("AbstraClass : i'm doing the big stuff (2)");
    };
    return AbstractClass;
}());
var ConcreteClass1 = /** @class */ (function (_super) {
    __extends(ConcreteClass1, _super);
    function ConcreteClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass1.prototype.customOperation1 = function () {
        console.log("ConcreteClass1 : implemented operation1");
    };
    ConcreteClass1.prototype.customOperation2 = function () {
        console.log("ConcreteClass1 : implemented operation2");
    };
    return ConcreteClass1;
}(AbstractClass));
var ConcreteClass2 = /** @class */ (function (_super) {
    __extends(ConcreteClass2, _super);
    function ConcreteClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass2.prototype.customOperation1 = function () {
        console.log("ConcreteClass2 : implemented operation1");
    };
    ConcreteClass2.prototype.customOperation2 = function () {
        console.log("ConcreteClass2 : implemented operation2");
    };
    return ConcreteClass2;
}(AbstractClass));
var cc1 = new ConcreteClass1();
var cc2 = new ConcreteClass1();
cc1.mainAlgorithm();
cc2.mainAlgorithm();
