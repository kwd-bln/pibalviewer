import React from 'react'
import { WindInfo } from "../states/IPibalDataList"
import { Col } from 'react-bootstrap'
import { getHH_MM } from './ToggleVisibleButtons'
import SelectTimeButton from './SelectTimeButton'

interface OwnProps {
  windInfoList: WindInfo[]
  onClick: (value: number) => void
  selectedTimeIndex: number
}

const SelectTimeButtons: React.FC<OwnProps> = props => {
  const numOfPoints = props.windInfoList.length
  const hueStep = Math.min(360 / numOfPoints, 40)

  const items = props.windInfoList.map((info, i) => {
    const hue = Math.ceil(hueStep * (numOfPoints - i - 1))
    const text = getHH_MM(info.hours, info.minutes)
    return <SelectTimeButton text={text} onClick={() => { props.onClick(i)}} hue={hue} isSelected={i === props.selectedTimeIndex}/>
  })
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  )
}

export default SelectTimeButtons
