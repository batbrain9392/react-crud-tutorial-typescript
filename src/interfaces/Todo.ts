export type FirebaseTimestamp = {
  seconds: number
  nanoseconds: number
}

export type dbTimestamps = {
  createdAt: FirebaseTimestamp
  updatedAt: FirebaseTimestamp
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
