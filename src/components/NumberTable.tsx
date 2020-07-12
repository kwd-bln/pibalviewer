
import React from "react";
import { WindInfo } from "../states/IPibalDataList"
import { getHH_MM } from './ToggleVisibleButtons'

interface Props {
  windInfoList: WindInfo[]
}

const NumberTable: React.FC<Props> = (props) => {
  // 配置する位置を計算するための準備
  const maxHeightIndex = Math.max(...props.windInfoList.map(info => info.winds.length))
  const maxTimeIndex = props.windInfoList.length
  const numOfPoints = props.windInfoList.length
  const hueStep = Math.min(360 / numOfPoints, 40)

  const maxAlpha = 0.9
  const minAlpha = 0.05
  const maxSpeed = 15


  // 左の見出し欄
  const altCols = []
  for (let hi = 0; hi < maxHeightIndex; hi++) {
    altCols.unshift(<div id='cell' className="altitude-cell" key={`cell-alt-row-${hi}`} >{`${(hi + 1) * 100}`}</div>)
  }
  altCols.unshift(<div id='cell' className="altitude-cell" key="cell-alt-row" >Alt(m)</div>)

  const cols = []
  for (let ti = 0; ti < maxTimeIndex; ti++) {
    const windInfo = props.windInfoList[ti]
    const winds = windInfo.winds

    const rows = []
    for (let hi = 0; hi < maxHeightIndex; hi++) {
      if ( hi < winds.length) {
        const deg = winds[hi].deg
        const spd = winds[hi].spd
        const slappedSpd = Math.min(maxSpeed, spd)
        const alpha = (minAlpha * (maxSpeed - slappedSpd) + maxAlpha * slappedSpd) / maxSpeed
        const style: React.CSSProperties = {
          backgroundColor: `hsla(${deg},50%,50%, ${alpha})`
        }

        rows.unshift(<div id='cell' style={style} key={`cell-${hi}-${ti}`} ><div className="small-left">{deg}</div><div className="small-right">{spd}</div></div>)
      } else {
        rows.unshift(<div id='cell' key={`cell-${hi}-${ti}`} >x</div>)
      }
    }
    const hue = Math.ceil(hueStep * (maxTimeIndex - ti -1))
    const hslFill = "hsla(" + hue + ", 80%, 50%, 0.8)";
    const style: React.CSSProperties = {
      color: 'white',
      backgroundColor: hslFill
    }
    rows.unshift(<div id='cell' style={style} key={`cell-time-${ti}`}>{getHH_MM(windInfo.hours, windInfo.minutes)}</div>)
    cols.push(<div className='num-table-col' key={`col-${ti}`}>{rows}</div>)
  }

  // hh:mmの列（最上列の代入）

  return (
    <div id="display-flex" className="margin-top-10px">
      <div className="altidute-col" key='alt-col'>
        {altCols}
      </div>
      <div id="holizontal-scroll" key='data-cols'>
        {cols}
      </div>
    </div>
  )
}

export default NumberTable

