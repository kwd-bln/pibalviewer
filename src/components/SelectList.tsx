import React from 'react'
import Select from 'react-select'
import { ValueType } from "react-select";
// import {YMDAndIsMorning, getstringYMD } from './Board'

type OptionType = { label: string; value: number };

type Props = {
  // getSelectDate: (text: string) => void
}

const SelectList: React.FC<Props> = (props) => {
  // const options = props.dates.map(date => {
  //   const timing = date.isMorning ? 'Morning' : 'Afternoon'
  //   return {
  //     value: getstringYMD(date.ymd) + '-' + timing,
  //     label: getstringYMD(date.ymd) + ' - ' + timing
  //   }
  // })

  const options = [{
    value: 1,
    label: 'a'
  },{
    value: 2,
    label: 'b'
  },{
    value: 3,
    label: 'c'
  },]

  if (!options.length) return <p>nodata</p>

  // たくさんデータがあるときのチェック
  // const options2 = []
  // for (let i = 0; i < 30; i ++ ) {
  //   options2.push({
  //     value: 'value' + i,
  //     label: 'label'+ i
  //   })
  // }
  
  return (
    <div className="select-dates-div">
      <Select options={options} defaultValue={options[0]} className='dates-select' onChange={(selectedOption: ValueType<OptionType>) => {
      const value = (selectedOption as OptionType).value
      // props.getSelectDate(value)
      console.log(value)
    }}/>
    </div>
  )
}

export default SelectList