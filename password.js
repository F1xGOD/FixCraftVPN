console.log("STARTED")
import * as $ from './jquery.js';
  var password = prompt("Please enter the password.");
  $.getJSON(`https://networkcalc.com/api/encoder/${password}?encoding=base64`,
        function (data) {
            var dec = data.encoded;
            if(dec==="MjQxMjE5ODg="){
              console.log("PASS!")
              document.cookie = "passwordstate=passed";
              location.reload;
            }else{
              console.log("FAIL!")
              window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
            };})
