import _ from 'lodash';
import { createStore } from "redux";
import reduxLeaves from '../..';

describe("API: reduxLeaves(initialState, [customLogic = {}])", () => {

  describe("Example 1: custom action creator with no arguments", () => {
    describe("GIVEN initialState and customLogic", () => {
      const initialState = {
        foo: 3,
        bar: 4
      }

      const customLogic = {
        square: leafState => leafState ** 2
      }

      describe("WHEN we pass initialState and customLogic to reduxLeaves", () => {
        const [reducer, actions] = reduxLeaves(initialState, customLogic)
        let store

        beforeEach(() => store = createStore(reducer))

        test("THEN store initialises with initialState", () => {
          expect(store.getState()).toEqual(initialState)
        })

        test("AND create.custom.square is defined for actions.foo and actions.bar", () => {
          expect(typeof actions.foo.create.custom.square).toBe("function")
          expect(typeof actions.bar.create.custom.square).toBe("function")
        })

        describe("AND we dispatch actions.foo.create.custom.square()", () => {
          beforeEach(() => {
            store.dispatch(actions.foo.create.custom.square())
          })

          test("THEN foo has squared, but not bar", () => {
            expect(store.getState()).toEqual({ foo: 9, bar: 4 })
          })

          describe("AND we dispatch actions.bar.create.custom.square()", () => {
            beforeEach(() => {
              store.dispatch(actions.bar.create.custom.square())
            })

            test("THEN bar has also squared now", () => {
              expect(store.getState()).toEqual({ foo: 9, bar: 16 })
            })
          })
        })
      })
    })
  })

  describe("Example 2: custom action creator with arguments", () => {
    describe("GIVEN initialState and customLogic", () => {
      const initialState = {
        foo: 2,
        bar: [2, 4, 6, 8, 10]
      }

      const customLogic = {
        exponentiate: (leafState, { payload }) => leafState ** payload,
        remove: (leafState, { payload }, wholeState) => leafState.filter(e => e != wholeState[payload])
      }

      describe("WHEN we pass initialState and customLogic to reduxLeaves", () => {
        const [reducer, actions] = reduxLeaves(initialState, customLogic)
        let store

        beforeEach(() => store = createStore(reducer))

        test("THEN store initialises with initialState", () => {
          expect(store.getState()).toEqual(initialState)
        })

        test("AND create.custom.exponentiate is defined for actions.foo", () => {
          expect(typeof actions.foo.create.custom.exponentiate).toBe("function")
        })

        test("AND create.custom is defined for actions.bar", () => {
          expect(typeof actions.bar.create.custom.remove).toBe("function")
        })

        describe("AND we pass arguments to custom.exponentiate before dispatching", () => {
          const expWithOneArg = actions.foo.create.custom.exponentiate(2)
          const expWithTwoArgs = actions.foo.create.custom.exponentiate(3, 4)

          beforeEach(() => {
            store.dispatch(expWithTwoArgs)
          })

          test("THEN custom.exponentiate sets payload to be the first argument", () => {
            expect(expWithOneArg.payload).toBe(2)
            expect(expWithTwoArgs.payload).toBe(3)
          })

          test("AND the store state updates as expected", () => {
            expect(store.getState()).toEqual({ ...initialState, foo: 8 })
          })

          describe("AND we pass an argument to custom.remove before dispatching", () => {
            const removeUsingFoo = actions.bar.create.custom.remove("foo")

            beforeEach(() => {
              store.dispatch(removeUsingFoo)
            })

            test("THEN custom.remove sets payload to be the first argument", () => {
              expect(removeUsingFoo.payload).toEqual("foo")
            })

            test("AND the store state updates as expected", () => {
              expect(store.getState()).toEqual({ foo: 8, bar: [2, 4, 6, 10] })
            })
          })
        })
      })
    })
  })
})