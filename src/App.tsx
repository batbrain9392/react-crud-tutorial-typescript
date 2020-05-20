import React, { Suspense } from 'react'
import { Todos } from 'pages'
import { GithubRibbon } from 'components'

const App = () => (
  <>
    <GithubRibbon url='https://github.com/batbrain9392/react-crud-tutorial-typescript' />
    <Suspense fallback='loading...'>
      <Todos />
    </Suspense>
  </>
)

export default App
