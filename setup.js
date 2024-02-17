//DON'T YOU F*CKING DARE!!!

//DO NOT TRY TO FIND THE DATA SOURCE!!!!

//IF YOU DARE I WILL FIND YOU!








































































































// I AM NOT JOKING...











































//IF YOU WILL TRY TO FIND THE SOURCE OF DATA I WILL FIND YOU!

//NAH BRO LAST CHANCE
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const firebaseConfig = { apiKey: "AIzaSyAQ89agVS02dwVK9-yWwpZOvMkQWLiKcEM", authDomain: "fixcraft-vpn.firebaseapp.com", databaseURL: "https://fixcraft-vpn-default-rtdb.firebaseio.com", projectId: "fixcraft-vpn", storageBucket: "fixcraft-vpn.appspot.com", messagingSenderId: "811886239981", appId: "1:811886239981:web:9e43da7b31be5f7fb1ace4", measurementId: "G-CTR9TEET9E" };
const app = initializeApp(firebaseConfig);

export var actdata = {};
const db = getDatabase();
const infodat = ref(db, 'data');

//I WILL FIND YOU....
if(JSON.stringify(actdata)=="{\"status\":\"EMERGENCY\"}"||JSON.stringify(actdata)=="{\"status\":\"NOTFOUND\"}"){
    console.log("ERROR 523!")
}else{
    function startReadD(){
        onValue(infodat, (snapshot) => {
            const data = snapshot.val();
              actdata=data
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
