console.log("STARTED")

const currentUrl = window.location.href;
var pagecontent = ``
function ReplaceContent(NC) {
            document.open();
            document.write(NC);
            document.close();
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

function setCookie(cname,cvalue,exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          let expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
var execute=false
function checkREADY(){
if(JSON.stringify(actdata)=="{}"){
  setTimeout(function(){
   console.log(actdata)
  checkREADY()}, 200)
}else{console.log("LOADED!")}
}
checkREADY()
setTimeout(function(){
console.log(actdata)
	if(tablocation.includes(".html")){
	tablocation = tablocation.replace(".html","")
}
if(actdata.status != "secure"){if(getCookie("canlogintosite")!="truesigma"){
			      if (actdata.status == "newuserhide"){if(getCookie("usernamecred")=="" && getCookie("passwordcred")==""){window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}else{execute=true}}}else{execute=true}
			      if(actdata.status == "allhide"){window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}
			      }else{execute=true}
console.log(execute)
if(execute==true){
var maintain = actdata.undermaintenance
for (let iii = 0; iii < maintain.length; iii++){
console.log(maintain[iii].location)
if(maintain[iii].location==tablocation){
	console.log("UNDER MAINTENANCE!")
	var newContent2='<title>Site Maintenance</title> <link rel="icon" href="https://x0.at/KdHZ.png"> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet"> <style>   html, body { padding: 0; margin: 0; width: 100%; height: 100%; }   * {box-sizing: border-box;}   body { text-align: center; padding: 0; background: #d6433b; color: #fff; font-family: Open Sans; }   h1 { font-size: 50px; font-weight: 100; text-align: center;}   body { font-family: Open Sans; font-weight: 100; font-size: 20px; color: #fff; text-align: center; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}   article { display: block; width: 700px; padding: 50px; margin: 0 auto; }   a { color: #fff; font-weight: bold;}   a:hover { text-decoration: none; }   svg { width: 75px; margin-top: 1em; } </style> <article>     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.24 202.24"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path class="cls-1" d="M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z"/><path class="cls-1" d="M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z"/></g></g></svg>     <h1>We&rsquo;ll be back soon!</h1>     <div>  <p>Sorry for the inconvenience. We&rsquo;re performing some maintenance at the moment. we&rsquo;ll be back up shortly!</p>     <p>&mdash; The FixCraft Team</p>     </div> </article>';
        
	ReplaceContent(newContent2);
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
    		link = document.createElement('link');
    		link.rel = 'icon';
    		document.head.appendChild(link);
	}
	link.href = 'https://x0.at/KdHZ.png';
}
}
console.log("DONE!")

if(tablocation != "login"){
	if(actdata.status == "secure"||getCookie("canlogintosite")=="truesigma"){
        //window.history.pushState("Forbidden", "403 Forbidden", "/");

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
}else{window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}}else{
	
let tries2 = getCookie("tries");
Object.freeze(tries2);
if (tries2==""){
		  setCookie("tries",parseInt(actdata.tries),999999)
	  }else{
		if (tries2>0){}else{
			window.location.replace(`${host}/forbidden`)
		}
}}
}	
}, 80);

