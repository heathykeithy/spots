

/*
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:e53201b5-5e4f-4813-8e2b-8debaa85540a',
});
*/
appid ="w9OOL9LPB577Gdp1ErRY"
mapkey = "yC3keZ6B7Ulu61E91UhC6tvCYI1qJRhqRX7rwZIRpX0"


// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': "t7YDcqr_XMRRp3zWHZl3wPFYDXJB_xtcNkSZ6Ky2vFM"
  });

  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();




function init(){
    const jsondata = document.querySelector('.sn-jsondata');

    let myRequest = new Request('data.json');
    
    fetch(myRequest)
    .then(function(response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(function(response) {
        // Instantiate (and display) a map object:
    var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 19,
      center: { lng: response[0].spots[0].geo.long, lat: response[0].spots[0].geo.lat }
    });
      jsondata.innerHTML = response[0].client.name;
    });


    
}
init()