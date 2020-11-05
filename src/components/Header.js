import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderStyle>
      <Navbar>
        <NavContainer>
          <Logo />
          <Menu>
            <NavLink exact to="/" >Homes</NavLink> |
            <NavLink exact to="/about" >About Me</NavLink>
          </Menu>
        </NavContainer>
      </Navbar>
      <Hero>
        <h2>Recipe Finder</h2>
        <p>Never wonder what to cook!</p>
      </Hero>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
height:260px;
background-color:${({ theme: { colors } }) => colors.dark};
color:${({ theme: { colors } }) => colors.text};
`

const Navbar = styled.nav`
display: flex;
flex-direction:column;
justify-content:center;
width:100%;
height: 60px;
`
const Logo = styled(FaHamburger)`
color:${({ theme: { colors } }) => colors.secondary};
font-size:2rem;
`


const NavContainer = styled.div`
display:flex;
justify-content:space-between;
margin:0 0.9rem;
`

const Menu = styled.ul`
display:flex;
font-size:14px;
background-color:#000;
border-radius:5px;
height:1.9rem;
padding:0.3rem; 
`

const NavLink = styled(Link)`
color:${({ theme: { colors } }) => colors.text};
margin:0 1rem;
align-self:center;
transition:  0.1s all;
&:hover:not(.active){
  color:${({ theme: { colors } }) => colors.primary};
}
 &.active {
color:${({ theme: { colors } }) => colors.secondary};
border-bottom:solid 1px ${({ theme: { colors } }) => colors.secondary};
}
`

const Hero = styled.section`
margin:1.2rem;
line-height:2.1rem;
p {
  /* font-size:1rem; */
  font-style:initial;
  letter-spacing:.09rem;
}
h2 {
  /* font-size:1.6rem; */
  color:${({ theme: { colors } }) => colors.primary};
}  
`


// media query for navbar & hero section max width & title font size & reducer header height 