import { LSAwP, LSA } from "../types";

export enum ObjectCreatorKeys {
  ASSIGN = 'ASSIGN',
  PATH = 'PATH',
  PUSHED_SET = 'PUSHED_SET',
  SET = 'SET'
}

export type ObjectCreators<
  LeafT extends {} = {},
  TtreeT = unknown
> = {
  assign(props: Partial<LeafT>): LSAwP<LeafT>,
  path<V = unknown>(route: (string|number)[], value: V): LSAwP<{ path: (string|number)[], value: V }>,
  pushedSet: PushedSet<LeafT>,
  set<KeyT extends keyof LeafT>(key: KeyT, value: LeafT[KeyT]): LSAwP<{ key: KeyT, value: LeafT[KeyT] }>
}

type PushedSet<L> = (arg: L[keyof L] | PushedSetCallback<L>) => LSAwP<L[keyof L] | PushedSetCallback<L>>

type PushedSetCallback<L> = (id: string) => L[keyof L]
type PushedSetWithValue<L> = (val: L[keyof L]) => LSAwP<L[keyof L]>
type PushedSetWithCallback<L> = (cb: PushedSetCallback<L>) => LSAwP<PushedSetCallback<L>>

export type ObjectActions<
  KeyT extends keyof ObjectCreators,
  LeafT = unknown,
  TreeT = unknown
> = ReturnType<ObjectCreators<LeafT, TreeT>[KeyT]>

export function isAssignAction<L>(action: LSA): action is ObjectActions<'assign', L> {
  return action.leaf.CREATOR_KEY === ObjectCreatorKeys.ASSIGN
}

export function isPathAction<L>(action: LSA): action is ObjectActions<'path', L> {
  return action.leaf.CREATOR_KEY === ObjectCreatorKeys.PATH
}

export function isPushedSetAction<L>(action: LSA): action is ObjectActions<'pushedSet', L> {
  return action.leaf.CREATOR_KEY === ObjectCreatorKeys.PUSHED_SET
}

export function isPushedSetValueAction<L>(action: LSA): action is ReturnType<PushedSetWithValue<L>> {
  return isPushedSetAction(action)
    && typeof action.payload !== 'function'
}

export function isPushedSetCallbackAction<L>(action: LSA): action is ReturnType<PushedSetWithCallback<L>> {
  return isPushedSetAction(action)
    && typeof action.payload === 'function'
}

export function isSetAction<L>(action: LSA): action is ObjectActions<'set', L> {
  return action.leaf.CREATOR_KEY === ObjectCreatorKeys.SET
}