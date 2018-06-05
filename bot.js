console.log('bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var theVerbData = [];
var theVerbs = [];
var theVerb;

var theApologies = ['Please Refrain', 'It woudl be great if yo udidnt do that', "another thing"];
// var params = {
//   q: 'rainbow',
//   count: 2
// }
//
// T.get('search/tweets', params, gotData);
//
//  function gotData (err, data, response) {
//    var tweets = data.statuses;
//    for (var i = 0; i< tweets.length; i++) {
//        console.log(tweets[i].text);
//    }
//

//tweetIt();
//setInterval(tweetIt, 1000*20)
// function followed(eventMsg){
//   console.log("follow evert");
//   var name = eventMsg.source.name;
//   var screenName = eventMsg.source.screen_name;
//   tweetIt('@' + screenName + 'Thank you for following me');
// }

var stream = T.stream('user');
stream.on('tweet', tweetEvent);
//
// tweetEvent();
//
function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writeFile("tweet.json", json);
var fs = require('fs');
var theJSON = JSON.parse(fs.readFileSync('verb2.json', 'utf8'));
// console.log(theJSON);

// loop through verg json
for (var i = 0; i < theJSON.verbs.length; i++) {
    theVerbData.push(theJSON.verbs[i]);
    theVerbs.push(theVerbData[i].present);
}

var theRandom = Math.floor(Math.random() * theVerbs.length);
theVerb = theVerbs[theRandom];

  var replyto = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;
  console.log('replyto: ' + replyto);
  console.log('text: ' + text);
  console.log('reply: ' + replyto);

// console.log(replyto + '' + from);
  if (replyto === 'brcnyb') {
    // var newtweet = '@' + from + 'thank you';
    var newtweet = 'PLEASE DO NOT ' + theVerb;
    tweetIt(newtweet);
    console.log(newtweet);
  }
}
//
//
function tweetIt(txt) {

//var r = Math.floor(Math.random()*100);
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

   function tweeted (err, data, response) {
     if (err) {
       console.log (" sth went wrong!");
     } else {
       console.log("it works!!");
     }
  }
}
