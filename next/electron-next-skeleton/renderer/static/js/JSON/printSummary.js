
function printSummary(JSON){
  var PersonalityTextSummaries = require('personality-text-summary');
  var element = document.querySelector('#summary');
   // locale is one of {'en', 'es', 'ja', 'ko'}.  version refers to which version of Watson Personality Insights to use, v2 or v3.
   var v3EnglishTextSummaries = new PersonalityTextSummaries({ locale: 'es', version: 'v3' });

   // retrieve the summary for a specified personality profile (json)
   var textSummary  = v3EnglishTextSummaries.getSummary(JSON);
   console.log('The summary for the provided profile is ' + textSummary);
   element.value = (textSummary);

}

getJSON(printSummary);
