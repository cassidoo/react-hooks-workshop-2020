import { useState, useReducer } from 'react'
import friendlyWords from 'friendly-words'

let array = [1, 2, 3, 4, 5]
let add = (x, y) => x + y
let sum = array.reduce(add, 0)

// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5

let initialState = { count: 0, cake: true }
let actions = [
  { type: 'ADD', by: 2 },
  { type: 'MINUS', by: 4 },
  { type: 'EAT_CAKE' },
]

function reducer(state, action) {
  if (action.type === 'ADD') {
    return {
      ...state,
      count: state.count + action.by,
    }
  } else if (action.type === 'MINUS') {
    return {
      ...state,
      count: state.count - action.by,
    }
  } else if (action.type === 'EAT_CAKE') {
    return { ...state, cake: false }
  }
  return state
}

console.log(actions.reduce(reducer, initialState))

let backgrounds = [
  'Noble',
  'Urchin',
  'Folk Hero',
  'Acolyte',
  'Criminal',
  'Hermit',
  'Guild Artisan',
  'Sage',
]

function randomBackground() {
  return backgrounds[
    Math.floor(Math.random() * backgrounds.length)
  ]
}

function randomName() {
  let array = friendlyWords.predicates
  let string =
    array[
      Math.floor(Math.random() * array.length)
    ]
  return (
    string.charAt(0).toUpperCase() +
    string.slice(1)
  )
}

function useMyState(initialValue) {
  let [state, dispatch] = useReducer(
    (state, action) => state,
    initialValue
  )
  return [state, dispatch]
}

function useCharacterReducer() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'BACKGROUND_SELECTED': {
          return {
            ...state,
            background: action.value,
          }
        }
        case 'BG_NOT_EXIST': {
          return {
            ...state,
            error: 'Background does not exist',
          }
        }
        case 'NO_ERRORS': {
          return { ...state, error: null }
        }
        case 'LONG_NAME': {
          return {
            ...state,
            error: 'Name is WAY too long, bucko.',
          }
        }
        case 'TOGGLE_DARK_MODE': {
          return {
            ...state,
            darkMode: !state.darkMode,
          }
        }
        case 'SET_NAME': {
          return { ...state, name: action.name }
        }
        case 'RANDOMIZE': {
          return {
            ...state,
            name: randomName(),
            background: randomBackground(),
          }
        }
      }
    },
    {
      darkMode: false,
      name: '',
      background: '',
      error: null,
    }
  )

  return [state, dispatch]
}

export default function App() {
  let [state, dispatch] = useCharacterReducer()

  let {
    darkMode,
    name,
    background,
    error,
  } = state

  // let [darkMode, setDarkMode] = useState(false)
  // let [name, setName] = useState('')
  // let [background, setBackground] = useState('')
  // let [error, setError] = useState(null)

  function handleBackgroundSelect(event) {
    let value = event.target.value
    dispatch({
      type: 'BACKGROUND_SELECTED',
      value,
    })
    // setBackground(value)
    if (!backgrounds.includes(value)) {
      dispatch({ type: 'BG_NOT_EXIST' })
      // setError('This background does NOT exist.')
    } else {
      dispatch({ type: 'NO_ERRORS' })
      // setError(null)
    }
  }

  return (
    <>
      <div
        className={`App ${
          darkMode ? 'darkmode' : ''
        }`}
      >
        <button
          onClick={() => {
            dispatch({ type: 'TOGGLE_DARK_MODE' })
            // setDarkMode(!darkMode)
          }}
        >
          Dark Mode {darkMode ? 'ON' : 'OFF'}
        </button>{' '}
        <br />
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(event) => {
            dispatch({
              type: 'SET_NAME',
              name: event.target.value,
            })
            // setName(event.target.value)
            if (event.target.value.length > 15) {
              dispatch({ type: 'LONG_NAME' })
              // setError(
              //   'Name is WAY too long, bucko.'
              // )
            }
          }}
        />
        <select
          value={background}
          onChange={handleBackgroundSelect}
        >
          {backgrounds.map((b) => {
            return (
              <option key={`bg-${b}`}>{b}</option>
            )
          })}
        </select>
        {error && (
          <div className="error">
            {error}
            <button
              onClick={() => {
                dispatch({ type: 'NO_ERRORS' })
              }}
            >
              Dismiss
            </button>
          </div>
        )}
        <div className="sheet">
          <h2>Name: {name}</h2>
          <h2>Background: {background}</h2>
        </div>
        <button
          onClick={() => {
            dispatch({ type: 'RANDOMIZE' })
            setName(randomName())
            setBackground(randomBackground())
          }}
        >
          Do it all for me instead
        </button>
      </div>
      <style jsx>{`
        .App {
          width: 100vw;
          height: 100vh;
          font-family: sans-serif;
          text-align: center;
        }

        .App.darkmode {
          background: black;
          color: white;
        }

        button,
        input,
        select {
          margin: 10px;
          padding: 5px;
          background: white;
          border: 3px solid black;
          color: black;
          font-size: 20px;
        }

        input {
          width: 250px;
        }

        .darkmode button,
        .darkmode input,
        .darkmode select {
          background: black;
          border: 3px solid white;
          color: white;
        }

        .error {
          color: red;
        }

        .sheet {
          margin: 5px auto;
          max-width: 400px;
          text-align: left;
        }

        [data-reach-combobox-popover] {
          font-family: sans-serif;
        }

        .darkmode[data-reach-combobox-popover] {
          background: black;
          color: white;
        }

        [data-reach-combobox-option]:hover {
          background: red;
        }
      `}</style>
    </>
  )
}
