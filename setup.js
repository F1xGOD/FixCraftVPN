//DON'T YOU F*CKING DARE!!!

//DO NOT TRY TO FIND THE DATA SOURCE!!!!

//IF YOU DARE I WILL FIND YOU!








































































































// I AM NOT JOKING...











































//IF YOU WILL TRY TO FIND THE SOURCE OF DATA I WILL FIND YOU!

//NAH BRO LAST CHANCE

var actdata = {};
var va = ""

//I WILL FIND YOU....
$.getJSON(`https://networkcalc.com/api/encoder/aHR0cHM6Ly82NWMyNDJhYmY3ZTZlYTU5NjgyYjAzNzgubW9ja2FwaS5pby9kYXRhL2RhdGEvMA==?encoding=base64&decode=true`,
            	function (data2) {
                     va=data2.decoded               
$.getJSON(`${va}`,
            	function (data) {
$.getJSON(`https://networkcalc.com/api/encoder/${data.json}?encoding=base64&decode=true`,
            	function (data3) {
actdata=JSON.parse(data3.decoded)
va = ""})
                                    
})})
