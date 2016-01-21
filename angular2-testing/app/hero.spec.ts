import { Hero } from './hero';

describe('Hero', function() {

  it('has name given in the constructor', function() {
    var hero = new Hero(1, 'Super Cat');
    expect(hero.name).toEqual('Super Cat');
  });
  
  it('has the id given in the constructor', function() {
    var hero = new Hero(1, 'Super Cat');
    expect(hero.id).toEqual(1);
  });
  
});
