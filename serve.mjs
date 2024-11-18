import mime from 'mime'
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { get } from 'http';
import * as urle from 'url'
import 'colors';
import pkg from 'javascript-obfuscator';
const { obfuscate } = pkg;
import { regex } from 'regex';
import * as nodemailer from 'nodemailer';
console.clear()
console.log("\x1b[0m")
class basefwx{
  static pb512encode(string, code) {
    function mdcode(string) {
      let st = String(string);
      let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
      let end = "";
      for (let bb of binaryvals) {
        end += String(parseInt(bb,2)).length + String(parseInt(bb,2));
      }
      return String(end);
    }
  
    function mainenc(string) {
      return String(BigInt(mdcode(string)) - BigInt(mdcode(code))).replace("-", "0");
    }
  
    return mainenc(string);
  };
  static pb512decode(string, code) {
    function mcode(strin) {
      let end = strin;
      let eand = Array.from(end);
      let finish = "";
      let ht = 0;
      let len = 0;
      let oht = 0;
      for (let een of eand) {
        ht += 1;
        if (een !== "") {
          if (ht === 1) {
            len = parseInt(een);
            finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
            oht = ht;
          }
          if (ht !== 1 && len + oht + 1 === ht) {
            len = parseInt(een);
            finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
            oht = ht;
          }
        }
      }
      return finish;
    }
  
    function mdcode(string) {
      let st = String(string);
      let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
      let end = "";
      for (let bb of binaryvals) {
        end += String(String(parseInt(bb,2)).length + String(parseInt(bb, 2)));
      }
      return String(end);
    }
  
    function maindc(string) {
      let result = "";
      let string2 = string;
      if (string2[0] === "0") {
        string2 = "-" + string2.slice(0,1);
      }
      result = mcode(String(BigInt(string2) + BigInt(mdcode(code))));
      return result;
    }
  
    return maindc(string);
  };}


var defaults = {
  indexfile: true,
  '404': null,
  '403': null,
  'index': null
}

