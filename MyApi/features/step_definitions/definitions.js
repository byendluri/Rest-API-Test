const { Given, When, Then } = require('cucumber');
const got = require('leanpro.got');
const assert = require('assert');

var jsonFormat = {
    headers: { 'Content-Type': 'application/json' },
    json: true
};

///// Your step definitions /////
Given('Get the service api {string} and i should get the {string}', async function (url, expectval) {
    console.log(url);
    result = await got.get(url, jsonFormat);
    console.log(result);

    var data = result.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});


Given("Post to service api {string} with {string} and I should get the {string}", async function (url, data, expectval) {
    var option = {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: JSON.parse(data)
    };

    res = await got.post(url, option);
    var data = res.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});


Given("Update to service api {string} with {string} and I should get the {string}", async function (url, data, expectval) {
    var option = {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: JSON.parse(data)
    };

    res = await got.put(url, option);
    var data = res.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});
