import React from 'react' ;
import './Header.css' ;
import backgroundImg from './pattern-bg.png' ;
import styled from 'styled-components' ;

const Header = () => {
  return (
    <HeaderWrapper className='header' >

    </HeaderWrapper>
  ) ;
} ;



export default Header ;





const HeaderWrapper = styled.header`
  background-image: url(${backgroundImg}) ;

`