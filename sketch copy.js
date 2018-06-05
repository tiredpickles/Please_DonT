let rawData;
let theData = [];
let thePresent = [];
let theMessage;
let verbData;
let verb;
var randomVerbURL = "https://api.wordnik.com/v4/words.json/randomWord?" +
"&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
"&includePartOfSpeech=verb" + "&minLength=5&maxLength=-1" +
"&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

function preload() {
    rawData = loadJSON('verb.json');
}

function setup() {
    verbData = loadJSON(randomVerbURL);
    console.log(verbData);
    createCanvas(windowWidth, windowHeight);
    // console.log(rawData.verbs);
    for (var i = 0; i < rawData.verbs.length; i++) {
        theData.push(rawData.verbs[i]);
        thePresent.push(theData[i].present);
    }
    theMessage = random(thePresent);
}

function draw() {
    background(100);
    textSize(50);
    text("Please don't " + theMessage, 50, 200);
    text("Please don't " + verb, 50, 400);
}
