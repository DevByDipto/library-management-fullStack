import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counter/counterSlice'
import type { RootState } from './redux/store'

function App() {
  
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div> */}
     <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}

export default App
