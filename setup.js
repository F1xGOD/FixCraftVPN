var actdata = {};
$.getJSON(
  "https://purple-koala.static.domains/setup.json", function(response) {
    actdata=response
  }
).fail(function(){
  console.log("FAIL");
});
