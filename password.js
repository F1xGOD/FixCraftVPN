console.log("STARTED")
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
            window.location.replace('https://fixcraftvpn.onrender.com/login')             
      }
    }
     
  
checkCookie();
