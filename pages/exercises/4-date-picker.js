import { useState } from 'react'
import DateFields, {
  MonthField,
  DayField,
  YearField,
} from '@components/DatePicker.final.js'

export default function Dates() {
  const [startDate, setStartDate] = useState(
    new Date('May 28, 2020')
  )
  return (
    <DateFields
      value={startDate}
      onChange={setStartDate}
    >
      <DayField aria-label="Start Day" />
      <MonthField aria-label="Start Month" />
      <YearField
        start={2018}
        end={2020}
        aria-label="Start year"
      />
    </DateFields>
  )
}
