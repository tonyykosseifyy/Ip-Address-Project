import React,{ useEffect , useState } from 'react' ;
import './Body.css' ;
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet' ;


const Body = ({ data }) => {
  const loc = [51.505, -0.09] ;
  const [ position , setPosition ] = useState(loc) ;
  console.log('body data ' , data)
  console.log('center=> ' , data.hasOwnProperty('lat') ? [data.lat , data.lng] : position)
  console.log(position)
  useEffect(() => {
    if ( data.hasOwnProperty('lat') ) {
      setPosition([data.lat , data.lng])
    } else {
      setPosition(loc)
    }
  },[ data ])
  return (
    <div className='body'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={data.hasOwnProperty('lat') ? [data.lat , data.lng] : position}>
          <Popup>
            {data.country} ,{data.city}<br /> {data.region}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  ) ;
} ;


export default Body ;
