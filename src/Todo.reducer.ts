type State = {
  todos: string[]
  updateIndex: number
}
type Action =
  | { type: 'create'; payload: string }
  | { type: 'edit'; index: number }
  | { type: 'update'; payload: string }
  | { type: 'delete'; index: number }

export function init(): State {
  return {
    todos: ['Set up dev environment', 'Code the app', 'Deploy to Github Pages'],
    updateIndex: -1,
  }
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'create':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'edit':
      return {
        ...state,
        updateIndex: action.index,
      }
    case 'update':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, state.updateIndex),
          action.payload,
          ...state.todos.slice(state.updateIndex + 1),
        ],
        updateIndex: -1,
      }
    case 'delete':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1),
        ],
        updateIndex: -1,
      }
    default:
      throw new Error('undefined action')
  }
}