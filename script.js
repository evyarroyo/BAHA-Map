mapboxgl.accessToken = 'pk.eyJ1IjoiZXZ5YXJyb3lvIiwiYSI6ImNtaDFheDZxYzByNzBkaXE0eHQyaTlnOXMifQ.V0TiRWsiWhV2Jx4Hmp3KGQ';


const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/evyarroyo/cmh9upyyd00r001sr8hr4841n', // Your Style URL goes here 
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });