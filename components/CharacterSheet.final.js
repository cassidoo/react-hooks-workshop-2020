import { useState, useReducer } from 'react'
import friendlyWords from 'friendly-words'

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
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

function randomName() {
  let array = friendlyWords.predicates
  let string = array[Math.floor(Math.random() * array.length)]
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function useMyReducer() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'TOGGLE_DARK_MODE': {
          return {
            ...state,
            darkMode: !state.darkMode,
          }
        }
        case 'BG_SELECT': {
          return {
            ...state,
            background: action.value,
            error: !backgrounds.includes(action.value)
              ? 'This background does NOT exist.'
              : null,
          }
        }
        case 'NAME_CHARACTER': {
          return {
            ...state,
            name: action.name,
            error:
              action.name.length > 15
                ? 'That name is way too long, bucko'
                : null,
          }
        }
        case 'RANDOM_VALUES': {
          return {
            ...state,
            name: randomName(),
            background: randomBackground(),
          }
        }
        case 'DISMISS_ERROR': {
          return { ...state, error: null }
        }
        default: {
          return state
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
  let [{ darkMode, name, background, error }, dispatch] = useMyReducer()

  function handleBackgroundSelect(event) {
    dispatch({ type: 'BG_SELECT', value: event.target.value })
  }

  return (
    <>
      <div className={`App ${darkMode ? 'darkmode' : ''}`}>
        <button
          onClick={() => {
            dispatch({ type: 'TOGGLE_DARK_MODE' })
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
              type: 'NAME_CHARACTER',
              name: event.target.value,
            })
          }}
        />
        <select value={background} onChange={handleBackgroundSelect}>
          {backgrounds.map((b) => {
            return <option key={`bg-${b}`}>{b}</option>
          })}
        </select>
        {error && (
          <div className="error">
            {error}
            <button
              onClick={() => {
                dispatch({ type: 'DISMISS_ERROR' })
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
            dispatch({ type: 'RANDOM_VALUES' })
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
