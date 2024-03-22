import MapView, { Marker } from "react-native-maps";
import { useMemo } from "react";

/*
  - set this to something low (like 10) and the tests perform as expected 
  - set it to something high (like 300) and tests will perform very poorly.
    maestro studio will also refuse to open and the following errors are thrown in the console...

  **
    kotlinx.coroutines.JobCancellationException: Parent job is Cancelling; job=CompletableDeferredImpl{Cancelled}@775ade48
    Caused by: io.netty.handler.timeout.WriteTimeoutException  
  **
*/
const NUMBER_OF_MARKERS = 300;

function generateUniqueLatLngs(count) {
  const latLngs = new Set();

  while (latLngs.size < count) {
    const lat = (Math.random() * (58.635 - 49.959999) + 49.959999).toFixed(6);
    const lng = (Math.random() * (1.681531 - -7.572167) + -7.572167).toFixed(6);
    latLngs.add({ latlng: { latitude: parseFloat(lat), longitude: parseFloat(lng) } });
  }

  return [...latLngs];
}

export default function App() {
  const uniqueLatLngs = useMemo(() => generateUniqueLatLngs(NUMBER_OF_MARKERS), [NUMBER_OF_MARKERS]);
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 55.78825,
        longitude: -5,
        latitudeDelta: 15,
        longitudeDelta: 15,
      }}
    >
      {uniqueLatLngs.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={`Marker ${index}`}
          testID={`marker-${index}`}
        />
      ))}
    </MapView>
  );
}
