var host = window.location.href
host = host.split("https://")[1]
host = host.split('/')[0]
var actualhost = host
host = "https://"+host
var tablocation = window.location.href
tablocation = tablocation.split("https://")[1]
var otablocation=window.location.href
tablocation=""
for(var io=0;io<otablocation.split('/').length;io++){
    if(io>2){tablocation+="/"+otablocation.split('/')[io]}
}
tablocation.slice(1)

