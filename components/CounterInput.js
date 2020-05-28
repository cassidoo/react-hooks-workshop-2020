import { useState } from 'react'

// Event => update DOM

// Event + Event + Event => state => update DOM

export default function Counter() {
  const [count, setCount] = useState(1)

  const handleAdd = () => setCount(count + 1)
  const handleSubtract = () => setCount(count - 1)

  return (
    <div className="counter">
      <button onClick={handleSubtract}>-</button>
      <input
        type="number"
        aria-label="count"
        value={count}
        onChange={(event) => {
          setCount(parseInt(event.target.value))
        }}
      />
      <button onClick={handleAdd}>+</button>
    </div>
  )
}
