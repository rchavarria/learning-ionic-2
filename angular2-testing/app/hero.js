System.register([], function(exports_1) {
    var nextId, Hero;
    return {
        setters:[],
        execute: function() {
            nextId = 30;
            Hero = (function () {
                function Hero(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                    this.id = id || nextId++;
                }
                Hero.prototype.clone = function () { return Hero.clone(this); };
                Hero.clone = function (h) { return new Hero(h.id, h.name, h.alterEgo, h.power); };
                Hero.setNextId = function (next) { return nextId = next; };
                return Hero;
            })();
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map