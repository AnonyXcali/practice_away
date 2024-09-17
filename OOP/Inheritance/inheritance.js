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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("I am eating");
    };
    Animal.prototype.sleep = function () {
        console.log("I am sleeping");
    };
    Animal.prototype.move = function () {
        console.log("I am moving");
    };
    Animal.prototype.makeNoise = function () {
        console.log("I am making noise");
    };
    Object.defineProperty(Animal.prototype, "setCoordX", {
        set: function (x) {
            this.coordX = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setCoordY", {
        set: function (y) {
            this.coordY = y;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("I'm barking!");
    };
    Dog.prototype.returnToOwner = function () {
        console.log("I'm a ".concat(this.coordX, ", ").concat(this.coordY));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var dog = new Dog();
dog.makeNoise();
dog.setCoordX = 10;
dog.setCoordY = 20;
dog.returnToOwner();
