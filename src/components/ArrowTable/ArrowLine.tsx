import React, { useEffect } from "react"  
import * as d3 from 'd3'

export type Arrow = {
  length: number,
  rad: number,
  hue: number,
}

type ArrowInfo = {
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  color: string
}

export type Position = {
  x: number,
  y: number
}

function getInfoFrom(arrow: Arrow): ArrowInfo {
  const cos = Math.cos(arrow.rad)
  const sin = Math.sin(arrow.rad)
  return {
    x0: - arrow.length * sin / 2,
    y0: arrow.length * cos / 2,
    x1: arrow.length * sin / 2,
    y1: - arrow.length * cos / 2,
    color: `hsl(${arrow.hue},50%,50%)`
  }
}

export const ArrowLine: React.FC<{ arrow: Arrow, position: Position, id: string }> = ({ arrow, position, id}) => {  
  const className = `arrow-${id}`
  //d3-----------------------------  
  useEffect(() => {
    const g = d3.select(`.${className}`)
    const info = getInfoFrom(arrow)

    // defs/markerという構造で、gの下に矢印を定義
    let marker =g.append("defs").append("marker")
    .attr("id", `arrowhead-${id}`)
    .attr("refX", 1)
    .attr("refY", 2)
    .attr("markerWidth", 4)
    .attr("markerHeight", 4)
    .attr("orient", "auto")

    // 矢印の形をpathで定義
    marker.append("path")
      .attr("d", "M 0,0 V 4 L4,2 Z")
      .attr("fill", info.color)

    let line = d3.line()
    .x(data => data[0])
    .y(data => data[1])

    g.append('path')
    .attr('d', line([[info.x0, info.y0],[info.x1, info.y1]])!)
    .attr('stroke', info.color)
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('marker-end', `url(#arrowhead-${id})`)
    .attr("transform", `translate(${position.x}, ${position.y})`)  
  })  
  //-------------------------------  

  return (  
    <g className={className} key={id}></g>
  )  
}  