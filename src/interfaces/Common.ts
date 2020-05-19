import { firestore } from 'firebase/app'

export type dbTimestamps = {
  createdAt: firestore.Timestamp
  updatedAt: firestore.Timestamp
}

export type jsTimestamps = {
  createdAt: Date
  updatedAt: Date
}
