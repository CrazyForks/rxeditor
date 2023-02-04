import { IConfigMeta, IReactionMeta } from "./metas"

export type Unsubscribe = () => void

export type InputHandler = (inputValue?: any) => void

export interface IJointer {
  id: string,
  name?: string,
  push: InputHandler,
  connect: (jointer: IJointer | InputHandler) => void
  disconnect: (jointer: IJointer | InputHandler) => void
}


export interface IReaction {
  id: string
  inputs: IJointer[]
  outputs: IJointer[]
}
export type Reactions = {
  [id: string]: IReaction | undefined
}

export type VariableListener = (value: any) => void
export type PropsListener = (name: string, value: any) => void
export type UnListener = () => void

export type InputFunc = (inputValue?: any) => void
export type EventFuncs = {
  [name: string]: InputFunc | undefined
}

export interface IComponentController {
  id: string,
  name?: string,

  events: EventFuncs,
  initEvent?: InputFunc,
  destoryEvent?: InputFunc,
  reactions: Reactions,
  setVariable(name: string, value: any): void,
  subcribeToVariableChange(name: string, listener: VariableListener): UnListener
  subscribeToPropsChange(listener: PropsListener): UnListener
}

export type ComponentControllers = {
  [id: string]: IComponentController | undefined
}

export type ReactionFactory = (meta: IReactionMeta<IConfigMeta>, context: any) => IReaction
