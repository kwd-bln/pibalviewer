import React from "react";
import { WindInfo } from "../../states/IPibalDataList"
import { getHH_MM } from '../DstGlaph/ToggleVisibleButtons'

interface Props {
  num: number
  windInfo: WindInfo
}

const StrategyTable: React.FC<Props> = (props) => {
  const hueStep = Math.min(300 / props.num)
  const altCols = []
  const rows = []
  const winds = props.windInfo.winds
  for (let hi = 0; hi < props.num; hi++) {
    const hue = (Math.ceil(260 - hueStep * hi)) % 360
    const style: React.CSSProperties = {
      backgroundColor: `hsl(${hue},80%,50%)`,
      color: "white"
    }
    altCols.unshift(<div id='cell' className="altitude-st-cell" key={`cell-stg-alt-row-${hi}`} style={style}>{`${(hi + 1) * 100}`}</div>)

    const deg = winds[hi].deg
    const dispalyDeg = (deg + 180) % 360
    const spd = winds[hi].spd
    const disPlaySpeed = Math.round(spd * 1.852)

    rows.unshift(<div id='cell' className="cell-small" key={`cell-${hi}-st`} ><div className="small-left">{dispalyDeg}</div><div className="small-right">{disPlaySpeed}</div></div>)
  }
  rows.unshift(<div id='cell' className="cell-small" key={`cell-st-top`} ><div className="small-left">Ang</div><div className="small-right">km/h</div></div>)
  
  altCols.unshift(<div id='cell' className="altitude-st-cell" key="cell-stg-alt-row" >Alt</div>)

  return (
    <React.Fragment>
      <div className='st-table'>{altCols}</div>
      <div className='st-table'>{rows}</div>
    </React.Fragment>
    )
}

export default StrategyTable