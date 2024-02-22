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
  return code(string)
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
function fwx256unbin(string,passww){
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
  var final ="";
  if(passww!=null){
  if((fwx256irreversible(passww)=='10529281052928436910526731048848105292865536655521052929436911143691118465105267310526731118209657926964810526881118209435310526724353111822443691052944105267327343691052928657926580910526896988843691118209105294510529281048849111846511143691114368655531052673658091114368658081048833111438510529446579211182091052673104884810526881118209111436911143686555310526736580911143686580810488331114385105294465792111820911143841052944105268810488486553611143686579269649111820810529291118224657924368105267310526721118224436811143696579269649111846410529441052928696324368105292943691048833111822410529281052673105268865536111436965553104883341121052944104884910488336988910488481052928655531118465104884927265553111436810529281118209111411325710529441052928436911143851052928111822411143691118465696481052928655536580969648105268811182094353105267243531118224436910529441052673273436910529286579265809105268969888436911182091118208105292810529284369105267310488481052928655366555210529294369111436911184651052673105267265809111846510488481048849655531118465696496555341136580911143681052688111820969633111436810526884369111438410526884352111411311184656990411182241118209111846510529281052928436910526731048848105292865536655521052929436911143691118465696481052688111820943531052672435311182244369105294410526732734369105292865792658091052689698884369111820969649104884827243691114385105292811182241114369111846569648105292865553658091052944105267311182096580969649655376555311184656964965553411365809111436810526881118209696331114368105268843691114384105268843521114113111846510529294369658091052673111436965792698884368105294443534369111436869648105268811182094353105267243531118224436910529441052673273436910529286579265809105268969888436911182091118465105292810529284369105267310488481052928655366555210529294369111436911184651052928105292843691052673104884810529286553665552105292943691114369111846510526731052688658091114385105294410488491048833698891048848105292865792655361052928111820911184651118465111436811182244369111438411143686579269649658091052929111822427211184656964810526881118209435310526724353111822443691052944105267327343691052928657926580910526896988843691118209111846511143691118224111820943531052672435311182244369111436811182246580910529441052944105292865809111436810529281118464436911143851048848105268810529291118465696496555341136580911143681052928658091114384105268811182241118224655361052928657926963243681052929435311182091118224105268811182241118209435310526724353111822443691052944105292865536655521052929436911143691118465')){final=decode(string)}else{final="Incorrect!"}
}else{final="Please Enter A Password!"}
return final
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
function getCurrentDate(){
  var d = new Date();
var dm = "0"+parseInt(d.getMonth())+1
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
