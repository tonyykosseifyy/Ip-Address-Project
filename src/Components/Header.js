import React from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import logo from './pattern-bg.png' ;
import { IoIosArrowForward } from 'react-icons/io';
import Info from './Info' ;



const Header = () => {
  return (
    <HeaderWrapper className='header' >
      <Info />
      <HeaderTitle>
        IP Address Tracker
      </HeaderTitle>
      <HeaderForm onSubmit={(e) => e.preventDefault()}>
        <Input />
        <FormButton>
          <IoIosArrowForward />
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
  padding: 15px 20px ;
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
  padding: 0 20px ;
  transition: .3s ease ;
  & > svg {
    font-size: 1.2rem ;
  }
  &:hover {
    background-color: #3A3A3A ;
  }
`

const HeaderForm = styled.form`
  display: flex ;
  margin: 25px auto ;
  width: 50vw ;
  max-width: 550px ;
  min-width: 400px ;
  @media (max-width: 400px) {
    min-width: 0 ;
    width: 90vw ;
    & > input {
      min-width: 0 ;
    }
  }
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
