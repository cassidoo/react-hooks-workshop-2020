import { useState } from 'react'

const CharacterLimitInput = ({ text, defaults }) => {
  const [message, setMessage] = useState('')
  const maxLength = 20

  return (
    <div
      className={`counterInput ${message.length > maxLength ? 'tooLong' : ''}`}
    >
      <div>
        {defaults.map((b) => {
          return (
            <button
              key={b}
              onClick={() => {
                setMessage(b)
              }}
            >
              {b}
            </button>
          )
        })}
      </div>
      <textarea
        placeholder={text}
        value={message}
        onChange={(event) => {
          setMessage(event.target.value)
        }}
      />
      <div>
        {message.length}/{maxLength}
      </div>
    </div>
  )
}

export default function MoodTracker() {
  let defaultMoods = ['Great', 'Okay', 'Bad']

  return (
    <section>
      <h2>Mood Tracker</h2>
      <CharacterLimitInput text={'How was your day?'} defaults={defaultMoods} />
      <style jsx global>{`
        section {
          font-family: 'Helvetica', 'Arial', sans-serif;
          line-height: 1.3;
          text-align: center;
        }

        input {
          margin: 5px 0;
          padding: 5px;
          min-width: 250px;
        }

        .counterInput button {
          margin: 5px;
          margin-left: 0;
          background: #41a5e1;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .counterInput.tooLong {
          color: red;
        }

        .counterInput.tooLong textarea {
          background: #eebbbb;
        }
      `}</style>
    </section>
  )
}
