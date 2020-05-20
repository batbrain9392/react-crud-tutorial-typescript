import React, { Suspense } from 'react'
import { Todos } from 'pages'

const githubRibbon = (
  <a
    className='github-fork-ribbon'
    href='https://github.com/batbrain9392/react-crud-tutorial-typescript'
    data-ribbon='GitHub'
    title='GitHub'
    target='_blank'
    rel='noreferrer noopener'>
    GitHub
  </a>
)

function App() {
  return (
    <>
      {githubRibbon}
      <Suspense fallback={'loading...'}>
        <Todos />
      </Suspense>
    </>
  )
}

export default App
