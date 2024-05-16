import React from 'react'

const News = ({ a, title, message }) => {
  return (
    <div
    style={{
        width:'400px',
        marginBottom:'30px'
    }}>
        <img  
        style={{
            borderRadius:'12px'
        }}
        src={a} alt=" image link" />
    <h1>{title}</h1>
    <p>{message}</p></div>
  )
}

export default News