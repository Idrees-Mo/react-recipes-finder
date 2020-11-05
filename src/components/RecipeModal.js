import React from 'react'
import styled from 'styled-components'

const RecipeModal = ({ recipe, img, toggleModal }) => {
  return <Background >
    <button onClick={() => toggleModal()}>x</button>
    <img src={recipe.recipe_img} alt={img} />
    <ul>
      <h1>Ingredients</h1>
      {recipe.recipe_ing && recipe.recipe_ing.map(i => <li key={i.name}>{i.name}</li>)}
    </ul>
    <ul>
      <h1>Instructions</h1>
      {recipe.recipe_ins && recipe.recipe_ins.map(s => <li key={s.step}>{s.step}</li>)}
    </ul>
  </Background>
}

export default RecipeModal

const Background = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  /* overflow:auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`;