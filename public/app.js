

var uploadform = document.getElementById("upload-form");

uploadform.addEventListener("submit", function(e) {

  e.preventDefault();

  var files = document.getElementById("files").files;

  var data = new FormData();

  data.append("picture", files[0]);

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://file-app.stamplayapp.com/api/cobject/v1/restaurant', true);

  xhr.onload = function(e) {
    if(xhr.status >= 200 && xhr.status < 400) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(xhr.status + " (" + xhr.statusText + ")" + ": " + xhr.responseText);
    }
  };
xhr.send(data);  
});