export function Serve(path, config, cors) {
  var config = Object.assign(defaults, config)
  return function(req, res, cors) {
    var hwidban = JSON.parse(readFileSync('./ban.json'));
    var ipallow = JSON.parse(readFileSync('./op.json'));
    var type = mime.getType(req.url.split('?')[0].split('#')[0])||'text/html'
    if (req) {
      var ipAddress = req.socket.remoteAddress;
      hwidban = JSON.parse(readFileSync('./ban.json'));
      ipallow = JSON.parse(readFileSync('./op.json'));
      ipAddress=ipAddress.replace("::ffff:","")
      var date = new Date().toISOString().replace(/T/, ' ').replace(/[.].+/, '')
      date="["+date+"] "
      var yuy=false
      var userpath =path+req.url
      if(JSON.stringify(hwidban).includes(parseCookies(req).hwid)==false&&JSON.stringify(hwidban).includes(ipAddress)==false){if(userpath.includes("./public/api/")==false){
      console.log(date.gray+ipAddress+" IS CONNECTING...".yellow + " ("+userpath.gray+")")}else{
        if(userpath.includes("./public/api/submit")==false){
          console.log(date.gray+ipAddress+" API REQUEST!".yellow + " ("+userpath.split("./public/api/")[1].toUpperCase()+")")
        }else{
          var warn = ""
          var lenv=userpath.split("./public/api/")[1].split("?r=")[1].length
          if(lenv<=99){}else if(lenv<=300&&lenv>=100){warn=" !".green}else if(lenv<=1000){warn=" !!".yellow}else if(lenv<=2400){warn="\x1b[38;5;208m !!!\x1b[0m"}else if(lenv<=6000){warn=" !!!!".red}else if(lenv>=6001){warn=" !!!!!!!!!!!!!!".red
            console.log(date.gray+ipAddress+" API REQUEST!".yellow + " ("+userpath.split("./public/api/")[1].split("?")[0].toUpperCase()+" - "+userpath.split("./public/api/")[1].split("?r=")[1].length+warn+")")
            console.log("OVERLOAD!\nEXITING...")
            writeFileSync('./ban.json', JSON.stringify(JSON.parse(readFileSync("./ban.json").toString()).concat({"hwid":parseCookies(req).hwid,"ip":req.socket.remoteAddress.split("::ffff:")[1],"type":"ultimate"})))
            process.exit()
          }
        console.log(date.gray+ipAddress+" API REQUEST!".yellow + " ("+userpath.split("./public/api/")[1].split("?")[0].toUpperCase()+" - "+userpath.split("./public/api/")[1].split("?r=")[1].length+warn+")")}}
      }else{console.log(date.gray+ipAddress+" IS CONNECTING...".yellow + " ("+userpath.length.toString().gray+")")}
      function parseCookies (request) {
        const list = {};
        const cookieHeader = request.headers?.cookie;
        if (!cookieHeader) return list;
    
        cookieHeader.split(`;`).forEach(function(cookie) {
            let [ name, ...rest] = cookie.split(`=`);
            name = name?.trim();
            if (!name) return;
            const value = rest.join(`=`).trim();
            if (!value) return;
            list[name] = decodeURIComponent(value);
        });
    
        return list;
    }
     if(parseCookies(req).usernamecred==undefined&&parseCookies(req).passwordcred==undefined&&parseCookies(req).canlogintosite!="truesigma"||true){
      if((path+req.url.split('?')[0].split('#')[0]).includes("cf-icon")==true||path+req.url.split('?')[0].split('#')[0]=="./public/fixcraft.png"||true){
        try{
          readFileSync(path+req.url.split('?')[0].split('#')[0])

        console.log(date.gray+ipAddress+" GRANTED VIEW ACCESS!".green+" ("+userpath.gray+")")
        return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(path+req.url.split('?')[0].split('#')[0]))
        }catch{}
      }
             console.log(date.gray+ipAddress+" SHOWING INACCESSIBLE PAGE, NEW".red+" ("+userpath.gray+")")
          return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./private/block/block.html"))
     }else if(parseCookies(req).usernamecred==undefined&&parseCookies(req).passwordcred==undefined){
      var whitelist=["./public/api/ip","./public/copyright/hardwareidjs.js","./public/rehost/fingerprintjs/v4.js","./public/password.css","./public/snackbar.css","./public/snackbar.js","./public/host.js","./public/jquery.js","./public/setup.js","./public/password.js","./public/copyright/hardwareidjs.js","./public/platform.js","./public/lock.png"]
      for(var oioi = 0; oioi<whitelist.length; oioi++){
        if(path+req.url.split('?')[0].split('#')[0]==whitelist[oioi]){
          yuy=true
        }
        if(whitelist.length-1==oioi){
if(yuy){
  //!!!!!!!!!!!!!!!!!!!!!!!!!
  // if(path+req.url.split('?')[0].split('#')[0].replace("./public/","").split(".")[1]=="js"){
  //   try {
  //     readFileSync(path+req.url.split('?')[0].split('#')[0].replace(".html",""))
  //     if(path+req.url.split('?')[0].split('#')[0]!="./public/api/ip"){
  //     console.log(date.gray+ipAddress+" GRANTED VIEW ACCESS!".green+" ("+userpath.gray+")")
  //   return res.writeHead(200, {'content-type':"application/javascript", 'access-control-allow-origin':cors?'null':request.headers['host']}).end(obfuscate(readFileSync(url.replace(".html","")).toString()).getObfuscatedCode())
  //   }}catch{}
  // }
  if(path+req.url.split('?')[0].split('#')[0]!="./public/api/ip"){
  console.log(date.gray+ipAddress+" GRANTED VIEW ACCESS!".green+" ("+userpath.gray+")")
  return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(path+req.url.split('?')[0].split('#')[0]))
  }
                  }else{
                    console.log(date.gray+ipAddress+" SHOWING INACCESSIBLE PAGE, NEW".red+" ("+userpath.gray+")")
                    return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./public/login.html"))          
        }}
        }
    }
     var hwid=parseCookies(req).hwid
     var content1=readFileSync('./db/users.json').toString()
     content1=JSON.parse(content1)
     var gfr = false
     var j =0
     if(parseCookies(req).target!=undefined&&readFileSync("./ban.json").toString().includes(`"hwid":"${hwid}","ip":"${ipAddress}"`)!=true){
      writeFileSync('./ban.json', JSON.stringify(JSON.parse(readFileSync("./ban.json").toString()).concat({"hwid":hwid,"ip":ipAddress,"type":"soft"})))
      return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./ban.html")) 
    }
     if(parseCookies(req).hwid!=undefined){
     for (var k = 0;k<content1.length;k++){
      if (content1[k].hwid==hwid){
        gfr=true
        j=k
      }
     if(gfr==false&&k==content1.length-1){
      
      content1=content1.concat({"hwid":hwid,"cookies":parseCookies(req)})
     writeFileSync('./db/users.json', JSON.stringify(content1));}else if(gfr&&j==content1.length-1){
      if(content1[j].hwid!=undefined){
      if(content1[j].cookies!=parseCookies(req)){
        if(content1[j].cookies.hwid==hwid&&content1[j].cookies.UID==parseCookies(req).UID&&parseCookies(req).target==undefined){
        content1[j].cookies=parseCookies(req)
        writeFileSync('./db/users.json', JSON.stringify(content1))}else if(readFileSync("./ban.json").toString().includes(`"hwid":"${hwid}","ip":"${ipAddress}"`)!=true){
          writeFileSync('./ban.json', JSON.stringify(JSON.parse(readFileSync("./ban.json").toString()).concat({"hwid":hwid,"ip":ipAddress,"type":"soft"})))
          return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./ban.html"))
        }
      }
     }else{}}}}else{}
      for(var oio = 0; oio<hwidban.length; oio++){
        if(hwidban[oio]!="NONE"){
        if((hwidban[oio].ip==ipAddress||hwidban[oio].hwid==hwid)&&hwidban[oio].type=="soft"){
          console.log(date.gray+ipAddress+" SHOWING BAN PAGE, BAN".red+" ("+userpath.gray+")")
          return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./ban.html"))
        }else if((hwidban[oio].ip==ipAddress||hwidban[oio].hwid==hwid)&&hwidban[oio].type=="hard"){
          console.log(date.gray+ipAddress+" NOT FOUND, BAN".red+" ("+userpath.gray+")")
          return res.end('Not Found')
        }else if((hwidban[oio].ip==ipAddress||hwidban[oio].hwid==hwid)&&hwidban[oio].type=="ultimate"){
          console.log(date.gray+ipAddress+" REFUSED TO CONNECT, BAN".red+" ("+userpath.length.toString().gray+")")
          return res.writeHead(403).end()
        }}
      }
      var url = path+req.url.split('?')[0].split('#')[0]
      //API/OTHER

      if(url.includes("./public/confirm-email")){
        var adr = req.url;
        var q = urle.parse(adr, true);
        var gh = url.split("confirm-email/")[1]
        if(gh!=undefined&&gh!=""&&q.query.vf!=undefined){
        var jsons=`{"email":"${basefwx.pb512decode(atob(gh),atob(q.query.vf).split("/\\")[0]).split("/\\")[0]}","name":"${basefwx.pb512decode(atob(gh),atob(q.query.vf).split("/\\")[0]).split("/\\")[1]}","password":"${basefwx.pb512decode((atob(q.query.vf).split("/\\")[1]),atob(q.query.vf).split("/\\")[0])}"}`
        return res.writeHead(200, {'content-type':"text/html", 'access-control-allow-origin':cors?'*':request.headers['host']}).end(`<script>function setCookie(cname,cvalue,exdays) {const d = new Date();d.setTime(d.getTime() + (exdays*24*60*60*1000));let expires = "expires=" + d.toUTCString();document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";};setCookie("verify",'${jsons.toString()}',2);window.location.href='/'</script>`)
        }
      }
      if(url=="./public/verification"){
        var adr = req.url;
        var q = urle.parse(adr, true);
        var rt=false
        var envv = JSON.parse(process.env.APIKEYS)
        for(var t=0;t<envv.length;t++){
          if(envv[t]==q.query.apiKey){
            rt=true
          }
          if(t==envv.length-1){
            if (rt) {
              if(q.query.key!=undefined&&q.query.mail!=undefined){
              var cdd=atob(q.query.key)
              var tcode=basefwx.pb512encode(basefwx.pb512decode(atob(q.query.mail),"JDHYU&SAJIH"),cdd)
              var targetmail=basefwx.pb512decode(atob(q.query.mail),"JDHYU&SAJIH").split("/\\")[0]
              var name=basefwx.pb512decode(atob(q.query.mail),"JDHYU&SAJIH").split("/\\")[1]
              var password= basefwx.pb512decode(atob(q.query.mail),"JDHYU&SAJIH").split("/\\")[2]
              var msg=`<div class="">
   <div class="aHl"></div>
   <div id=":nk" tabindex="-1"></div>
   <div id=":or" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwNjk4MDk3OTM5NjI5MjM0MSJd; 4:WyIjbXNnLWY6MTgwNjk4MTMzNjIxNjM0NDY0NCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDBd">
      <div id=":oq" class="a3s aiL ">
         <img width="1px" height="1px" alt="" src="https://vpn.fixcraft.org" class="CToWUd" data-bit="iit">
         <div>
            <div></div>
            <div id="m_-2156264433082765360:162"></div>
            <div id="m_-2156264433082765360:15s">
               <div id="m_-2156264433082765360:15r">
                  <u></u>
                  <div>
                     <div style="font-family:'Open Sans','Roboto','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;color:#2c3e50;line-height:150%;letter-spacing:normal">
                        <div style="background:#f9f9f9;padding:20px 10px">
                           <div style="max-width:600px;margin:auto;padding:15px 30px 25px 30px;background-color:#ffffff;border-radius:3px;border-bottom:1px solid #dadada;border-top:1px solid #eaeaea">
                              <div style="margin:5px 0 30px"><a style="text-decoration:none;outline:none" href="https://vpn.fixcraft.org" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://vpn.fixcraft.org"> <img style="height:18px" src="https://vpn.fixcraft.org/fixcraft.png" alt="logo" class="CToWUd" data-bit="iit"><span style="color:#2c3e50;font-size:22px;margin-left:8px">FixCraftVPN</span></a></div>
                              <p>Hi ${name},</p>
                              <p>Thank you for signing up on FixCraftVPN! We're excited to have you on board and will be happy to help you set everything up.</p>
                              <p>Please click the link below to <span>verify</span> your email address: <a href="mailto:${targetmail}" target="_blank">${targetmail}</a></p>
                              <span class="im">
                                 <p><a style="font-weight:500;display:inline-block;padding:10px 35px;margin:8px 0;text-decoration:none;border-radius:3px;background-color:#4460aa;color:#ffffff" href="https://vpn.fixcraft.org/confirm-email/${btoa(tcode)}?vf=${btoa(cdd+"/\\"+basefwx.pb512encode(password,cdd))}" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://vpn.fixcraft.org/confirm-email/${btoa(tcode)}?vf=${btoa(cdd+"/\\"+basefwx.pb512encode(password,cdd))}"><span>Verify</span> email</a></p>
                                 <p>This link will expire in 48 hours.</p>
                              </span>
                              <p>If you're having trouble clicking the button, copy and paste the URL below into your browser:</p>
                              <p><a style="color:#4460aa;word-break:break-word" href="https://vpn.fixcraft.org/confirm-email/${btoa(tcode)}?vf=${btoa(cdd+"/\\"+basefwx.pb512encode(password,cdd))}" rel="noopener" target="_blank" data-saferedirecturl="https://vpn.fixcraft.org/confirm-email/${btoa(tcode)}?vf=${btoa(cdd+"/\\"+basefwx.pb512encode(password,cdd))}">https://vpn.fixcraft.org/confirm-email/${btoa(tcode)}?vf=${btoa(cdd+"/\\"+basefwx.pb512encode(password,cdd))}</a></p>
                              <p>Please let us know if you have any questions, feature requests, or general feedback simply by replying to this email.</p>
                              <span class="im">
                                 <hr style="margin:40px 0;border-color:#dadada;border-style:solid;border-width:1px 0 0 0;height:0">
                                 <p>All the best,<br><strong>The FixCraft Crew</strong></p>
                                 <hr style="margin:40px 0 30px;border-color:#dadada;border-style:solid;border-width:1px 0 0 0;height:0">
                              </span>
                              <p style="font-size:14px">If you didn't create this account, please let us know by replying to this email.</p>
                              <hr style="margin:30px 0;border-color:#dadada;border-style:solid;border-width:1px 0 0 0;height:0">
                              <table style="width:100%;font-size:12px">
                                 <tbody>
                                    <tr>
                                       <td>FixCraft.org, All rights reserved.</td>
                                    </tr>
                                    <tr>
                                       <td colspan="2" style="line-height:1.4">You have received this email because you opted in at our website.</td>
                                    </tr>
                                 </tbody>
                              </table>
                              <div class="yj6qo"></div>
                              <div class="adL"></div>
                              <div class="adL"></div>
                           </div>
                           <div class="adL"></div>
                        </div>
                        <div class="adL"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="adL"></div>
         </div>
         <div class="adL"></div>
      </div>
   </div>
   <div class="WhmR8e" data-hash="0"></div>
</div>`;

// Create a transporter object with your SMTP server details
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 465,
  secure: true,
  auth: {
    user: 'info@fixcraft.org',
    pass: '&DI8(2WD28'
  }
});

// Compose the email message
const mailOptions = {
  from: 'info@fixcraft.org',
  to: targetmail,
  subject: 'FixCraft Verification',
  html: msg
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});



            return res.writeHead(200, {'content-type':'text/json'}).end('{"status":200}')}else{
              return res.writeHead(200, {'content-type':'text/json'}).end('{"status":502,"error":"Invalid Arguments"}')
            }}else{
              return res.writeHead(200, {'content-type':'text/json'}).end('{"status":403,"error":"Invalid API Key"}')
            }
          }
        }
        
      }

        if(url=="./public/api/ip"){
          return res.writeHead(200, {'content-type':"text/json", 'access-control-allow-origin':cors?'*':request.headers['host']}).end(`{"status":"200","ip":"${ipAddress}"}`)
        }

        if(url=="./public/api/submit"){
          var adr = req.url;
          var q = urle.parse(adr, true);
          var kj = JSON.parse(readFileSync("./history.json").toString())
          if(kj.history[parseCookies(req).usernamecred]==undefined){
          kj.history.jk15672yh28=JSON.parse(`{"hwid":"${parseCookies(req).hwid}"}`)
          kj=JSON.parse(JSON.stringify(kj).replace("jk15672yh28",parseCookies(req).usernamecred))
          kj.history[parseCookies(req).usernamecred].history=[]
          kj.history[parseCookies(req).usernamecred].history=kj.history[parseCookies(req).usernamecred].history.concat(JSON.parse(JSON.stringify({"url":q.query.r,"timestamp":(new Date).toString()})))
        }else{
              kj.history[parseCookies(req).usernamecred].history=kj.history[parseCookies(req).usernamecred].history.concat(JSON.parse(JSON.stringify({"url":q.query.r,"timestamp":(new Date).toString()})))      
          }
          writeFileSync('./history.json', JSON.stringify(kj))
          return res.writeHead(200, {'content-type':"text/json", 'access-control-allow-origin':cors?'*':request.headers['host']}).end(`{"status":"200","r":"${q.query.r}"}`)
          
        }

          if(url.includes("./public/admin/")){
            for(var oio = 0; oio<ipallow.length; oio++){
              if(ipallow[oio]!="NONE"&&ipallow[oio].ip!=undefined){
              if(ipallow[oio].ip==ipAddress){
		if(url.includes(".html")){
                return res.writeHead(200, {'content-type':type}).end(readFileSync(url.replace("./public/","./"))) 
		}else{
		return res.writeHead(200, {'content-type':type}).end(readFileSync(url.replace("./public/","./")+".html"))
		}
              }}
            if(oio==ipallow.length-1){
              return res.writeHead(403).end()
            }
            }
          }
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if(url.replace("./public/","").split(".")[1]=="js"){
//   try {
//     readFileSync(url.replace(".html",""))
//   return res.writeHead(200, {'content-type':"application/javascript", 'access-control-allow-origin':cors?'null':request.headers['host']}).end(obfuscate(readFileSync(url.replace(".html","")).toString()).getObfuscatedCode())
//   }catch{}
// }
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {url+='index.html'}
      try {readFileSync(url)} catch {try {readFileSync(url+=".html")} catch {if(userpath == ("./public/mc/1.8.8")){return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./public/mc/1.8.8/index.html"))}
        console.log(date.gray+ipAddress+" TRIED TO ACCESS NON-EXISTENT RESOURCE!".red+" ("+userpath.gray+")")
        return res.end('Not Found') }}
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {if (config.index) return config.index(req, res, readFileSync(url), type)}
      console.log(date.gray+ipAddress+" GRANTED VIEW ACCESS!".green+" ("+userpath.gray+")")
      return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(url))
    } else {
      throw new Error('Request Object: Expected [object Request], got undefined')
    }
  }
}

export default Serve
