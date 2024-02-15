//DON'T YOU F*CKING DARE!!!

//DO NOT TRY TO FIND THE DATA SOURCE!!!!

//IF YOU DARE I WILL FIND YOU!








































































































// I AM NOT JOKING...











































//IF YOU WILL TRY TO FIND THE SOURCE OF DATA I WILL FIND YOU!

//NAH BRO LAST CHANCE

var actdata = {};

//I WILL FIND YOU....
if(JSON.stringify(actdata)=="{\"status\":\"EMERGENCY\"}"||JSON.stringify(actdata)=="{\"status\":\"NOTFOUND\"}"){
    console.log("ERROR 523!")
}else{
    function startReadD(){
$.getJSON(`https://65c242abf7e6ea59682b0378.mockapi.io/data/data/0`,
            	function (data) {
 actdata=data.json  
                    
})
}
startReadD()
function continueRead(){
setTimeout(function(){
startReadD()
continueRead()
}, 5500)}
continueRead()
}
