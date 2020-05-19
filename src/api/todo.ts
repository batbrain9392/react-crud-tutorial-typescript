import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { useProcessTimestamp, useServerTimestamp } from './helper'
import { Todo, TodoRaw } from 'interfaces'

const useTodosCollection = () => {
  const collectionRef = useFirestore().collection('todos')
  return collectionRef
}

export const useReadTodos = () => {
  const collectionQuery = useTodosCollection().orderBy('createdAt')
  const todosRaw = useFirestoreCollectionData<TodoRaw>(collectionQuery, {
    idField: 'id',
  })
  const processedTodo = useProcessTimestamp<TodoRaw, Todo>()
  const todos = todosRaw.map(processedTodo)
  return todos
}

export const useCreateTodo = () => {
  const collectionRef = useTodosCollection()
  const createdAt = useServerTimestamp()
  const createTodo = async (name: Todo['name']) => {
    const { id } = await collectionRef.add({ name, createdAt })
    return id
  }
  return createTodo
}

export const useUpdateTodo = () => {
  const collectionRef = useTodosCollection()
  const updatedAt = useServerTimestamp()
  const updateTodo = (id: string, { createdAt, ...todo }: Partial<Todo>) => {
    const docRef = collectionRef.doc(id)
    return docRef.update({ ...todo, updatedAt })
  }
  return updateTodo
}

export const useDeleteTodo = () => {
  const collectionRef = useTodosCollection()
  const deleteTodo = (id: Todo['id']) => {
    const docRef = collectionRef.doc(id)
    return docRef.delete()
  }
  return deleteTodo
}
