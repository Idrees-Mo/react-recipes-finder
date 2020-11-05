import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronCircleDown } from "react-icons/fa";

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
    <Container>
      <Header>
        <FaChevronCircleDown style={{ 'font-size': '1.5rem' }} />
        <p>Find your craving?</p>
      </Header>
      <Form>
        <input type="text" value={input} name="search" onChange={onchange} placeholder="type here ...." />
        <button type="submit" onClick={onsubmit}>Search</button>
      </Form>
    </Container>
  )
}

export default RecipeSearch

const Container = styled.div`
width:100%;
max-width:30rem;
margin:auto;
margin-top:-80px;
color:#ff9e00;
`
const Header = styled.div`
display:flex;
padding-bottom:.5rem;
margin-left:1rem;
p{
  font-size:1.2rem;
  margin-left:0.5rem;
  margin-top:-4px;
  /* word-spacing:.3rem; */
}
`
const Form = styled.form`
display:flex;
flex-direction:column;
padding:0.5rem;
background-color:${({ theme: { colors } }) => colors.light};
box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
width:100%;
input , button {
  padding:0.9rem;
  border-radius:3px;
  height:2.3rem;
  border:none;
  font-size:18px;
  }

input::placeholder{
  color:${({ theme: { colors } }) => colors.light};
  font-size:16px;
}
input:focus{
  border: 0.15rem solid ${({ theme: { colors } }) => colors.dark};
  padding:0.75rem;
  }
button {
color:#fff;
background-color:#231F20;
padding:0.5rem;
margin-top:0.3rem;
transition: 0.3s all;
&:hover{
  cursor:pointer;
  color:orange;
  }
}
`

// form Flex direction to row, the margin property 