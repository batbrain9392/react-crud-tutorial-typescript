import { useFirestore } from 'reactfire'
import { firestore } from 'firebase'
import { dbTimestamps, jsTimestamps } from 'types'

export const useServerTimestamp = () => {
  const serverTimestamp = useFirestore.FieldValue.serverTimestamp()
  return serverTimestamp
}

export const useConvertTimestampToDate = () => {
  const { Timestamp } = useFirestore
  const convertTimestampToDate = (timestamp: firestore.Timestamp) => {
    return new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate()
  }
  return convertTimestampToDate
}

export const useProcessTimestamp = <
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
