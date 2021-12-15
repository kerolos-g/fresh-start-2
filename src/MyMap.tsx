import React, {Component, useEffect} from 'react';
// import {Platform, StyleSheet, View} from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
// import mapboxgl from 'mapbox-gl';
// import mapboxgl from '!mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import './MyMap.css';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoia2Vyb2xvcyIsImEiOiJja3g2NG85dmoxZGdtMm9vMW11MXgyNDM3In0.KAWsSe9kioQfiDk7ITmzzg';

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   container: {
//     height: 300,
//     width: 300,
//     backgroundColor: 'tomato',
//   },
//   map: {
//     flex: 1,
//   },
// });

const isMobile = false // Platform.OS === 'android' || Platform.OS === 'ios';

let MyMap = () => <></>;
if (isMobile) {
  // MapboxGL.setAccessToken(MAPBOX_TOKEN);
  // MapboxGL.setConnected(true);

  // class AMap extends Component {
  //   render() {
  //     return (
  //       <View style={styles.page}>
  //         <View style={styles.container}>
  //           <MapboxGL.MapView style={styles.map} />
  //         </View>
  //       </View>
  //     );
  //   }
  // }
  // MyMap = () => <AMap></AMap>;
} else {
  MyMap = () => {
    (mapboxgl as any).accessToken = MAPBOX_TOKEN;

    useEffect(() => {
      new mapboxgl.Map({
        container: 'mapContainer',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9,
      });
    }, []);

    return (
      <>
        <div id="mapContainer" className="map"></div>
      </>
    );
  };
}

export {MyMap};
