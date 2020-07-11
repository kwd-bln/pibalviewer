import React from 'react';
import { WindInfo } from "../states/IPibalDataList";
import { Row, Col } from 'react-bootstrap'

interface Props {
  windInfoList: WindInfo[]
  onClickAt: (index: number) => void
}

const ToggleVisibleButtons: React.FC<Props> = (props) => {
   const numOfPoints = props.windInfoList.length
   const hueStep = Math.min(360 / numOfPoints, 40)
  return (
    <Col xs={{ offset: 2, span: 10 }} sm={{ offset: 0, span: 4 }}>
      <div className="button-wrap">
      {props.windInfoList.slice().reverse().map((w, i) => {
          const hue = Math.ceil(hueStep * i)
          const hslFill = "hsla(" + hue + ", 80%, 45%, 0.8)";
          const style: React.CSSProperties = {
            color: 'white',
            backgroundColor: hslFill,
            textAlign: 'center',
            borderRadius: "3px",
            margin: "0",
            top: "5%",
            position: "absolute",
            width: "80px",
          }
          return (
            <Row key={`toggle-${i}`}>
              <Col xs={{ offset: 1, span: 4 }} sm={{ offset: 0, span: 5 }}>
                <div className="form-group">
                  <span className="switch">
                    <input type="checkbox" className="switch" id={`wind-${i}`} checked={props.windInfoList[i].visible} onClick={(e) => { props.onClickAt(i) }} readOnly />
                    <label htmlFor={`wind-${i}`}></label>
                  </span>
                </div>
              </Col>
              <Col xs={{ offset: 1, span: 6 }} sm={{ offset: 0, span: 7 }}>
                <p style={style}>{getHH_MM(w.hours, w.minutes)}</p>
              </Col>
            </Row>
          )
        })}
      </div>
    </Col>
  )
}

function getHH_MM(hours: number, minutes: number):string {
	const hh = ("00" + hours).slice(-2)
	const mm = ("00" + minutes).slice(-2)
  const result = hh + ":" + mm
  return result
}

export default ToggleVisibleButtons