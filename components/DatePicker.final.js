import React, { useContext, createContext } from 'react'

const DateFieldsContext = createContext()

export default function DateFields({ children, value, onChange }) {
  let date = value
  return (
    <div>
      <DateFieldsContext.Provider value={{ date, onChange }}>
        {children}
      </DateFieldsContext.Provider>
      <style jsx>{`
        div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #646f74;
        }
      `}</style>
    </div>
  )
}

export function DayField(props) {
  const { date, onChange } = useContext(DateFieldsContext)
  const value = date.getDate()
  const handleChange = (event) => {
    const newDate = new Date(date.getTime())
    newDate.setDate(parseInt(event.target.value))
    onChange(newDate)
  }

  return (
    <select value={value} onChange={handleChange}>
      {Array.from({ length: 31 }).map((_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  )
}

export function MonthField(props) {
  const { date, onChange } = useContext(DateFieldsContext)
  const month = date.getMonth()
  const handleChange = (event) => {
    const newDate = new Date(date.getTime())
    newDate.setMonth(parseInt(event.target.value))
    onChange(newDate)
  }

  return (
    <select value={month} onChange={handleChange}>
      {Array.from({ length: 12 }).map((_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  )
}

export function YearField(props) {
  const { date, onChange } = useContext(DateFieldsContext)
  const { start, end } = props
  const years = Array.from({
    length: end - start + 1,
  }).map((_, index) => index + start)
  const handleChange = (event) => {
    const newDate = new Date(date.getTime())
    newDate.setYear(parseInt(event.target.value), 1)
    onChange(newDate)
  }

  return (
    <select value={date.getFullYear()} onChange={handleChange}>
      {years.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  )
}
