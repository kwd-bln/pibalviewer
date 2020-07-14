import React from "react";

interface Props {
  num: number
}

const StrategyTable: React.FC<Props> = (props) => {
  const hueStep = Math.min(300 / props.num)
  const altCols = []
  for (let hi = 0; hi < props.num; hi++) {
    const hue = (Math.ceil(260 - hueStep * hi)) % 360
    const style: React.CSSProperties = {
      backgroundColor: `hsl(${hue},80%,50%)`,
      color: "white"
    }
    altCols.unshift(<div id='cell' className="altitude-st-cell" key={`cell-stg-alt-row-${hi}`} style={style}>{`${(hi + 1) * 100}`}</div>)
  }
  altCols.unshift(<div id='cell' className="altitude-st-cell" key="cell-stg-alt-row" >Alt(m)</div>)

  return <div className='st-table'>{altCols}</div>
}

export default StrategyTable