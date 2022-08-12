var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "Robo3t",
    "dataSource": "ADSI2364482",
    "filter": { "Nombre":"LUIS AVILES"},
    "update": {
        "$set": {
            "Nombre":"Luis aviles"
        }
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-cmiel/endpoint/data/v1/action/updateOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'Hnkke9l3K0fnNDFrgO5pptXfN0ITe1fckDXKaApJxMqRnOPLC4RQpU6U2a3vQ1eO',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });