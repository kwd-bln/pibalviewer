import React from 'react'
import Select from 'react-select'
import { ValueType } from "react-select";
import { DateInfo } from './../states/IPibalDataList'
import { getYYYY_MM_DD } from './../containers/TopPageContainer'

type OptionType = { label: string; value: number };

type Props = {
  dateInfoList: DateInfo[]
  onChange: (value: number) => void
}

const SelectList: React.FC<Props> = (props) => {
  const options: OptionType[] = props.dateInfoList.map((dateInfo, index) => {
    return {
      value: index,
      label: `${getYYYY_MM_DD(dateInfo.date)} - ${dateInfo.timePeriod}`
    }
  })
  if (!options.length) return <p>nodata</p>
  
  return (
    <div className="select-dates-div">
      <Select options={options} defaultValue={options[0]} className='dates-select' onChange={(selectedOption: ValueType<OptionType>) => {
        const value = (selectedOption as OptionType).value
        props.onChange(value)
      }} />
    </div>
  )
}

export default SelectList