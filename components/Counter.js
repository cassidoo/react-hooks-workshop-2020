import { useState } from 'react'

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default function Counter() {
  let count = 0

  return <div>Let's count: {count} </div>
}
