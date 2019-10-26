import React from 'react'
import PropTypes from 'prop-types'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import theme from '../utils/google-map-theme.json'

const StyledMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.mapCenter}
      defaultOptions={{ styles: theme }}
    >
      <Marker position={props.mapCenter} onClick={props.onToggleOpen}>
        <div>
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>{props.children}</div>
            </InfoWindow>
          )}
        </div>
      </Marker>
    </GoogleMap>
  ))
)

StyledMap.PropTypes = {
  children: PropTypes.object.isRequired,
  zoom: PropTypes.object.isRequired,
  mapCenter: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func,
}

class OfficeMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
  }

  toggleOpen = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen }
    })
  }

  render() {
    return (
      <StyledMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2AK-anwVWpJAOyl3ceC3sYy9HiGT87m0"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ ...this.props.containerStyles }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onToggleOpen={this.toggleOpen}
        isOpen={this.state.isOpen}
        mapCenter={this.props.mapCenter}
        zoom={this.props.zoom}
      >
        {this.props.children}
      </StyledMap>
    )
  }
}

OfficeMap.PropTypes = {
  children: PropTypes.object,
  mapCenter: PropTypes.object.isRequired,
  zoom: PropTypes.object.isRequired,
  containerStyles: PropTypes.object,
}

export default OfficeMap
