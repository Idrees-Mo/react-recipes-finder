import React from 'react'
import styled from 'styled-components'
import { FaRegStar } from "react-icons/fa";

const Recipe = ({ recipe: { title, image, id, fav }, getRecipe, toggleFavRecipe }) => {
  return (
    <RecipeCard >
      <Star onClick={() => toggleFavRecipe(id, image)} className={fav ? 'active' : null} />
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => getRecipe(id, image)} >View Recipe</button>
    </RecipeCard >
  )
}

export default Recipe

const RecipeCard = styled.div`
background-color:#fff;
margin:0.5rem;
text-align:center;
/* -webkit-box-shadow: 0px 2px 20px 0px rgba(255,255,255,1); */
/* -moz-box-shadow: 0px 1px 3px 0px rgba(255,255,255,1); */
box-shadow: 0px 2px 20px rgba(0,0,0,0.2);
position:relative;

width:300px;

img{
   width:100%;
   height:200px;
   object-fit:cover;
   /* border-radius:10px 10px 0 0; */
}
h3 , button {
  display:inline-block;
  text-align:left;
  width:90%;
  color:#323232;
  padding:10px 0px;
  border-bottom: 1px solid lightgray;
}
button {
  width:70%;
  border:none;
  text-align:center;
  margin: 20px 10px;
  outline:none;
  cursor: pointer;
  border-radius:5px;
  background-color:#ff4f87;
  color:#fff;
  transition:0.2s ease-in-out;

  &:hover{
    /* background-color:#111; */
    color:#fff;
    /* opacity:0.9; */
    padding-bottom:12px 2px;
    box-shadow: 0px 1px 12px #ff4f87;
    /* font-weight:bold; */
  }
}
`
const Star = styled(FaRegStar)`
color:rgba(0,0,0,0.7);
color:orange;
padding:0.2rem;
background-color:#fff;
border-radius:50%;
font-size:2.5rem;
position:absolute;
bottom:150px;;
right:-10px;
transition: 0.1s ease-in;
box-shadow: 0px 2px 20px rgba(0,0,0,0.2);
&.active{
  background-color:orange;
  color:#fff;
}
`