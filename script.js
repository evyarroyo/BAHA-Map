mapboxgl.accessToken = 'pk.eyJ1IjoiZXZ5YXJyb3lvIiwiYSI6ImNtaDFheDZxYzByNzBkaXE0eHQyaTlnOXMifQ.V0TiRWsiWhV2Jx4Hmp3KGQ';


const map = new mapboxgl.Map({
  container: 'map', // https://api.mapbox.com/mapbox-gl-js/v3.15.0/mapbox-gl.js 
  style: 'mapbox://styles/evyarroyo/cmh9upyyd00r001sr8hr4841n', // Your Style URL goes here 
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 11 // starting zoom, again you can choose the level you'd like.
    });
map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/evyarroyo/BAHA-Map/refs/heads/main/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
        
    }); 
     map.on('click', 'points-layer', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;
    const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p> 
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p> 
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>;
        `; 
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });

      // Change cursor to pointer when hovering over points
      map.on('mouseenter', 'points-layer', () => {
              map.getCanvas().style.cursor = 'pointer';
      });

      // Change cursor back when leaving points
      map.on('mouseleave', 'points-layer', () => {
            map.getCanvas().style.cursor = '';
      });       
  });
  ``
