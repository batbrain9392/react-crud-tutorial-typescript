import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { Todo, dbTimestamps, TodoRaw, jsTimestamps } from '../interfaces/Todo'
import { firestore } from 'firebase/app'

const useTodosCollection = () => {
  const collectionRef = useFirestore().collection('todos')
  return collectionRef
}

const useServerTimestamp = () => {
  const serverTimestamp = useFirestore.FieldValue.serverTimestamp()
  return serverTimestamp
}

const useConvertTimestampToDate = () => {
  const { Timestamp } = useFirestore
  const convertTimestampToDate = (timestamp: firestore.Timestamp) => {
    return new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate()
  }
  return convertTimestampToDate
}

const useProcessTimestamp = <
  T extends Partial<dbTimestamps>,
  U extends Pick<T, Exclude<keyof T, 'createdAt' | 'updatedAt'>> &
    Partial<jsTimestamps>
>() => {
  const convertTimestampToDate = useConvertTimestampToDate()
  const processTimestamp = ({ createdAt, updatedAt, ...rest }: T) => {
    let processedItem = {
      ...rest,
      createdAt: createdAt && convertTimestampToDate(createdAt),
      updatedAt: updatedAt && convertTimestampToDate(updatedAt),
    }
    return processedItem as U
  }
  return processTimestamp
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
