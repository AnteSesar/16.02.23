var text = " Lorem ipsum dolor sit amet";

var length = text.length;
//console.log("duljina teksta = " + length);

var wordSit = text.substring(19, 19+3);
//console.log(wordSit);

text = text.replace("amet", "elit");
//console.log(text);

var newText = text + ", consecutor adipising elit";
//console.log(newText);

text = text.toUpperCase();
//console.log(text);

text = text.trim();
console.log(text);
return;

