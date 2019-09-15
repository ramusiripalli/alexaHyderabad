'use strict';

var util = require('util');
var moment = require('moment');
var weather1 = require('weather-js');
const uuid = require('uuid');

module.exports = {
  weather
};

function weather(req,res){
var response = {};
response.uid = "urn:uuid:" + uuid.v4();
response.updateDate = new Date();
response.titleText = "Update For Hyderabad Weather";


  weather1.find({search: 'Hyderabad,Telangana', degreeType: 'C'}, function(err, result) {
    if(err) {
      response.mainText = "hello from weather. we are facing technical issue right now. please try again sometime";
      response.redirectionUrl = "http://ramusiripalli.xyz";
      res.json(response);

      console.log(err);}
    else{

    var day0weather = result[0].forecast[0].skytextday;
    console.log("todays weather " + day0weather);
    var day1weather = result[0].forecast[1].skytextday;
    console.log("tomorrows weather " + day1weather);
    var day2weather = result[0].forecast[2].skytextday;
    console.log("third day weather " + day2weather);
    var day3weather = result[0].forecast[3].skytextday;
    console.log("fourth day weather " + day3weather);
    var day4weather = result[0].forecast[4].skytextday;
    console.log("fifth day weather " + day4weather);
    response.redirectionUrl = "http://ramusiripalli.xyz";
    response.mainText = "Hello from weather. Todays weather in Hyderabad is  expected to be " + day0weather + ". Tomorrows weather in Hyderabad will be expected to be " +day1weather + ". Third day weather in Hyderabad will be Expected to be  " + day2weather + " . Fourth day weather in Hyderabad will be  expected to be" + day3weather + ". Fifth day weather in Hyderabad will be expected to be " + day4weather;
    res.json(response);
    }
   
  });
}
