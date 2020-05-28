import React from 'react'
import Counter from '@components/Counter'

// Just JavaScript™

let text = 'Helllooooo'

const Button = ({ children, icon, onFish }) => {
  return (
    <button onClick={onFish}>
      {icon} {children}
    </button>
  )
}

export default function PropsState() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

{
  /* <Button
        icon={'*'}
        onFish={() => {
          console.log('we clicked!')
        }}
      >
        Subtract <button>oh no</button>
      </Button>
      <Button>{['Add', '!!!']}</Button> */
}

// ;<Button>
//   {element} {element2}
// </Button>

// React.createElement(
//   Button,
//   null,
//   element,
//   element2
// )
// React.createElement(Button, {
//   children: [element, element2],
// })
