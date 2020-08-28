import { drop, defaultTo } from 'ramda';
import { isDropAction, isArrayConcatAction } from './array-types'
import { LeafStandardAction } from "../types"
import universalLeafReducer from '../universal/universalLeafReducer';

function arrayLeafReducer<L extends Array<E>, T, A extends LeafStandardAction, E = unknown>(leafState: L, treeState: T, action: A, originalState: T): L {
  
  if (isDropAction(action)) {
    return drop(defaultTo(1, action.payload), leafState) as L
  }

  if (isArrayConcatAction<L>(action)) {
    return [...leafState, ...action.payload] as L
  }

  return universalLeafReducer(leafState, treeState, action, originalState)
}

export default arrayLeafReducer