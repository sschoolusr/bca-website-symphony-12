import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [85.1376, 25.6100], // Patna coordinates
      zoom: 14
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([85.1376, 25.6100])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="space-y-4">
      {!mapboxToken && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            className="w-full p-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">
            Get your token at <a href="https://mapbox.com/" className="text-tech-purple hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="h-[400px] rounded-lg shadow-lg" />
    </div>
  );
};

export default MapComponent;