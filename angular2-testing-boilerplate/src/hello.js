System.register([], function(exports_1) {
    var Hello;
    return {
        setters:[],
        execute: function() {
            Hello = (function () {
                function Hello() {
                }
                Hello.prototype.say = function () {
                    return 'Hello';
                };
                return Hello;
            })();
            exports_1("Hello", Hello);
        }
    }
});
//# sourceMappingURL=hello.js.map