import React from 'react'
import '../styles/utilities/Title.scss'

const Title = ({children}) => {
  return (
    <h1 className="title">{ children }</h1>
  )
}

export default Title