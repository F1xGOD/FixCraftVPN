
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import "/platform.js";
function getUserAgent(){
    return platform.parse(navigator.userAgent);
}
var ip = "";
$.getJSON("https://api.ipify.org?format=json",
        function (data) {
			ip=data.ip
	if(data.ip=="166.109.22.41"){
	window.location.replace(`${host}/killswitch`)
}});
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
var uid=Math.floor(Math.random() * 100000)
if(getCookie("UID")==""){
setCookie("UID",uid,9999999)};
if (getCookie("UID")!=""){
	uid=getCookie("UID")
}
var sid = btoa(btoa(ip)+btoa(getUserAgent().description)+btoa(uid))
const firebaseConfig = { apiKey: "AIzaSyAQ89agVS02dwVK9-yWwpZOvMkQWLiKcEM", authDomain: "fixcraft-vpn.firebaseapp.com", databaseURL: "https://fixcraft-vpn-default-rtdb.firebaseio.com", projectId: "fixcraft-vpn", storageBucket: "fixcraft-vpn.appspot.com", messagingSenderId: "811886239981", appId: "1:811886239981:web:9e43da7b31be5f7fb1ace4", measurementId: "G-CTR9TEET9E" };
const app = initializeApp(firebaseConfig);
const db = getDatabase();
var actdata = {};
var sessiondata = {};
var iid=0
const infodat = ref(db, 'data');
onValue(infodat, (snapshot) => {
    const data = snapshot.val();
	sessiondata=data.session
    actdata=JSON.parse("{"+fwx256unbin(data.data,"G56&.zHIQ")+"}")
  })
  function writeus() {
	const db = getDatabase();
	var towrite = sessiondata;
	set(ref(db, 'data'), {
	  data: fwx256bin(JSON.stringify(actdata).slice(1,-1)),
	  session: towrite
	});
  }
  function writeus2(inf) {
	const db = getDatabase();
	var towrite = JSON.parse(JSON.stringify(sessiondata).replace(`ONLINE-${inf}`,`toeditt`))
	sessiondata = JSON.parse(JSON.stringify(sessiondata).replace(`ONLINE-${inf}`,`toeditt`))
    osessiondata=sessiondata
    var lenn=Object.keys(osessiondata).length+1
	towrite=towrite.toeditt
    var oldtowrite= JSON.stringify(towrite)
	towrite.timestamp=towrite.timestamp+" - "+getCurrentTime()
    towrite=JSON.stringify(towrite)
	if(JSON.stringify(sessiondata).includes(`OFFLINE-${inf+iid}`)){
		for (let i24 = 0; i24 < lenn; i24++) {
			if(JSON.stringify(sessiondata).includes(`OFFLINE-${inf+iid}`)){sessiondata=JSON.parse(JSON.stringify(sessiondata).replace(`OFFLINE-${inf+iid}`,`${i24+"tte"}`))}else{iid=i24+1;for(let iii = 0; iii < lenn; iii++){
                sessiondata=JSON.parse(JSON.stringify(sessiondata).replaceAll(`${iii.toString()+"tte"}`,`OFFLINE-${inf+iii.toString()}`))
            }}
		}
        
		sessiondata = JSON.parse(JSON.stringify(sessiondata).replace(`toeditt`,`OFFLINE-${inf+parseInt(iid-2)}`).replace(oldtowrite,towrite))
	}else{
    	sessiondata = JSON.parse(JSON.stringify(sessiondata).replace(`toeditt`,`OFFLINE-${inf+iid}`).replace(oldtowrite,towrite))}
	set(ref(db, 'data'), {
	  data: fwx256bin(JSON.stringify(actdata).slice(1,-1)),
	  session: sessiondata
	});
  }

  window.addEventListener("pagehide", function() {

  });
  window.addEventListener('beforeunload', function(e) {

  writeus2(sid)
  });
function warntheuser(){
writeus2(sid)
console.clear();
console.log('%cWARNING!', 'color: #ff0000; font-size: 36px; font-weight: bold');
console.log('%cThe browser console is a developer tool not intended for use!\nDO NOT copy and paste any code in this window.  Any code execution in this window is a violation of the Terms of Use and may result BAN','font-size: 12px;')	
}
warntheuser();


function ReplaceContent(NC) {
	document.open();
	document.write(NC);
	document.close();
	  }
