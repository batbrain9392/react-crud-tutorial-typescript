import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from 'firebaseConfig'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from 'App'

const app = (
  <React.StrictMode>
    <CssBaseline />
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
)

ReactDOM.unstable_createRoot(
  document.getElementById('root') as HTMLElement
).render(app)
