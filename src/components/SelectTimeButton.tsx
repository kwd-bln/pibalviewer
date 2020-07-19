import React from 'react'

interface OwnProps {
  text: string
  isSelected: boolean,
  hue: number,
  onClick: () => void
}

const SelectTimeButton: React.FC<OwnProps> = props => {
const buttonStyle: React.CSSProperties = {
backgroundColor: props.isSelected ? `hsl(${props.hue}, 80%, 50%)` : `hsla(${props.hue}, 80%, 50%, 0.3)`
}

return <button type={'button'} onClick={props.onClick} className={"toggle-glaph-button"} style={buttonStyle}>{props.text}</button>
}

export default SelectTimeButton