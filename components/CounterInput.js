import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(1)

  const handleAdd = () => setCount(count + 1)
  const handleSubtract = () => setCount(count - 1)

  return (
    <div className="counter">
      <button onClick={handleSubtract}>-</button>
      <input type="text" aria-label="count" defaultValue={count} />
      <button onClick={handleAdd}>+</button>
    </div>
  )
}
