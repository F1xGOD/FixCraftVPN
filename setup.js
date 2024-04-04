function fwx256bin(string){
  function binary(stringt){return stringt.split('').map(function (char) {
    return char.charCodeAt(0).toString(2);
}).join(' ');}
function texttohex(str){
  var hex="";
  for(var i=0;i<str.length;i++) {
    hex += ''+str.charCodeAt(i).toString(16);
}
return hex
}
function reversebin(bin) {
  var fin=bin.replaceAll("1","3");
  fin = fin.replaceAll("0","2");
  fin = fin.replaceAll("2","1");
  fin = fin.replaceAll("3","0");
  return fin;
}

  function code(sttr){
    sttr=sttr.replaceAll("a","e*1")
    sttr=sttr.replaceAll("b","&hl")
    sttr=sttr.replaceAll("c","*&Gs")
    sttr=sttr.replaceAll("d","*YHA")
    sttr=sttr.replaceAll("e","K5a{")
    sttr=sttr.replaceAll("f","(*HGA(")
    sttr=sttr.replaceAll("g","*&GD2")
    sttr=sttr.replaceAll("h","+A")
    sttr=sttr.replaceAll("i","(aj*a")
    sttr=sttr.replaceAll("j","g%")
    sttr=sttr.replaceAll("k","&G{A")
    sttr=sttr.replaceAll("l","/IHa")
    sttr=sttr.replaceAll("m","*(oa")
    sttr=sttr.replaceAll("n","*KA^7")
    sttr=sttr.replaceAll("o",")A")
    sttr=sttr.replaceAll("p","*H)PA-G")
    sttr=sttr.replaceAll("q","*YFSA")
    sttr=sttr.replaceAll("r","OA")
    sttr=sttr.replaceAll("s","{9sl")
    sttr=sttr.replaceAll("t","*(HARR")
    sttr=sttr.replaceAll("u","O&A6u")
    sttr=sttr.replaceAll("v","n):u")
    sttr=sttr.replaceAll("w","&^F*GV")
    sttr=sttr.replaceAll("x","(*HskW")
    sttr=sttr.replaceAll("y","{JM")
    sttr=sttr.replaceAll("z","JA")
    sttr=sttr.replaceAll("A","(&Tav")
    sttr=sttr.replaceAll("B","t5")
    sttr=sttr.replaceAll("C","*TGA3")
    sttr=sttr.replaceAll("D","*GABD")
    sttr=sttr.replaceAll("E","{A")
    sttr=sttr.replaceAll("F","pW")
    sttr=sttr.replaceAll("G","*UAK(")
    sttr=sttr.replaceAll("H","&GH+")
    sttr=sttr.replaceAll("I","&AN)")
    sttr=sttr.replaceAll("J","L&VA")
    sttr=sttr.replaceAll("K","(HAF5")
    sttr=sttr.replaceAll("L","&F*Va")
    sttr=sttr.replaceAll("M","^&FVB")
    sttr=sttr.replaceAll("N","(*HSA$")
    sttr=sttr.replaceAll("O","*IHA&GT")
    sttr=sttr.replaceAll("P","&*FAl")
    sttr=sttr.replaceAll("Q",")P{A]")
    sttr=sttr.replaceAll("R","*Ha$g")
    sttr=sttr.replaceAll("S","G)OA&")
    sttr=sttr.replaceAll("T","|Q")
    sttr=sttr.replaceAll("U","Qd&^")
    sttr=sttr.replaceAll("V","hA")
    sttr=sttr.replaceAll("W","8h^va")
    sttr=sttr.replaceAll("X","_9xlA")
    sttr=sttr.replaceAll("Y","*J")
    sttr=sttr.replaceAll("Z","*;pY&")
    sttr=sttr.replaceAll(" ","R7a{")
    sttr=sttr.replaceAll("-","}F")
    sttr=sttr.replaceAll("=","OJ)_A")
    sttr=sttr.replaceAll("+","}J")
    sttr=sttr.replaceAll("&","%A")
    sttr=sttr.replaceAll("%","y{A3s")
    sttr=sttr.replaceAll("#",".aGa!")
    sttr=sttr.replaceAll("@","l@")
    sttr=sttr.replaceAll("!","/A")
    sttr=sttr.replaceAll("^","OIp*a")
    sttr=sttr.replaceAll("*","(U")
    sttr=sttr.replaceAll("(","I*Ua]")
    sttr=sttr.replaceAll(")","{0aD")
    sttr=sttr.replaceAll("{","Av[")
    sttr=sttr.replaceAll("}","9j")
    sttr=sttr.replaceAll("[","[a)")
    sttr=sttr.replaceAll("]","*&GBA")
    sttr=sttr.replaceAll("|","]c.A")
    sttr=sttr.replaceAll("/",")*HND_")
    sttr=sttr.replaceAll("~","(&*GHA")
    sttr=sttr.replaceAll(";","K}N=O")
    sttr=sttr.replaceAll(":","YGOI&A")
    sttr=sttr.replaceAll("?","Oa")
    sttr=sttr.replaceAll(".","8y)a")
    sttr=sttr.replaceAll(">","0{a9")
    sttr=sttr.replaceAll("<","v6Yha")
    sttr=sttr.replaceAll(",","I8ys#")
    sttr=sttr.replaceAll("0","(HPA7")
    sttr=sttr.replaceAll("1","}v")
    sttr=sttr.replaceAll("2","*HAl%")
    sttr=sttr.replaceAll("3","_)JHS")
    sttr=sttr.replaceAll("4","IG(A")
    sttr=sttr.replaceAll("5","(*GFD")
    sttr=sttr.replaceAll("6","IU(&V")
    sttr=sttr.replaceAll("7","(JH*G")
    sttr=sttr.replaceAll("8","*GHBA")
    sttr=sttr.replaceAll("9","U&G*C")
    sttr=sttr.replaceAll("\"","I(a-s")
    return sttr;
  }
  return reversebin(binary(code(btoa(string))))
}
function fwx256irreversible(string){
function binary(stringt){return stringt.split('').map(function (char) {return char.charCodeAt(0).toString(2);}).join(' ');}
function reversebin(bin) {
  var fin=bin.replaceAll("1","3");
  fin = fin.replaceAll("0","2");
  fin = fin.replaceAll("2","1");
  fin = fin.replaceAll("3","0");
  return fin;
}
function bintoirr(bin){
  var res=bin.split(' ').map(bin1 => parseInt((bin1), 16)).join('')
  return res.toString();
}
  function code(sttr){
    sttr=sttr.replaceAll("a","e*1")
    sttr=sttr.replaceAll("b","&hl")
    sttr=sttr.replaceAll("c","*&Gs")
    sttr=sttr.replaceAll("d","*YHA")
    sttr=sttr.replaceAll("e","K5a{")
    sttr=sttr.replaceAll("f","(*HGA(")
    sttr=sttr.replaceAll("g","*&GD2")
    sttr=sttr.replaceAll("h","+A")
    sttr=sttr.replaceAll("i","(aj*a")
    sttr=sttr.replaceAll("j","g%")
    sttr=sttr.replaceAll("k","&G{A")
    sttr=sttr.replaceAll("l","/IHa")
    sttr=sttr.replaceAll("m","*(oa")
    sttr=sttr.replaceAll("n","*KA^7")
    sttr=sttr.replaceAll("o",")A")
    sttr=sttr.replaceAll("p","*H)PA-G")
    sttr=sttr.replaceAll("q","*YFSA")
    sttr=sttr.replaceAll("r","OA")
    sttr=sttr.replaceAll("s","{9sl")
    sttr=sttr.replaceAll("t","*(HARR")
    sttr=sttr.replaceAll("u","O&A6u")
    sttr=sttr.replaceAll("v","n):u")
    sttr=sttr.replaceAll("w","&^F*GV")
    sttr=sttr.replaceAll("x","(*HskW")
    sttr=sttr.replaceAll("y","{JM")
    sttr=sttr.replaceAll("z","JA")
    sttr=sttr.replaceAll("A","(&Tav")
    sttr=sttr.replaceAll("B","t5")
    sttr=sttr.replaceAll("C","*TGA3")
    sttr=sttr.replaceAll("D","*GABD")
    sttr=sttr.replaceAll("E","{A")
    sttr=sttr.replaceAll("F","pW")
    sttr=sttr.replaceAll("G","*UAK(")
    sttr=sttr.replaceAll("H","&GH+")
    sttr=sttr.replaceAll("I","&AN)")
    sttr=sttr.replaceAll("J","L&VA")
    sttr=sttr.replaceAll("K","(HAF5")
    sttr=sttr.replaceAll("L","&F*Va")
    sttr=sttr.replaceAll("M","^&FVB")
    sttr=sttr.replaceAll("N","(*HSA$")
    sttr=sttr.replaceAll("O","*IHA&GT")
    sttr=sttr.replaceAll("P","&*FAl")
    sttr=sttr.replaceAll("Q",")P{A]")
    sttr=sttr.replaceAll("R","*Ha$g")
    sttr=sttr.replaceAll("S","G)OA&")
    sttr=sttr.replaceAll("T","|Q")
    sttr=sttr.replaceAll("U","Qd&^")
    sttr=sttr.replaceAll("V","hA")
    sttr=sttr.replaceAll("W","8h^va")
    sttr=sttr.replaceAll("X","_9xlA")
    sttr=sttr.replaceAll("Y","*J")
    sttr=sttr.replaceAll("Z","*;pY&")
    sttr=sttr.replaceAll(" ","R7a{")
    sttr=sttr.replaceAll("-","}F")
    sttr=sttr.replaceAll("=","OJ)_A")
    sttr=sttr.replaceAll("+","}J")
    sttr=sttr.replaceAll("&","%A")
    sttr=sttr.replaceAll("%","y{A3s")
    sttr=sttr.replaceAll("#",".aGa!")
    sttr=sttr.replaceAll("@","l@")
    sttr=sttr.replaceAll("!","/A")
    sttr=sttr.replaceAll("^","OIp*a")
    sttr=sttr.replaceAll("*","(U")
    sttr=sttr.replaceAll("(","I*Ua]")
    sttr=sttr.replaceAll(")","{0aD")
    sttr=sttr.replaceAll("{","Av[")
    sttr=sttr.replaceAll("}","9j")
    sttr=sttr.replaceAll("[","[a)")
    sttr=sttr.replaceAll("]","*&GBA")
    sttr=sttr.replaceAll("|","]c.A")
    sttr=sttr.replaceAll("/",")*HND_")
    sttr=sttr.replaceAll("~","(&*GHA")
    sttr=sttr.replaceAll(";","K}N=O")
    sttr=sttr.replaceAll(":","YGOI&A")
    sttr=sttr.replaceAll("?","Oa")
    sttr=sttr.replaceAll(".","8y)a")
    sttr=sttr.replaceAll(">","0{a9")
    sttr=sttr.replaceAll("<","v6Yha")
    sttr=sttr.replaceAll(",","I8ys#")
    sttr=sttr.replaceAll("0","(HPA7")
    sttr=sttr.replaceAll("1","}v")
    sttr=sttr.replaceAll("2","*HAl%")
    sttr=sttr.replaceAll("3","_)JHS")
    sttr=sttr.replaceAll("4","IG(A")
    sttr=sttr.replaceAll("5","(*GFD")
    sttr=sttr.replaceAll("6","IU(&V")
    sttr=sttr.replaceAll("7","(JH*G")
    sttr=sttr.replaceAll("8","*GHBA")
    sttr=sttr.replaceAll("9","U&G*C")
    sttr=bintoirr(reversebin(binary(btoa(sttr))))
    return sttr;
  }
  return code(string)
}
function fwx256unbin(string){
  function unbinary(stringt){return stringt.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');}
  function reversebin(bin) {
    var fin=bin.replaceAll("1","3");
    fin = fin.replaceAll("0","2");
    fin = fin.replaceAll("2","1");
    fin = fin.replaceAll("3","0");
    return fin;
}
function hextotext(hex){
  var hex = hex.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;

}
  function decode(sttr){
    sttr=sttr.replaceAll("I(a-s","\"")
    sttr=sttr.replaceAll("U&G*C","9")
    sttr=sttr.replaceAll("*GHBA","8")
    sttr=sttr.replaceAll("(JH*G","7")
    sttr=sttr.replaceAll("IU(&V","6")
    sttr=sttr.replaceAll("(*GFD","5")
    sttr=sttr.replaceAll("IG(A","4")
    sttr=sttr.replaceAll("_)JHS","3")
    sttr=sttr.replaceAll("*HAl%","2")
    sttr=sttr.replaceAll("}v","1")
    sttr=sttr.replaceAll("(HPA7","0")
    sttr=sttr.replaceAll("I8ys#",",")
    sttr=sttr.replaceAll("v6Yha","<")
    sttr=sttr.replaceAll("0{a9",">")
    sttr=sttr.replaceAll("8y)a",".")
    sttr=sttr.replaceAll("Oa","?")
    sttr=sttr.replaceAll("YGOI&A",":")
    sttr=sttr.replaceAll("K}N=O",";")
    sttr=sttr.replaceAll("(&*GHA","~")
    sttr=sttr.replaceAll(")*HND_","/")
    sttr=sttr.replaceAll("]c.A","|")
    sttr=sttr.replaceAll("*&GBA","]")
    sttr=sttr.replaceAll("[a)","[")
    sttr=sttr.replaceAll("9j","}")
    sttr=sttr.replaceAll("Av[","{")
    sttr=sttr.replaceAll("{0aD",")")
    sttr=sttr.replaceAll("I*Ua]","(")
    sttr=sttr.replaceAll("(U","*")
    sttr=sttr.replaceAll("OIp*a","^")
    sttr=sttr.replaceAll("/A","!")
    sttr=sttr.replaceAll("l@","@")
    sttr=sttr.replaceAll(".aGa!","#")
    sttr=sttr.replaceAll("y{A3s","%")
    sttr=sttr.replaceAll("%A","&")
    sttr=sttr.replaceAll("}J","+")
    sttr=sttr.replaceAll("OJ)_A","=")
    sttr=sttr.replaceAll("}F","-")
    sttr=sttr.replaceAll("R7a{"," ")
    sttr=sttr.replaceAll("*;pY&","Z")
    sttr=sttr.replaceAll("*J","Y")
    sttr=sttr.replaceAll("_9xlA","X")
    sttr=sttr.replaceAll("8h^va","W")
    sttr=sttr.replaceAll("hA","V")
    sttr=sttr.replaceAll("Qd&^","U")
    sttr=sttr.replaceAll("|Q","T")
    sttr=sttr.replaceAll("G)OA&","S")
    sttr=sttr.replaceAll("*Ha$g","R")
    sttr=sttr.replaceAll(")P{A]","Q")
    sttr=sttr.replaceAll("&*FAl","P")
    sttr=sttr.replaceAll("*IHA&GT","O")
    sttr=sttr.replaceAll("(*HSA$","N")
    sttr=sttr.replaceAll("^&FVB","M")
    sttr=sttr.replaceAll("&F*Va","L")
    sttr=sttr.replaceAll("(HAF5","K")
    sttr=sttr.replaceAll("L&VA","J")
    sttr=sttr.replaceAll("&AN)","I")
    sttr=sttr.replaceAll("&GH+","H")
    sttr=sttr.replaceAll("*UAK(","G")
    sttr=sttr.replaceAll("pW","F")
    sttr=sttr.replaceAll("{A","E")
    sttr=sttr.replaceAll("*GABD","D")
    sttr=sttr.replaceAll("*TGA3","C")
    sttr=sttr.replaceAll("t5","B")
    sttr=sttr.replaceAll("(&Tav","A")
    sttr=sttr.replaceAll("JA","z")
    sttr=sttr.replaceAll("{JM","y")
    sttr=sttr.replaceAll("(*HskW","x")
    sttr=sttr.replaceAll("&^F*GV","w")
    sttr=sttr.replaceAll("n):u","v")
    sttr=sttr.replaceAll("O&A6u","u")
    sttr=sttr.replaceAll("*(HARR","t")
    sttr=sttr.replaceAll("{9sl","s")
    sttr=sttr.replaceAll("OA","r")
    sttr=sttr.replaceAll("*YFSA","q")
    sttr=sttr.replaceAll("*H)PA-G","p")
    sttr=sttr.replaceAll(")A","o")
    sttr=sttr.replaceAll("*KA^7","n")
    sttr=sttr.replaceAll("*(oa","m")
    sttr=sttr.replaceAll("/IHa","l")
    sttr=sttr.replaceAll("&G{A","k")
    sttr=sttr.replaceAll("g%","j")
    sttr=sttr.replaceAll("(aj*a","i")
    sttr=sttr.replaceAll("+A","h")
    sttr=sttr.replaceAll("*&GD2","g")
    sttr=sttr.replaceAll("(*HGA(","f")
    sttr=sttr.replaceAll("K5a{","e")
    sttr=sttr.replaceAll("*YHA","d")
    sttr=sttr.replaceAll("*&Gs","c")
    sttr=sttr.replaceAll("&hl","b")
    sttr=sttr.replaceAll("e*1","a")
    return sttr
  }
return atob(decode(unbinary(reversebin(string))))
}
function getOS() {
  var OSName = "Unknown";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
  if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
  if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
  if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
  if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
  return OSName
  }
function getCurrentTime(){
  var d = new Date();
var dm = "0"+d.getMinutes()
var ds = "0"+d.getSeconds()
var timestamp = d.getHours()+":"+dm.substr(-2)+":"+ds.substr(-2)
return timestamp
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
function getCurrentDate(){
  var d = new Date();
var dm = "0"+(parseInt(d.getMonth())+1).toString()
var dd = "0"+d.getDate()
var timestamp = dm.substr(-2)+"/"+dd.substr(-2)+"/"+d.getFullYear()
return timestamp
}
function getLocation(ip){
  var value= $.ajax({ 
    url: `https://ipapi.co/${ip}/json`, 
    async: false
 }).responseText;
  return JSON.parse(value.toString())
}

function getTimeZone(){
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

function generateRandom(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function getRandomInt(min, max, len) {
  var end=""
  for(var p =0;p<len;p++){
 end+=Math.floor(Math.random() * (max - min) + min);}
  return end
}
function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
  function deg2rad(deg) {
  return deg * (Math.PI/180)
}
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(parseFloat(lat2)-parseFloat(lat1));  // deg2rad below
  var dLon = deg2rad(parseFloat(lon2)-parseFloat(lon1)); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d*1000;
}

function locationToRadiationLevel(lat, lon) {
  function getDistance(lat1, lon1, lat2, lon2) {
var R = 6371; // Radius of the earth in km
var dLat = deg2rad(parseFloat(lat2)-parseFloat(lat1));  // deg2rad below
var dLon = deg2rad(parseFloat(lon2)-parseFloat(lon1)); 
var a = 
  Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
  Math.sin(dLon/2) * Math.sin(dLon/2)
  ; 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; // Distance in km
return d*1000;
}

function deg2rad(deg) {
return deg * (Math.PI/180)
};
  var tries=100
    var data= $.ajax({ 
  url: `https://api.safecast.org/en-US/measurements?distance=${tries}&format=json&latitude=${lat}&longitude=${lon}&api_key=hDVmvNRtirxPmVvy73Nz`, 
  async: false
}).responseText;
  
  while(JSON.parse(data.toString()).length==0){
      tries=tries*10
      data= $.ajax({ 
  url: `https://api.safecast.org/en-US/measurements?distance=${tries}&format=json&latitude=${lat}&longitude=${lon}&api_key=hDVmvNRtirxPmVvy73Nz`, 
  async: false
}).responseText;
      if(JSON.parse(data.toString()).length==0){break;}
  };
  var done=""
  if(JSON.stringify(JSON.parse(data.toString())).includes("\"unit\"=\"usv\"")){
    data= $.ajax({ 
      url: `https://api.safecast.org/en-US/measurements?distance=${tries}&format=json&latitude=${lat}&longitude=${lon}&unit=usv&api_key=hDVmvNRtirxPmVvy73Nz`, 
      async: false
    }).responseText;
  }
      var dist=getDistance(lat,lon,JSON.parse(data.toString())[0].latitude,JSON.parse(data.toString())[0].longitude)
      var accuracy=(100-Math.abs(Math.tan(10/2)*dist/200))+"%"

      var uSv =""
      if(JSON.parse(data.toString())[0].unit=="cpm"){ 
        uSv=JSON.parse(data.toString())[0].value*0.00834}else{
          uSv=JSON.parse(data.toString())[0].value
        }
      done={"accuracy":accuracy,"radiation":(uSv).toString()+" µSv/h","distance":dist+" M"}
  return done
}



