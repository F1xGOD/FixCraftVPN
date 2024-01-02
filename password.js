console.log("STARTED")
import * as $ from './jquery.js';
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if(getCookie("state")!=="pass"){
  var password = prompt("Please enter the password.");
  $.getJSON(`https://networkcalc.com/api/encoder/${password}?encoding=base64`,
        function (data) {
            var dec = data.encoded;
            if(dec==="MjQxMjE5ODg="){
              console.log("PASS!")
              document.cookie = "state=passed";
              location.reload;
            }else{
              console.log("FAIL!")
              window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
            };})}
