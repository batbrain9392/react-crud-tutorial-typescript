import React from 'react'
import './index.css'

interface Props {
  url: string
}

const GithubRibbon = (props: Props) => {
  return (
    <a
      className='github-fork-ribbon'
      href={props.url}
      data-ribbon='GitHub'
      title='GitHub'
      target='_blank'
      rel='noreferrer noopener'>
      GitHub
    </a>
  )
}

export default GithubRibbon
