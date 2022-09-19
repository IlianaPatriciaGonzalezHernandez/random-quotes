import React from 'react'


const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

  const colorObj = {
    color: randomColor
  }

  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <article style={colorObj} className='card'>
      <p className='card__quote'><b>&#8220;</b>{randomQuote.quote}</p>
      <h2 className='card__author'>{randomQuote.author}</h2>
      <button 
      className='card__btn' 
      style={backgroundObj} 
      onClick={getRandomAll} 
      >&#62;</button>
    </article>
  )
}

export default QuoteBox