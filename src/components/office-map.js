import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import snazzyMapTheme from '../utils/map-themes'

const centerLatLong = { lat: 43.6169343, lng: -116.2040613 }

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={centerLatLong}
      defaultOptions={{ styles: snazzyMapTheme }}
    >
      <MarkerWithLabel
        position={centerLatLong}
        place={{ placeId: 'ChIJPYBwgeP4rlQRERAD9WKkT6k' }}
        labelAnchor={new google.maps.Point(65, 125)}
        labelStyle={{
          textAlign: 'center',
          padding: '0.75em',
          backgroundColor: 'white',
          fontSize: '0.75rem',
          borderRadius: '3px',
          border: '1px solid gainsboro',
        }}
      >
        <div>
          <address>
            <strong>Idaho Building</strong>
          </address>
          <address>280 North 8th Street</address>
          <address>Suite #118</address>
          <address>Boise, ID 83702</address>
        </div>
      </MarkerWithLabel>
    </GoogleMap>
  ))
)

const OfficeMap = ({ height }) => (
  <MyMapComponent
    isMarkerShown={true}
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `300px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)

export default OfficeMap
