import React from 'react'
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs, } from 'react-google-maps'
import theme from '../utils/google-map-theme.json'

const mapCenter = { lat: 43.616931, lng: -116.201875 }
const directionsLink =
  'https://www.google.com/maps/dir/280+N+8th+St,+Boise,+ID+83702/@43.6169187,-116.2039708,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54aef8e38170803d:0xa94fa462f5031011!2m2!1d-116.2018726!2d43.6169343'
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={mapCenter}
      defaultOptions={{ styles: theme }}
    >
      <Marker
        position={mapCenter}
        onClick={props.onToggleOpen}
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
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <a
                  href={directionsLink}
                  target="_blank"
                  css={{ textTransform: 'none' }}
                >
                  <strong>Idaho Building</strong>
                  <address>280 North 8th Street</address>
                  <address>Suite #118</address>
                  <address>Boise, ID 83702</address>
                </a>
              </div>
            </InfoWindow>
          )}
        </div>
      </Marker>
    </GoogleMap>
  ))
)

class OfficeMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
  }

  toggleOpen = () => {
    this.setState(prevState => {
      console.log(prevState)
      return { isOpen: !prevState.isOpen }
    })
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onToggleOpen={this.toggleOpen}
        isOpen={this.state.isOpen}
      />
    )
  }
}

export default OfficeMap
