var Player = /** @class */ (function () {
    function Player(health, speed) {
        this.health = health;
        this.speed = speed;
    }
    Player.prototype.stats = function () {
        console.log("Mario has ".concat(this.health, " health & ").concat(this.speed, " speed"));
    };
    Object.defineProperty(Player.prototype, "setHealth", {
        set: function (health) {
            this.health = health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "getHealth", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var Mario = new Player(10, 20);
console.log(Mario.getHealth);
