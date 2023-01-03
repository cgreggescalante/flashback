import { useState } from "react";

const yearOptions = [2018, 2019, 2020, 2021, 2022, 2023]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const month_days = []

for (let i = 0; i < 12; i++) {
  month_days.push(new Date(2021, i + 1, 0).getDate())
}

const SelectDate = ({ setDate }) => {
  const [year, setYear] = useState('2019')
  const [month, setMonth] = useState('01')
  const [day, setDay] = useState('01')

  const [dayCount, setDayCount] = useState(month_days[0])

  const handleYear = (event) => {
    setYear(event.target.value)

    setDate(`${event.target.value}-${month}-${day}T00:00:00.00Z`)
  }

  const handleMonth = (event) => {
    let value = event.target.value.toString();

    if (value.length < 2) {
      value = '0' + value
    }

    setMonth(value)
    setDayCount(month_days[event.target.value - 1])

    setDate(`${year}-${value}-${day}T00:00:00.00Z`)
  }

  const handleDay = (event) => {
    let value = event.target.value.toString();

    if (value.length < 2) {
      value = '0' + value
    }

    setDay(value)

    setDate(`${year}-${month}-${value}T00:00:00.00Z`)
  }

  return (
    <>
      <select onChange={handleYear}>
        {
          yearOptions.map(year => (
            <option key={year} value={year}>{year}</option>
          ))
        }
      </select>
      <select onChange={handleMonth}>
        {
          months.map((month, index) => (
            <option key={index} value={index + 1}>{month}</option>
          ))
        }
      </select>
      <select onChange={handleDay}>
        {
          new Array(dayCount).fill(0).map((_, index) => (
            <option key={index} value={index + 1}>{index + 1}</option>
          ))
        }
      </select>
    </>
  )
}

export default SelectDate