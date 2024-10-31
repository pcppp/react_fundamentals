// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
const boxStyle = {
  border: '1px solid #333',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}
const largeBoxStyle = {
  border: '1px solid #333',
  width: '270px',
  height: '270px',
}
const mediumBoxStyle = {
  border: '1px solid #333',
  width: '180px',
  height: '180px',
}
const smallBoxStyle = {
  border: '1px solid #333',
  width: '90px',
  height: '90px',
}
const smallBox = <div style={smallBoxStyle}>small lightblue box</div>
const mediumBox = <div style={mediumBoxStyle}>medium pink box</div>
const largeBox = <div style={largeBoxStyle}>large orange box</div>
// 自定义组件
const Box = ({style, className, children, ...otherProps}) => {
  const shareStyle = {
    adding: '20px',
    border: '1px solid #333',
    borderRadius: '4px',
    textAlign: 'center',
  }
  const conbineStyle = {...shareStyle, ...style}
  return (
    <div className={className} style={conbineStyle} {...otherProps}>
      {children}
    </div>
  )
}
function App() {
  return (
    <div style={boxStyle}>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box style={largeBoxStyle} children={<div>我是自定义组件</div>}></Box>
    </div>
  )
}

export default App
