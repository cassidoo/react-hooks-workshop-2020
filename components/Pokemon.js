import { useState, useEffect } from 'react'

export default function Pokemon() {
  const [pokémon, setPokémon] = useState('pikachu')

  return (
    <>
      <div>
        <div>
          <input onChange={(e) => setPokémon(e.target.value)} defaultValue={pokémon} type="text" />
        </div>
        <span>Hello, {pokémon}!</span>
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