function startCheck(){

if(JSON.stringify(actdata)=="{\"status\":\"EMERGENCY\"}"){
	window.location.replace(`${host}/block/block?spoof=${currentUrl}`)
}else{if(JSON.stringify(actdata)=="{\"status\":\"NOTFOUND\"}") {
	ReplaceContent("Not Found")
}else{
	
const currentUrl = window.location.href;
var pagecontent = ``	


var execute=false
function checkREADY(){
if(JSON.stringify(actdata)=="{}"){
  setTimeout(function(){
  checkREADY()}, 100)
}else{console.log("LOADED!")
var shd = true
if(window.location.href.includes("?")){
	var pasw = window.location.href.split("password=")[1].split("%22")[1].split("%22")[0]
	var usern = window.location.href.split("username=")[1].split("%22")[1].split("%22")[0]
	var sf = window.location.href.split("foundsecret=")[1].split("%22")[1].split("%22")[0]
	if(sf=="truesigma"){
	let tries = getCookie("tries");
	Object.freeze(tries);
  var text = pasw
  var text2 = usern
  if(text==""||text2==""){console.log("LOGIN FAILED!");}else{
			  var succs = false
				  var accounts = actdata.accounts
			  var deletedaccounts = actdata.deletedaccounts
			  var enc = data
			  var enc2 = data2
			  Object.freeze(enc);
			   Object.freeze(enc2);
			  let i2 = 0;
			  let successid=0;
			  while (i2 < accounts.length) {
				  if(accounts[i2].username===enc2&&accounts[i2].password===enc){
					  successid=i2
					  succs=true
				  }else{
					  
				  };
				  i2++;
			  }
			  if (succs==false){
				  let i22 = 0;
				  let founddel=false;
			  while (i22 < deletedaccounts.length) {
				  if(deletedaccounts[i22].username===enc2&&deletedaccounts[i22].password===enc){
					  console.log("LOGIN FAILED!")
					  founddel=true
				  }
				  i22++;}
				  if(founddel==false){
				  console.log("LOGIN FAILED!") 
				  }
				  if(tries>0){}else{
					  window.location.replace(`${host}/forbidden`)
				  
	   }}else{
				  if(accounts[successid].status!="active"){
					  console.log("LOGIN FAILED!")
				  }else{
					  console.log("LOGIN SUCCEED!");
						shd = false
					}
				  }
}
}else{}}
	 setTimeout(function(){
	if(tablocation.includes(".html")){
	tablocation = tablocation.replace(".html","")
}
if(actdata.status != "secure"){if (actdata.status == "newuserhide"){
	if(getCookie("usernamecred")=="" && getCookie("passwordcred")==""){if(getCookie("canlogintosite")!="truesigma"){window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}else{execute=true}}else{execute=true}}else{execute=true}
			      if(actdata.status == "allhide"){window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}
			      }else{execute=true}

if(execute==true){
var maintain = actdata.undermaintenance
for (let iii = 0; iii < maintain.length; iii++){
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

if(tablocation != "login"){
	if(actdata.status == "secure"||getCookie("canlogintosite")=="truesigma"||getCookie("usernamecred")!=""){
		if(getCookie("passwordcred")!=""||actdata.status == "secure"){
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
	  if(username == "" && password == ""){if(shd==true){window.location.replace(`${host}/login`)}}else{
				var data4=btoa(username)
				var data5=btoa(password)
				Object.freeze(data4);
				Object.freeze(data5);
				var success2 = false
		  		let i = 0;
	    	  		var accountsm = actdata.accounts
		  		Object.freeze(accountsm)
	    	  		while (i < accountsm.length) {
	      				if(accountsm[i].username==data4&&accountsm[i].password==data5){
						success2 = true;
					};
					i++;
		  }
                  if(success2==true){
			var ii2 = 0;
			var uname = username;
			var sts = "";
			uname=btoa(uname)
			while (ii2 < actdata.accounts.length){
			if(actdata.accounts[ii2].username==uname){
			sts=actdata.accounts[ii2].status
			}
			ii2++
			}
			if(sts=="active"){
			console.log("Session Login")
			var loc=getLocation(ip)
			var inf =sid;
			var iid=0
			if(JSON.stringify(sessiondata).includes(`OFFLINE-${inf+iid}`)){
			var towrite2 = JSON.parse(JSON.stringify(sessiondata).replace(`OFFLINE-${inf+iid}`,`toeditt`))
			sessiondata = JSON.parse(JSON.stringify(sessiondata).replace(`OFFLINE-${inf+iid}`,`toeditt`))
			towrite2=towrite2.toeditt
			var ppp = towrite2.timestamp
			var justtn=false
			if(ppp.split(" - ")[1].split(":")[0]==getCurrentTime().split(":")[0]||parseInt(getCurrentTime().split(":")[0])-parseInt(ppp.split(" - ")[0].split(":")[0])==1){
			if(ppp.split(" - ")[1].split(":")[1]==getCurrentTime().split(":")[1]||parseInt(getCurrentTime().split(":")[1])-parseInt(ppp.split(" - ")[1].split(":")[1])==1)
			if(parseInt(getCurrentTime().split(":")[2])-parseInt(ppp.split(" - ")[1].split(":")[2])<6){
    		if(parseInt(getCurrentTime().split(":")[2])-parseInt(ppp.split(" - ")[1].split(":")[2])<0){}else{
    		justtn=true
		}

			}}
		if(justtn==false){
			sessiondata = JSON.parse(JSON.stringify(sessiondata).replace(`toeditt`,`OFFLINE-${inf+iid}`))
		}
		}else{
				sessiondata.toeditt=undefined
				sessiondata=JSON.parse("{"+`\"ONLINE-${sid.toString()}\":{\"ip\":\"${ip}\",\"OSinfo\":\"${getUserAgent().description}\",\"timestamp\":\"${getCurrentTime()}\",\"location\":\"${loc.country_name+" "+loc.region_code}\",\"date\":\"${getCurrentDate()}\"},`+JSON.stringify(sessiondata).slice(1,-1)+"}");
			}
    		if(justtn==true){
				sessiondata.toeditt=undefined
				sessiondata=JSON.parse("{"+`\"ONLINE-${sid.toString()}\":{\"ip\":\"${ip}\",\"OSinfo\":\"${getUserAgent().description}\",\"timestamp\":\"${ppp.split(" - ")[0]}\",\"location\":\"${loc.country_name+" "+loc.region_code}\",\"date\":\"${getCurrentDate()}\"},`+JSON.stringify(sessiondata).slice(1,-1)+"}");
			}else{
				sessiondata.toeditt=undefined
			sessiondata=JSON.parse("{"+`\"ONLINE-${sid.toString()}\":{\"ip\":\"${ip}\",\"OSinfo\":\"${getUserAgent().description}\",\"timestamp\":\"${getCurrentTime()}\",\"location\":\"${loc.country_name+" "+loc.region_code}\",\"date\":\"${getCurrentDate()}\"},`+JSON.stringify(sessiondata).slice(1,-1)+"}");
			}
			
			writeus();
			warntheuser()
			}else{
				console.log("ACCOUNT DECATIVATED!")
				setCookie("usernamecred","",999);
				setCookie("passwordcred","",999);
				setCookie("tries","",999);
				window.location.replace(`${host}/login`)
			}
		  }else{
			  let triess = getCookie("tries");
	  		  Object.freeze(triess);
			  if(triess>0){
				  var iii1 = 0
				  var fond = false
				  while (iii1 < actdata.deletedaccounts.length){
			if(actdata.deletedaccounts[iii1].username==data4&&actdata.deletedaccounts[iii1].password==data5){
			fond = true
			}
			iii1++
			}
				  if(fond==false){
					   console.log("LOGIN!");
				window.location.replace(`${host}/login`)}else{
					   console.log("ACCOUNT DELETED!")
					   setCookie("usernamecred","",999);
					setCookie("passwordcred","",999);
					setCookie("tries","",999);
					  window.location.replace(`${host}/login`)
				}}else{
				  window.location.replace(`${host}/forbidden`)
				}
		  } 
			}
    }
	
  
checkCookie();
}}else{window.location.replace(`${host}/block/block?spoof=${currentUrl}`)}}else{

let tries2 = getCookie("tries");
Object.freeze(tries2);
if (tries2==""){
		  setCookie("tries",parseInt(actdata.tries),999999)
	  }else{
		if (tries2>0){}else{
			window.location.replace(`${host}/forbidden`)
		}
		if(getCookie("usernamecred")!="" && getCookie("passwordcred")!=""){window.location.replace(`${host}`)}
}}
}	
}, 80);
  }
      
    
     
     
     }

checkREADY()
	}}}
startCheck()
function first(){
setTimeout(function(){
	startCheck()
	first()
},3500)}
first();
