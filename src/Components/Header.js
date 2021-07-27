import React, { useState , useEffect } from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import logo from './pattern-bg.png' ;
import { IoIosArrowForward } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri' ;
import Tooltip from '@material-ui/core/Tooltip' ;
import Zoom from '@material-ui/core/Zoom' ;
import axios from 'axios' ;

const BASE_URL = 'https://geo.ipify.org/api/v1';
const API_KEY = 'at_IfRMIjWI00Zo31GJ9dOZIrTRuaT74' ;

const Header = ({ setData }) => {
  const [ ip , setIp ] = useState('') ;
  const [ error , setError ] = useState(false) ;
  const [ submit , setSubmit ] = useState(false) ;
  const fetchData = async ( ip ) => {
    try {
      const response = await axios.get(`${BASE_URL}?apiKey=${API_KEY}${ip ? `&ipAddress=${ip}` : ''}`)
      setIp(response.data.ip) ;
      setData(response.data) ;
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  const testIp = () => {
    if ( /^([0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip) ) {
      setError(false) ;
    } else {
      setError(true) ;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault() ;
    !error && fetchData(ip)
  }
  useEffect(() => {
    testIp() ;
  },[ip])

  useEffect(() => {
    fetchData() ;
  },[])
  console.log(error , ip ) ;
  return (
    <HeaderWrapper className='header' >
      <HeaderTitle>
        IP Address Tracker
      </HeaderTitle>
      <HeaderForm onSubmit={(e) => handleSubmit(e)} >
        <Input value={ip} onChange={(e) => setIp(e.target.value)} />
        <Tooltip
          TransitionComponent={Zoom}
          placement='top'
          title='IP Address not valid !'
          arrow
          style={{display: error ? '' : 'none'}}
          >
          <div className={`input-svg-container ${error && (ip !=='') ? 'input-svg-container-error' : ''}`} >
            <RiErrorWarningFill />
          </div>
        </Tooltip>
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
  transition: .3s ease ;
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
  transition: .3s ease ;
  border-radius: 12px ;
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
