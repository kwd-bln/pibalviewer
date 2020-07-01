import React from 'react'  

// 縦、横を選択できるSVG。わざわざd3を使う必要ないと思って使わなかった。  
const Svg: React.FC<{ width: number, height: number }> = ({ children, width, height }) => (  
  <svg style={{ width: width, height: height }}>  
    {children}  
  </svg>  
)

export default Svg