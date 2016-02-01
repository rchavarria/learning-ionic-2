System.register(['../src/init-caps.pipe'], function(exports_1) {
    var init_caps_pipe_1;
    return {
        setters:[
            function (init_caps_pipe_1_1) {
                init_caps_pipe_1 = init_caps_pipe_1_1;
            }],
        execute: function() {
            describe('InitCapsPipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new init_caps_pipe_1.InitCapsPipe();
                });
                it('capitalizes the first letter of a word', function () {
                    expect(pipe.transform('abc')).toEqual('Abc');
                });
                it('capitalizes the first letter of all words', function () {
                    expect(pipe.transform('abc def')).toEqual('Abc Def');
                });
                it('leaves unchanged already capitalized words', function () {
                    expect(pipe.transform('Abc Def')).toEqual('Abc Def');
                });
            });
        }
    }
});
//# sourceMappingURL=init-caps.pipe.spec.js.map