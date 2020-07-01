import React from "react";
import { ArrowLine, Arrow, Position } from "./ArrowLine"

import { WindInfo } from "../states/IPibalDataList"
import Svg from "./Svg"

interface Props {
  selectedId: number,
  windInfoList: WindInfo[]
}

export const Table: React.FC<Props> = (props) => {
  if (!props.windInfoList.length) {
    return null
  }
  
  // 矢印の最小・最大長さ
  const minLength = 4
  const maxLength = 15

  // min/max Lengthに対応するmin/max speed
  const maxSpd = Math.max(...props.windInfoList.map(info => Math.max(...info.winds.map(w => w.spd))))
  const minSpd = Math.min(...props.windInfoList.map(info => Math.min(...info.winds.map(w => w.spd))))

  // 配置する位置を計算するための準備
  const maxHeightIndex = Math.max(...props.windInfoList.map(info => info.winds.length))
  const maxTimeIndex = props.windInfoList.length
  const boxLengthPerArrow = 30 // 1つ1つの矢印の間隔
  const offset = 10 // 端の矢印の表示のoffset

  // 矢印の表示数による
  const width = boxLengthPerArrow * maxTimeIndex
  const height = boxLengthPerArrow * maxHeightIndex
  let arrowLineIndex = 0

  const spdToLength = (spd: number): number => { return minLength + (maxLength - minLength) / (maxSpd - minSpd) * spd}

  return (  
    <Svg width={width} height={height}>
      {props.windInfoList.map((info, timeIndex) => {
        const winds = info.winds
        return winds.map((wind, windIndex) => {
          arrowLineIndex ++
          const arrow: Arrow = {
            length: spdToLength(wind.spd),
            rad: wind.deg / 180 * Math.PI,
            hue: wind.deg
          }
          const position: Position = {
            x: boxLengthPerArrow * timeIndex + offset,
            y: height - boxLengthPerArrow * windIndex - offset
          }
          return <ArrowLine arrow={arrow} position={position} id={`${props.selectedId}-${arrowLineIndex}`} key={arrowLineIndex}/>
        })
      })}
    </Svg>  
  )  
}