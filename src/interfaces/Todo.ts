import { firestore } from 'firebase/app'

export type dbTimestamps = {
  createdAt: firestore.Timestamp
  updatedAt: firestore.Timestamp
}

export type jsTimestamps = {
  createdAt: Date
  updatedAt: Date
}

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
