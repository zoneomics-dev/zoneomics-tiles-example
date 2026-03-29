import './styles.css';
import { useState } from 'react';
import { TileLayer, MVTLayer } from '@deck.gl/geo-layers';
import Deck from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';

export default function App() {
  const [lat, setLat] = useState(26.6245438);
  const [lng, setLng] = useState(-81.8587845);
  const [latLng, setLatLng] = useState({ lat: 26.6245438, lng: -81.8587845 });
  return (
    <div className='App'>
      <h1>Zoneomics Tiles API example</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '14px',
          width: 'max-content',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <input
            placeholder='lat'
            value={lat}
            onChange={(e) => {
              setLat(e.target.value);
            }}
          />
          <input
            placeholder='lng'
            value={lng}
            onChange={(e) => {
              setLng(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            if (Number(lat) && Number(lng)) {
              setLatLng({ lat, lng });
            }
          }}
        >
          Submit
        </button>
      </div>
      <div
        style={{ minHeight: '80vh', maxHeight: '80vh', position: 'relative' }}
      >
        <Deck
          initialViewState={{
            longitude: Number(latLng.lng),
            latitude: Number(latLng.lat),
            zoom: 16,
          }}
          controller
          layers={[
            new TileLayer({
              id: 'TileLayer',
              data: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
              maxZoom: 19,
              minZoom: 0,
              renderSubLayers: (props) => {
                const { boundingBox } = props.tile;

                return new BitmapLayer(props, {
                  data: null,
                  image: props.data,
                  bounds: [
                    boundingBox[0][0],
                    boundingBox[0][1],
                    boundingBox[1][0],
                    boundingBox[1][1],
                  ],
                });
              },
              pickable: true,
            }),
            new MVTLayer({
              id: 'MVTLayer',
              data: `https://api.zoneomics.com/v2/tiles?x={x}&y={y}&z={z}&api_key=${process.env.REACT_APP_API_KEY}`,
              minZoom: 0,
              maxZoom: 20,
              stroked: true,
              visible: true,
              getLineColor: [204, 204, 204],
              getFillColor: (f) => {
                function hashStringToInt(str) {
                  var hash = 0;
                  for (var i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                  }
                  return hash;
                }
                function intToRGBA(i, _alpha) {
                  const r = (i >> 16) & 0xff;
                  const g = (i >> 8) & 0xff;
                  const b = i & 0xff;
                  return [r, g, b, 190];
                }
                function stringToColor(str) {
                  var hash = hashStringToInt(str);
                  var hex = intToRGBA(hash, 0.8);
                  return hex;
                }
                const color = stringToColor(f.properties.zone_code);
                return color;
              },
            }),
          ]}
        ></Deck>
      </div>
    </div>
  );
}
