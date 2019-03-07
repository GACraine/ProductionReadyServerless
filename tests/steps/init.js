'use strict';

const co = require('co');
const Promise = require('bluebird');


let initialized = false;

let init = co.wrap(function* (){
    if (initialized) {
        return;
    }
    process.env.restaurants_api = "https://5bmu4bthnk.execute-api.us-east-1.amazonaws.com/dev/restaurants";
    process.env.restaurants_table = "restaurants";
    process.env.AWS_REGION = "us-east-1";
    process.env.cognito_client_id = "test_cognito_client_id";
    process.env.cognito_user_pool_id = "us-east-1_x3YNcLTvp";
    process.env.cognito_server_client_id = "7eo1fbellsgf09o23s1s9s5jsc";


    
console.log("AWS credentials loaded");

initialized = true;
});

module.exports.init = init;