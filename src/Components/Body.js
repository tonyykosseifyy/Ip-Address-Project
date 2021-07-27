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
      if ((lastCenter[0] !== data.lat) || (lastCenter[1] !== data.lng) ) {
        map.flyTo([data.lat , data.lng ], map.getZoom())
      }
    }
  },[ data ])
  return (
    <div className='body'>
      <MapContainer whenCreated={setMap} center={data.hasOwnProperty('lat') ? [data.lat , data.lng] : position} zoom={13} scrollWheelZoom={true}>
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
