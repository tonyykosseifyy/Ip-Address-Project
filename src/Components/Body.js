import React,{ useEffect , useState } from 'react' ;
import './Body.css' ;
import { MapContainer, TileLayer, Marker, Popup , useMapEvents} from 'react-leaflet' ;


const Body = ({ data }) => {
  const position = [51.505, -0.09] ;
  const [ map , setMap ] = useState(null) ;
  console.log(map) ;
  useEffect(() => {
    if (map) {
      const lastCenter = map.options.center ;
      if ((lastCenter[0] !== data.location.lat) || (lastCenter[1] !== data.location.lng) ) {
        map.flyTo([data.location.lat , data.location.lng ], map.getZoom())
      }
    }
  },[ data ])
  if ( data.location ) {
    return (
      <div className='body'>
        <MapContainer whenCreated={setMap} center={data.location ? [data.location.lat , data.location.lng] : position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={data.location ? [data.location.lat , data.location.lng] : position}>
            <Popup>
              {data.location.country} ,{data.location.region}<br /> {data.location.city}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    ) ;
  } else return null

} ;


export default Body ;
