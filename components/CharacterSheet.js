import { useState } from 'react'
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

export default function App() {
  let [darkMode, setDarkMode] = useState(false)
  let [name, setName] = useState('')
  let [background, setBackground] = useState('')
  let [error, setError] = useState(null)

  function handleBackgroundSelect(event) {
    let value = event.target.value
    setBackground(value)
    if (!backgrounds.includes(value)) {
      setError('This background does NOT exist.')
    } else {
      setError(null)
    }
  }

  return (
    <>
      <div className={`App ${darkMode ? 'darkmode' : ''}`}>
        <button
          onClick={() => {
            setDarkMode(!darkMode)
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
            setName(event.target.value)
            if (event.target.value.length > 15) {
              setError('Name is WAY too long, bucko.')
            }
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
                setError(null)
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
