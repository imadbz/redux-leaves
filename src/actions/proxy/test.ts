import util from 'util'
import ActionsProxy from "./";
import { createActionsProxy } from "./actionsProxy";

describe('createActionsProxy', () => {
  describe('GIVEN actions = createActionsProxy()', () => {
    const actions = createActionsProxy()

    it('THEN actions is a Proxy instance', () => {
      expect(util.types.isProxy(actions)).toBeTruthy()
    })

    describe('WHEN result = actions.test', () => {
      const result = actions.test

      it('THEN result is a Proxy instance', () => {
        expect(util.types.isProxy(result)).toBeTruthy()
      })

      it('AND result._path is equal to ["test"]', () => {
        expect(result._path).toEqual(['test'])
      })
    })

    describe('WHEN result = actions.test.arbitrarily.deep', () => {
      const result = actions.test.arbitrarily.deep

      it('THEN result is a Proxy instance', () => {
        expect(util.types.isProxy(result)).toBeTruthy()
      })

      it('AND result._path is equal to ["test", "arbitrarily", "deep"]', () => {
        expect(result._path).toEqual(["test", "arbitrarily", "deep"])
      })
    })
  })
})