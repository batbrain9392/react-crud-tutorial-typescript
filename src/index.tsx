import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'
import { firebaseConfig } from './firebaseConfig'

const app = (
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
)

ReactDOM.unstable_createRoot(
  document.getElementById('root') as HTMLElement
).render(app)
