import React, { Suspense } from 'react'
import { Todos } from 'pages'

function App() {
  return (
    <Suspense fallback={'loading...'}>
      <Todos />
    </Suspense>
  )
}

export default App
