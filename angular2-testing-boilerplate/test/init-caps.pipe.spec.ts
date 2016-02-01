import { InitCapsPipe } from '../src/init-caps.pipe';

describe('InitCapsPipe', () => {
  let pipe:InitCapsPipe;

  beforeEach(() => {
    pipe = new InitCapsPipe();
  });

  it('capitalizes the first letter of a word', () => {
    expect(pipe.transform('abc')).toEqual('Abc');
  });

  it('capitalizes the first letter of all words', () => {
    expect(pipe.transform('abc def')).toEqual('Abc Def');
  });

  it('leaves unchanged already capitalized words', () => {
    expect(pipe.transform('Abc Def')).toEqual('Abc Def');
  });

});
