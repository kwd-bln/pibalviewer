import React, { useEffect, useRef } from "react";

import { WindInfo } from "../states/IPibalDataList"

type Point = {
  x: number,
  y: number
}

type PointsInfo = {
  hours: number,
  minutes: number,
  visible: boolean,
  points: Point[]
}

interface Props {
  windInfoList: WindInfo[],
  scaleRatio: number
}

const Glaph: React.FC<Props> = (props) => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    canvas.width = 480;
    canvas.height = 480;

    return canvas.getContext('2d');
  };

  const getCanvasWidth = (): number => {
    const canvas: any = canvasRef.current;
    return canvas.width
  }

  const getCanvasHeight = (): number => {
    const canvas: any = canvasRef.current;
    return canvas.height
  }

  useEffect(() => {    
    // どこの点をとるかの計算
    let pointsList: PointsInfo[] = []

    // 時間ごとにpointsに直していく
    const ktToMPer60s = 30.8667 // x (kt) => ktToMPer60s * x (m/100s) で変換
    props.windInfoList.forEach( info => {
      let points: Point[] = []
      let currentX = 0
      let currentY = 0

      info.winds.forEach( wind => {
        const rad: number = wind.deg * (Math.PI / 180);
        currentX += wind.spd * ktToMPer60s * Math.sin(rad)
        currentY += wind.spd * ktToMPer60s * Math.cos(rad)
        points.push({
          x: currentX,
          y: currentY
        })
      })

      pointsList.push({
        hours: info.hours,
        minutes: info.minutes,
        visible: info.visible,
        points: points
      })
    })

    console.log(props.windInfoList.map(d => d.winds) )

    // 最も遠い点の距離の計算
    const maxR = getRFrom(pointsList)

    /*  */
    const ctx: CanvasRenderingContext2D = getContext();
    const originX: number = 240
    const originY: number = 240

    // scaleDistance * 3 = 144 になるように
    const scaleDistance = getScaleDistanceFrom(maxR, props.scaleRatio)

    const scaleLine = 48
    const scale = scaleLine / scaleDistance
    console.log("maxR = ", maxR, "scale", scale, scaleDistance)

    // 原点の描画
    ctx.save();
    ctx.strokeStyle = "#707070";
    ctx.fillStyle = "#707070";
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.arc(originX, originY, 2, 0, Math.PI * 2);
    ctx.fill();

    // 軸線の描画
    const padding = 50
    const canvasWidth = getCanvasWidth() - padding
    const canvasHeight = getCanvasHeight() - padding
    ctx.beginPath();
    ctx.moveTo(padding, originY);
    ctx.lineTo(canvasWidth, originY);
    ctx.moveTo(originX, padding);
    ctx.lineTo(originX, canvasHeight);
    // 斜め線
    ctx.moveTo(padding, padding);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.moveTo(canvasWidth, padding);
    ctx.lineTo(padding, canvasHeight);
    ctx.stroke()

    // scale円の描画
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.arc(originX, originY, scaleLine, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 2, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 3, 0, Math.PI * 2)
    ctx.stroke()

    // scaleの描画
    ctx.beginPath()
    const scaleLineHeight = 10
    ctx.moveTo(canvasWidth * 0.3, canvasHeight)
    ctx.lineTo(canvasWidth * 0.3, canvasHeight + scaleLineHeight)
    ctx.lineTo(canvasWidth * 0.3 + scaleLine, canvasHeight + scaleLineHeight)
    ctx.lineTo(canvasWidth * 0.3 + scaleLine, canvasHeight)
    ctx.stroke()
    ctx.restore();

    // scaleのテキストの描画
    ctx.save();
    ctx.fillStyle = "black"
    ctx.font = "14px Arial"
    ctx.textAlign = "center"
    ctx.fillText(scaleDistance.toString() + 'm',
      canvasWidth * 0.3 + scaleLine * 0.5,
      canvasHeight + scaleLineHeight * 2.5)
    ctx.restore()

    //　各点のプロット
    let numOfPoints = pointsList.length
    console.log(pointsList)
    const hueStep = Math.min(360 / numOfPoints, 40)
    pointsList.forEach((data, index) => {
      if (data.visible) {
        const points = data.points
        // 色の決定
        const hue = Math.ceil(hueStep * index)
        const hslStroke = "hsl(" + hue + ", 100%, 50%)";
        const hslFill = "hsl(" + hue + ", 80%, 45%)";

        // 一つの時間のpibaldataを描画
        let x = originX
        let y = originY
        points.forEach(point => {
          ctx.save();
          ctx.strokeStyle = hslStroke;
          ctx.fillStyle = hslFill;
          ctx.beginPath();
          ctx.moveTo(x, y);
          x = originX + point.x * scale
          y = originY - point.y * scale
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.moveTo(x, y);
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        })
      }
    })

    // scaleのプロット
  })

  return (
    <div className="rect-wrap">
      <canvas className="pibal-glaph" ref={canvasRef} />
    </div>
  )

}


// pointsの集合であるpointsListから最大半径を求めるための関数
function getRFrom(pointsList: PointsInfo[]): number {
  const aryMax = function(a: number, b:number): number {return Math.max(a, b)}
  return pointsList
  .map(data => data.points.map(p => Math.hypot(p.x, p.y)).reduce(aryMax))
  .reduce(aryMax, 1)
}

// scale円の単位距離を導出
function getScaleDistanceFrom(maxR: number, ratio: number): number {
  const oneThirdOfMaxR: number = Math.ceil(maxR / 3.2 / ratio)
  
  // 3 * scale = maxDist / 1.1 になるようにする
  const ScaleDistance = Math.max(Number(oneThirdOfMaxR.toPrecision(2)), 10)
  return ScaleDistance
}

export default Glaph