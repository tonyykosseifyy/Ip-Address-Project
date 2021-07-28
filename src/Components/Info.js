import React from 'react' ;
import './Info.css' ;
import styled from 'styled-components' ;


const Info = ({ data }) => {
  const info = [ 'ip address' , ['country' , 'region' , 'city'] , 'timezone' , 'isp' ] ;
  if (data.location) {
    return (
      <div className='info'>
          { info.map((item , index) => (
            <Section key={index} index={index} >
              <h2>{Array.isArray(item) ? 'location' : item }</h2>
              <h1>
                { (item === 'ip address') || (item === 'isp') ?
                  item === 'ip address' ? data['ip'] : data['isp']

                  : Array.isArray(item) ? item.map((item , index) => (
                    <>
                      { index === 0 ? `${data['location'][item]}, ` : data['location'][item] }
                      { (index === 1) && (window.innerWidth > 500) ? <br /> : ' ' }
                    </>
                  ) ) : data.location.timezone}
              </h1>
            </Section>
          ))}
      </div>
    ) ;
  }
  return null
} ;




export default Info ;


const Section = styled.div`
  border-right: 1px solid #DADADA ;
  padding-left: 25px ;
  &:last-child {
    border-right: none ;
  }
  & > h2 {
    font-size: 0.6rem ;
    color: #979797 ;
    text-transform: uppercase ;
    font-weight: bold ;
    margin-top: -7px ;
  }
  & > h1 {
    color: black ;
    font-size: 1.1rem ;
    font-weight: 500 ;
    margin-top: 12px ;
  }
  @media (max-width: 1000px ) {
    padding-left : 7px ;
    & > h1 {
      font-size: 0.87rem ;
    }
  }
  @media (max-width: 500px ) {
    border-right: none ;
    margin-top: 22px ;
    padding: 0 ;
    &:last-child {
      margin-bottom: 22px ;
    }
    & > h1 {
      margin-top: 4px ;
    }
  }
`
