import React from 'react';

interface OwnProps {
    isKt: boolean
    onClick: () => void
}

const ToggleIsKtButton: React.FC<OwnProps> = props => {
const buttonStyle: React.CSSProperties = {
  color: props.isKt ? "#67c5ff" : "#ff6e7a",
  border: props.isKt ? "solid 2px #67c5ff" : "solid 2px #ff6e7a"
}

const svgStyle: React.CSSProperties = {
  fill: props.isKt ? "#67c5ff" : "#ff6e7a",
}
return <button type={'button'} onClick={props.onClick} className={"toggle-table"} style={buttonStyle}>
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" className="svg-tofrom" style={svgStyle}><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M22,8l-4-4v3H3v2h15v3L22,8z"/><path d="M2,16l4,4v-3h15v-2H6v-3L2,16z"/></g></g></svg>
  {props.isKt ? '　kt' : ' km/h'}
  </button>
}

export default ToggleIsKtButton