import React, { useEffect, useRef } from "react";

import { WindInfo } from "../../states/IPibalDataList"
type Point = {
  x: number,
  y: number
}

interface Props {
  windInfo: WindInfo,
}

const StrategyGlaph: React.FC<Props> = (props) => {
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
    const ktToKmPerH = 1.852
    const windVectors: Point[] = props.windInfo.winds.map( wind => {
      const rad: number = wind.deg * (Math.PI / 180);
      return {
        x: wind.spd * ktToKmPerH * Math.sin(rad),
        y: wind.spd * ktToKmPerH * Math.cos(rad)
      }
    })

    // 最も遠い点の距離の計算
    const maxR = getRFrom(windVectors)

    /*  */
    const ctx: CanvasRenderingContext2D = getContext();
    const originX: number = 240
    const originY: number = 240

    // scaleSpeed * 5 = maxR になるように
    const scaleSpeed = getScaleSpeedFrom(maxR)
    const scaleLine = 36
    const scale = scaleLine / scaleSpeed

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
    const canvasRightX = getCanvasWidth() - padding
    const canvasBottomY = getCanvasHeight() - padding
    ctx.beginPath();
    ctx.moveTo(padding, originY);
    ctx.lineTo(canvasRightX, originY);
    ctx.moveTo(originX, padding);
    ctx.lineTo(originX, canvasBottomY);

    // 斜め線 30度ごと
    const canvasHarfWidth = (originX - padding) / 2
    ctx.moveTo(padding + canvasHarfWidth, padding);
    ctx.lineTo(padding + canvasHarfWidth * 3, canvasBottomY);
    ctx.moveTo(padding + canvasHarfWidth * 3, padding);
    ctx.lineTo(padding + canvasHarfWidth, canvasBottomY);
    ctx.moveTo(padding, padding + canvasHarfWidth);
    ctx.lineTo(canvasRightX, padding + canvasHarfWidth * 3);
    ctx.moveTo(padding, padding + canvasHarfWidth * 3);
    ctx.lineTo(canvasRightX, padding + canvasHarfWidth);
    ctx.stroke()

    // scale円の描画
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.arc(originX, originY, scaleLine, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 2, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 3, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 4, 0, Math.PI * 2)
    ctx.arc(originX, originY, scaleLine * 5, 0, Math.PI * 2)
    ctx.stroke()

    // メモリの描画
    const offsetX = 7
    ctx.save();
    ctx.fillStyle = "black"
    ctx.font = "14px Arial"
    ctx.textAlign = "center"
    ctx.fillText(scaleSpeed.toString(),
      originX + scaleLine + offsetX,
      originY)
    ctx.fillText((scaleSpeed * 2).toString(),
      originX + (scaleLine * 2) + offsetX,
      originY)
    ctx.fillText((scaleSpeed * 3).toString(),
      originX + (scaleLine * 3) + offsetX,
      originY)
    ctx.fillText((scaleSpeed * 4).toString(),
      originX + (scaleLine * 4) + offsetX,
      originY)
    ctx.fillText((scaleSpeed * 5).toString(),
      originX + (scaleLine * 5) + offsetX,
      originY)
    ctx.fillText('(km/h)',
      originX + (scaleLine * 5) + 15,
      originY + 12)
    ctx.restore()

    //　各点のプロット
    let numOfSplit = windVectors.length 
    const hueStep = Math.min(300 / numOfSplit)
    windVectors.forEach((point, index) => {
      // 色の決定
      const hue = (Math.ceil(260 - hueStep * index)) % 360
      const hslStroke = "hsl(" + hue + ", 100%, 50%)";
      const hslFill = "hsl(" + hue + ", 80%, 45%)";

      ctx.save();
      ctx.strokeStyle = hslStroke;
      ctx.fillStyle = hslFill;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      const x = originX - point.x * scale
      const y = originY + point.y * scale
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.restore();
    })

  })

  return (
    <div className="rect-wrap">
      <canvas className="pibal-glaph" ref={canvasRef} />
    </div>
  )
}

// pointsの集合であるpointsListから最大半径を求めるための関数
function getRFrom(points: Point[]): number {
  return Math.max(...points.map(p => Math.hypot(p.x, p.y)))
}

// scale円の単位距離を導出
function getScaleSpeedFrom(maxR: number): number {
  const oneFifthOfMaxR: number = Math.max(Math.round(maxR / 4.8), 1)
  
  return oneFifthOfMaxR
}

export default StrategyGlaph 