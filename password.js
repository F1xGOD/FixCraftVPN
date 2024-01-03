console.log("STARTED")
$.getJSON(`https://networkcalc.com/api/encoder/${password}?encoding=base64`,
        function (data) {
            var dec = data.encoded;
            )
const currentUrl = window.location.href;
//window.history.pushState("Forbidden", "403 Forbidden", "/");
var newContent='<html><head><title>PLEASE LOGIN</title></head><body></body></html>';
function ReplaceContent(NC) {
    document.open();
    document.write(NC);
    document.close();
      }
var tries = 6
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let pass = getCookie("passwordstate");
  if (pass === "passed") {
    console.log("Session Login")    
  } else {
    if(tries===6){
      var password = prompt("Please Enter the Password.");
      if (password === ""){
          tries=tries-1
          console.log("Tries Decreased!")
          if(tries===0){
                window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
              }else{
                checkCookie();
              }
      }else{
            var dec = data.encoded;
            if(dec==="MjQxMjE5ODg="){
              console.log("PASS!")
              setCookie("passwordstate","passed",14)
              location.reload;
            }else{
              tries=tries-1
              console.log("Tries Decreased!")
              if(tries===0){
                window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
              }else{
                checkCookie();
              }
            };
      }
    }else{
      var password = prompt(`Please Enter the Password. (${tries} Attemts Left)`);
      if (password === ""){
          tries=tries-1
          console.log("Tries Decreased!")
          if(tries===0){
                window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
              }else{
                checkCookie();
              }
      }else{
          
  		var dec = data.encoded;
            if(dec==="MjQxMjE5ODg="){
              console.log("PASS!")
              setCookie("passwordstate","passed",14)
              location.reload;
            }else{
              tries=tries-1
              console.log("Tries Decreased!")
              if(tries===0){
                window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
              }else{
                checkCookie();
              }
            };
      }
    }
     }
  }
checkCookie();
