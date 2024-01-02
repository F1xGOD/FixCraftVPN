console.log("STARTED")
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
  if (pass != "") {
    
  } else {
     var password = prompt("Please enter the password.");
  		$.getJSON(`https://networkcalc.com/api/encoder/${password}?encoding=base64`,
        function (data) {
            var dec = data.encoded;
            if(dec==="MjQxMjE5ODg="){
              console.log("PASS!")
              setCookie("passwordstate","passed",365)
              location.reload;
            }else{
              console.log("FAIL!")
              window.location.replace('https://fixcraftvpn.onrender.com/forbidden')
            };})
     }
  }
