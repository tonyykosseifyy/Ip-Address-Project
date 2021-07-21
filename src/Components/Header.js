import React from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import logo from './pattern-bg.png' ;

const Header = () => {
  return (
    <HeaderWrapper className='header' >
    </HeaderWrapper>
  ) ;
} ;



export default Header ;




const HeaderWrapper = styled.header`
  background-image: url(${logo}) ;
  background-repeat: no-repeat ;
  height: 200px ;
  background-size: cover ;
  background-position: center ;
  
`
