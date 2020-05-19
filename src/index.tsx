import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'
import { firebaseConfig } from './api/config'

const app = (
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
)

// ReactDOM.render(app, document.getElementById('root'))
ReactDOM.unstable_createRoot(
  document.getElementById('root') as HTMLElement
).render(app)
