import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'
import { firebaseConfig } from './api/config'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
