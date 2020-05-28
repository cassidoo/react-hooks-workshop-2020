import React, { useContext, createContext } from 'react'

// Right now in the file 4-date-picker.js, we call these components with:
// <DateFields
//   value={...}
//   start={...}
//   end={...}
//   onSelect={...}
// />

// We want to change it to:
// <DateFields value={startDate} onChange={setStartDate}>
//  <MonthField aria-label="Start Month" />
//  <DayField aria-label="Start Day" />
//  <YearField start={2018} end={2019} aria-label="Start year" />
// </DateFields>

// The tasks:
// 1) Edit 4-date-picker.js to stop rendering the individual components
// in DateFields and render children instead
// 2) Provide Context in DateFields
// 3) Use the Context in MonthField, DayField, and YearField.

export default function DateFields({ start, end, value, onChange }) {
  return (
    <div>
      <MonthField date={value} onChange={onChange} />/
      <DayField date={value} onChange={onChange} />/
      <YearField date={value} onChange={onChange} start={start} end={end} />
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
  const { date, onChange } = props
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
  const { date, onChange } = props
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
  const { date, onChange, start, end } = props
  const years = Array.from({ length: end - start + 1 }).map(
    (_, index) => index + start
  )
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
