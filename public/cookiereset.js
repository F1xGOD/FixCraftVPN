function setCookie(cname,cvalue,exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          let expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
function clearCache() {
          localStorage.clear();
        }
setCookie("passwordcred","",999999);
setCookie("usernamecred","",999999);
setCookie("tries","",999999);
setCookie("canlogintosite","",999999);
clearCache()
