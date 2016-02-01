import { Hello } from '../src/hello'

describe('Hello', () => {

  it('says hello', () => {
    const saying = new Hello().say()
    expect(saying).toEqual('Hello')
  })

})
