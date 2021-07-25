import React from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import logo from './pattern-bg.png' ;
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Header = () => {
  return (
    <HeaderWrapper className='header' >
      <HeaderTitle>
        IP Address Tracker
      </HeaderTitle>
      <HeaderForm>
        <Input />
        <FormButton>
          <ArrowForwardIosIcon />
        </FormButton>
      </HeaderForm>
    </HeaderWrapper>
  ) ;
} ;



export default Header ;

const Input = styled.input.attrs(props => ({
  type : 'text' ,
  placeholder: 'Search for any IP address or domain' ,
}))`
  background-color: white ;
  outline: none ;
  border: none ;
  border-top-left-radius: 12px ;
  border-bottom-left-radius: 12px ;
  padding: 15px ;
  flex-grow: 1 ;
  font-weight: 500 ;
  color: black ;
  font-size: 1.05rem ;
`
const FormButton = styled.button`
  background-color: #000000 ;
  border-top-right-radius: 12px ;
  border-bottom-right-radius: 12px ;
  cursor: pointer ;
  outline: none ;
  border: none ;
  color: white ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
`

const HeaderForm = styled.form`
  display: flex ;
  margin: 20px auto ;
  width: 50vw ;
  max-width: 500px ;
  min-width: 400px ;
`

const HeaderWrapper = styled.header`
  background-image: url(${logo}) ;
  background-repeat: no-repeat ;
  height: 200px ;
  background-size: cover ;
  background-position: center ;
  padding-top: 30px ;
`
const HeaderTitle = styled.h1`
  color: white ;
  font-weight: 500 ;
  margin-bottom: 10px ;
  text-align: center ;
  font-size: 2rem ;
`
