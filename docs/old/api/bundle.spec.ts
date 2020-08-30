import { createStore } from 'redux'
import riduce, { bundle } from '../../../src';

describe('bundle bundles together actions into a single one', () => {
  describe("Actions array, no type", () => {
    const initialState = {
      counter: 0,
      list: ['a']
    }

    const [reducer, actions] = riduce(initialState)
    const store = createStore(reducer)

    test('Group bundles actions together into a single update with default type provided', () => {
      const incrementAndPush = bundle([
        actions.counter.create.increment(),
        actions.list.create.push('b')
      ])

      expect(incrementAndPush.type).toBe('counter/INCREMENT; list/PUSH')

      store.dispatch(incrementAndPush)
      expect(store.getState()).toEqual({ counter: 1, list: ['a', 'b'] })
    })
  })

  describe("Actions array, type provided", () => {
    const initialState = {
      counter: 0,
      list: ['a']
    }

    const [reducer, actions] = riduce(initialState)
    const store = createStore(reducer)

    test('Returns an action of appropriate type and effect in reducer', () => {
      const incrementAndPush = bundle([
        actions.counter.create.increment(),
        actions.list.create.push('b')
      ], 'INCREMENT_AND_PUSH')

      expect(incrementAndPush.type).toBe('INCREMENT_AND_PUSH')
      expect(incrementAndPush.leaf.bundled).toEqual(['counter/INCREMENT', 'list/PUSH'])

      store.dispatch(incrementAndPush)
      expect(store.getState()).toEqual({ counter: 1, list: ['a', 'b'] })
    })
  })

  describe("Order matters", () => {
    const initialState = {
      counter: 0,
      list: [5]
    }

    const [reducer, actions] = riduce(initialState)
    const store = createStore(reducer)

    test('Processes actions in the order passed into the array', () => {
      const incrementThenPush = bundle([
        actions.counter.create.increment(),
        actions.list.create.do((leafState, treeState) => [...leafState, treeState.counter])
      ])

      const pushThenIncrement = bundle([
        actions.list.create.do((leafState, treeState) => [...leafState, treeState.counter]), actions.counter.create.increment()
      ])

      store.dispatch(incrementThenPush)
      expect(store.getState()).toEqual({ counter: 1, list: [5, 1] })

      store.dispatch(pushThenIncrement)
      expect(store.getState()).toEqual({ counter: 2, list: [5, 1, 1] })
    })
  })

  describe("Compound bundling", () => {
    const initialState = {
      counter: 0,
      list: ['a']
    }

    const [reducer, actions] = riduce(initialState)
    const store = createStore(reducer)

    test('Bundle bundles actions together into a single update', () => {
      const incrementAndPush = bundle([
        actions.counter.create.increment(),
        actions.list.create.push('b')
      ])

      const incrementAndPushAndIncrement = bundle([
        incrementAndPush,
        actions.counter.create.increment()
      ])

      store.dispatch(incrementAndPushAndIncrement)
      expect(store.getState()).toEqual({ counter: 2, list: ['a', 'b'] })
    })
  })
})