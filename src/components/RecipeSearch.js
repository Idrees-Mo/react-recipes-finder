import React, { useState } from 'react'

const RecipeSearch = ({ getRecipes }) => {
  const [input, setInput] = useState('')

  const onchange = (e) => {
    setInput(e.target.value)
  }
  const onsubmit = (e) => {
    e.preventDefault()
    getRecipes(input)
    setInput('')
  }
  return (
    <div>
      <form>
        <input type="text" value={input} name="search" onChange={onchange} placeholder="type here ...." />
        <button type="submit" onClick={onsubmit}>Search</button>
      </form>
    </div>
  )
}

export default RecipeSearch