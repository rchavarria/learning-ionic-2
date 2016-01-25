System.register(['./hero'], function(exports_1) {
    var hero_1;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            describe('Hero', function () {
                it('has name given in the constructor', function () {
                    var hero = new hero_1.Hero(1, 'Super Cat');
                    expect(hero.name).toEqual('Super Cat');
                });
                it('has the id given in the constructor', function () {
                    var hero = new hero_1.Hero(1, 'Super Cat');
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map