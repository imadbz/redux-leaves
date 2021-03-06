import reduxLeaves from '../../src';

const initialState = {
  bool: false,
  num: 2,
  str: 'foo',
  arr: [1, 2, 3],
  obj: { num: 5, names: [['a', 'e'], ['b, c']]}
}

const [_, actions] = reduxLeaves(initialState)

// @dts-jest:group Incrememnt default creator
{
  // @dts-jest:pass exists on boolean state
  actions.bool.create.on

  // @dts-jest:fail does not exist on number state
  actions.num.create.on

  // @dts-jest:pass does not need an argument
  actions.bool.create.on()

  // @dts-jest:fail rejects arguments
  actions.num.create.on(true)
}