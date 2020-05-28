import { useState } from 'react'
import DateFields from '@components/DatePicker.js'

export default function Dates() {
  const [startDate, setStartDate] = useState(new Date('May 28, 2020'))
  return <DateFields value={startDate} onChange={setStartDate} start={2010} end={2020} />
}
