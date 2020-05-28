import { useState, useReducer } from 'react'

// Your task is to convert the useStates here into useReducer!

export default function Todo() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  const addItem = (thingToAdd) => {
    setItems(items.concat(thingToAdd))
  }

  const removeItem = (thingToRemove) => {
    setItems(
      items.filter((item) => {
        return item !== thingToRemove
      })
    )
  }

  return (
    <>
      <div className="todo">
        <h1>To Do List</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            addItem(newItem)
            setNewItem('')
          }}
        >
          <input
            type="text"
            value={newItem}
            onChange={(event) => {
              setNewItem(event.target.value)
            }}
          />
        </form>
        <ul>
          {items.map((item) => {
            return (
              <li>
                {item}{' '}
                <button
                  onClick={() => {
                    removeItem(item)
                  }}
                >
                  x
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        .todo {
          width: 100vw;
          height: 100vh;
          font-family: sans-serif;
          text-align: center;
        }

        .todo ul {
          padding: 0;
          list-style-type: none;
        }
      `}</style>
    </>
  )
}
