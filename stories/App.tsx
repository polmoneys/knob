import { Fragment, useState } from 'react'
import Knobs, { Demo } from './story/Knobs'
import Aside from './story/Aside'
import './App.css'

function App(): JSX.Element {
  const [demo, setDemo] = useState<Demo>('default')

  const updateDemo = (next: Demo) => {
    if (demo !== next) setDemo(next)
  }
  console.log({ demo })

  return (
    <Fragment>
      <header>
        <a href="https://github.com/polmoneys" target="_blank" rel="noopener">
          <svg width="73" height="72" viewBox="0 0 73 72">
            <path
              fill="currentColor"
              d="M36 0C16.119 0 0 16.12 0 36c0 15.905 10.315 29.402 24.621 34.16 1.799.334 2.379-.78 2.379-1.73v-6.703c-10.014 2.18-12.1-4.245-12.1-4.245-1.635-4.163-3.996-5.27-3.996-5.27-3.266-2.233.246-2.19.246-2.19 3.616.256 5.52 3.712 5.52 3.712 3.21 5.502 8.42 3.912 10.476 2.992.323-2.327 1.254-3.914 2.286-4.814-7.999-.908-16.401-3.996-16.401-17.792 0-3.931 1.406-7.142 3.71-9.662-.376-.908-1.607-4.57.345-9.527 0 0 3.023-.967 9.902 3.691 2.874-.797 5.953-1.198 9.012-1.213 3.059.015 6.143.416 9.017 1.213 6.874-4.658 9.891-3.691 9.891-3.691 1.96 4.957.727 8.619.355 9.527 2.308 2.52 3.706 5.73 3.706 9.662 0 13.828-8.423 16.872-16.439 17.763 1.29 1.116 2.47 3.31 2.47 6.668v9.879c0 .958.577 2.08 2.402 1.728C61.7 65.391 72 51.902 72 36 72 16.12 55.88 0 36 0z"
            ></path>
          </svg>
        </a>
      </header>
      <main>
        <Knobs
          name={demo}
          {...(demo !== 'tiny' && { width: '200px' })}
          {...(demo === 'pull-line' && { grrr: true })}
        />
      </main>
      <Aside onSelect={updateDemo} active={demo} />
    </Fragment>
  )
}

export default App
