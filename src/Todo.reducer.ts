type State = {
  input: string
  todos: string[]
  updateIndex: number
}
type Action =
  | { type: 'input'; payload: string }
  | { type: 'create'; payload: string }
  | { type: 'updateStart'; index: number }
  | { type: 'update'; payload: string }
  | { type: 'delete'; index: number }

export function init(): State {
  return {
    input: '',
    todos: ['Set up dev environment', 'Code the app', 'Deploy to Github Pages'],
    updateIndex: -1,
  }
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.payload,
      }
    case 'create':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        input: '',
      }
    case 'updateStart':
      return {
        ...state,
        updateIndex: action.index,
        input: state.todos[action.index],
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
        input: '',
      }
    case 'delete':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1),
        ],
      }
    default:
      throw new Error('undefined action')
  }
}
