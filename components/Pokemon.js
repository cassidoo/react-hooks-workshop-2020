import { useState, useEffect } from 'react'

let z = 10
function add(x, y) {
  z = z + x
  return x + y
}

function useDocumentTitle(message) {
  useEffect(() => {
    document.title = message
  }, [message]) // is state, uses state, changes state
}

export default function Pokemon() {
  const [pokémon, setPokémon] = useState(
    'pikachu'
  )
  const [img, setImg] = useState(null)
  const [error, setError] = useState(null)

  let message = (
    'Saying hi to ' + pokémon
  ).substr(0, 30)

  useDocumentTitle(message)

  // [] => effect is called on initial render only
  // [variable] => effect is called on initial render +
  //               when variable changes
  // no array => effect is called on render and every state change

  useEffect(() => {
    let isCurrent = true
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokémon}/`
    )
      .then((res) => res.json())
      .then((res) => {
        if (isCurrent)
          setImg(res.sprites.front_default)
      })
      .catch((emAll) => {
        if (isCurrent) setError(emAll)
      })
    return () => {
      isCurrent = false
    }
  }, [pokémon])

  return (
    <>
      <div className="pokemon">
        <div>
          <input
            onChange={(e) =>
              setPokémon(e.target.value)
            }
            defaultValue={pokémon}
            type="text"
          />
        </div>
        <span>Hello, {pokémon}!</span>
        {img !== null && (
          <img src={img} alt={pokémon} />
        )}
      </div>

      <style jsx>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 20px;
          }

          .pokemon {
            position: relative;
            margin: 20px auto;
            width: 400px;
            height: 400px;
            border: 10px solid #282828;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
          }

          .pokemon div {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            background: #d5615e;
            height: 50%;
          }
          .pokemon input {
            margin: auto;
            padding: 5px;
            display: block;
            border: 3px solid #282828;
            border-radius: 10px;
            font-size: 20px;
          }
          .pokemon input:focus {
            outline: 3px dashed #282828;
          }

          .pokemon span {
            text-transform: capitalize;
          }

          .pokemon img {
            margin: auto;
            display: block;
          }
        `}
      </style>
    </>
  )
}
