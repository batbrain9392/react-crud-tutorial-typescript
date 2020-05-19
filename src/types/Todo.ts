import { dbTimestamps, jsTimestamps } from './Common'

type TodoBasic = {
  id: string
  name: string
}

export type TodoRaw = TodoBasic & Partial<dbTimestamps>

export type Todo = Pick<
  TodoRaw,
  Exclude<keyof TodoRaw, 'createdAt' | 'updatedAt'>
> &
  Partial<jsTimestamps>
