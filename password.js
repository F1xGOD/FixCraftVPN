console.log("STARTED")
console.log(host)
const currentUrl = window.location.href;
if(actdata.status != "secure"){if (actdata.status =="hide"){window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}}
        //window.history.pushState("Forbidden", "403 Forbidden", "/");
        var newContent='<html><head><title>PLEASE LOGIN</title></head><body></body></html>';
        function ReplaceContent(NC) {
            document.open();
            document.write(NC);
            document.close();
              }

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
          let password = getCookie("passwordcred");
	  let username = getCookie("usernamecred");
	  let tries = getCookie("tries");
	  Object.freeze(tries);
	  Object.freeze(password);
	  Object.freeze(username);
	  if (tries==""){
		  setCookie("tries",parseInt(actdata.tries),365)
	  }else{
		if (tries>0){}else{
			window.location.replace(`${host}/forbidden`)
		}
	  }
	  if(username == "" && password == ""){window.location.replace(`${host}/login`)}else{
	  $.getJSON(`https://networkcalc.com/api/encoder/${username}?encoding=base64`,
            	function (data4) {
			$.getJSON(`https://networkcalc.com/api/encoder/${password}?encoding=base64`,
            		function (data5) {
				Object.freeze(data4);
				Object.freeze(data5);
				var success2 = false
		  		let i = 0;
	    	  		var accountsm = actdata.accounts
		  		Object.freeze(accountsm)
	    	  		while (i < accountsm.length) {
	      				if(accountsm[i].username==data4.encoded&&accountsm[i].password==data5.encoded){
						success2 = true;
					};
					i++;
		  }
                  if(success2==true){
			console.log("Session Login")
		  }else{
			  let triess = getCookie("tries");
	  		  Object.freeze(triess);
			  if(triess>0){
				window.location.replace(`${host}/login`)}else{
				  window.location.replace(`${host}/forbidden`)
				}
		  } 
			})})}
    }
     
  
checkCookie();
