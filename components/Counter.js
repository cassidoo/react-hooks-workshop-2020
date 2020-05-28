import { useState } from 'react'

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState(null)

  const add = () => {
    setCount(count + 1)
    setError(false)
  }

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <Button onClick={subtract}>Subtract</Button>
      Let's count: {count}
      <Button onClick={add}>Add</Button>
      {error && (
        <div style={{ color: 'red' }}>
          ERROR: Value should be positive
        </div>
      )}
    </div>
  )
}

// I AM REACT

// let el = Counter()
// let domTable = {}
// createDOM(el, domTable)

// let oldEl = el

// el = Counter() // new state
// diff(oldEl, el)

// commit(diff)

///////
