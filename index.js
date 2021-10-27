

/*
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:e53201b5-5e4f-4813-8e2b-8debaa85540a',
});
*/


function init(){
    const jsondata = document.querySelector('.sn-jsondata');

    let getReq = new Request('data.json');
    
    fetch(getReq)
    .then(function(response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(function(response) {
  
      jsondata.innerHTML = response[0].client.name;
    });


    
}
init()