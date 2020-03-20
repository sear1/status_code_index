const request = require('request-promise');
request.debug = 1;

(async () => {

    console.log('Initial Request');

    try{
    let status = await request({
        //expand with more statuses
        uri: 'https://httpbin.org/status/400',
        resolveWithFullResponse: true
    });
    } catch(response){
        if(response.statusCode == 300){
            console.log('Everything is ok');
        }else {
            console.log(`Something is off: ${response}`);
            process.exit(1);
        }
    ///console response
        //debugger;
    }
})();