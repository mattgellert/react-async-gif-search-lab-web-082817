import React, {Component} from 'react'

const GifList = (props) => {
  return(
    <ul className="gif-list">
      {props.gifs.map(gif => {
        return (
          <li className='gif'>
            {gif.url}
          </li>
        )
      })}
    </ul>
  )
}

export default GifList
