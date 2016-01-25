System.register(['../src/hello'], function(exports_1) {
    var hello_1;
    return {
        setters:[
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }],
        execute: function() {
            describe('Hello', function () {
                it('says hello', function () {
                    var saying = new hello_1.Hello().say();
                    expect(saying).toEqual('Hello');
                });
            });
        }
    }
});
//# sourceMappingURL=hello.spec.js.map