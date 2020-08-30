import { createStore } from "redux";
import riduce from '../../src';

describe("leaf.create.set(path, value): returns an action that, when dispatched, updates the leaf's state at an auto-generated key (that orders chronologically after previous keys) with value", () => {
  interface State {
    foo: { [key: string]: string },
    bar: { [key: string]: { id: string, text: string } }
  }

  const initialState: State = {
    foo: {},
    bar: {}
  }

  const [reducer, actions] = riduce(initialState)
  const store = createStore(reducer)

  test("Passing a value", () => {
    const pushedSetInFoo = actions.foo.create.pushedSet
    store.dispatch(pushedSetInFoo('my first item'))
    store.dispatch(pushedSetInFoo('my second item'))
    expect(Object.values(store.getState().foo)).toEqual(['my first item', 'my second item'])
  })

  test("Passing a callback", () => {
    const pushedSetInBar = actions.bar.create.pushedSet
    store.dispatch(pushedSetInBar((key: string) => ({ id: key, text: 'my first item' })))
    const barState = store.getState().bar
    expect(Object.values(barState)[0]).toStrictEqual({
      id: Object.keys(barState)[0],
      text: 'my first item'
    })
    // expect(Object.values(barState)[0]).toHaveProperty('id', Object.keys(barState)[0])
    // expect(Object.values(barState)[0]).toHaveProperty('text', 'my first item')
  })
})