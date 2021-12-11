import React from 'react'
import { useState } from 'react'
import Navigation from './components/nav.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex">
      <Navigation/>
    </div>
  )
}

export default App
