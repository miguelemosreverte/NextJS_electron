

function getJSON(doThisWithJSON){
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          doThisWithJSON(JSON.parse(xmlhttp.responseText));
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };

    xmlhttp.open("GET", 'http://0.0.0.0:5000/test_json', true);
    xmlhttp.send();

}
