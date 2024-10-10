import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {


const firebaseConfig = { apiKey: "AIzaSyAQ89agVS02dwVK9-yWwpZOvMkQWLiKcEM", authDomain: "fixcraft-vpn.firebaseapp.com", databaseURL: "https://fixcraft-vpn-default-rtdb.firebaseio.com", projectId: "fixcraft-vpn", storageBucket: "fixcraft-vpn.appspot.com", messagingSenderId: "811886239981", appId: "1:811886239981:web:9e43da7b31be5f7fb1ace4", measurementId: "G-CTR9TEET9E" };
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const infodat = ref(db, 'data');
onValue(infodat, (snapshot) => {
    var data1 = snapshot.val();

var now = new Date
var tmp = new Date(data1.chat[data1.chat.length-1].timestamp) 

if(((now-tmp)/1000)<6){
  const data = {"title":"FixCraftV2 - Chat"}
  var snd=data1.chat[data1.chat.length-1].sender
  var msg=data1.chat[data1.chat.length-1].content
  const options = {
  tag: "Chat",
  body: snd+" - "+msg,
  icon: "FixCraft.png",
  image: "FixCraft.png",
  vibrate: 500,
}
self.registration.showNotification(
  data.title,
  options
).catch((error) => {
console.log(error);
});}

}) 
const infodat2 = ref(db, 'server');
onValue(infodat2, (snapshot) => {
    var dats = snapshot.val();
    var nowf = new Date
    if(dats.anounce!=undefined){
    var tmpf = new Date(dats.anounce[dats.anounce.length-1].timestamp) }else{
      var tmp = 0
    }
    
    if(((nowf-tmpf)/1000)<6){
      const data = {"title":"FixCraftV2 - Anouncement"}
      var msg=dats.anounce[dats.anounce.length-1].content
      const options = {
      tag: "Anouncement",
      body: msg,
      icon: "FixCraft.png",
      image: "FixCraft.png",
      vibrate: 500,
    }
    self.registration.showNotification(
      data.title,
      options
    ).catch((error) => {
    console.log(error);
    });}})
})());
});

// self.addEventListener('message', (event) => {
//   let notification = event.data;
//   self.registration.showNotification(
//     notification.title,
//     notification.options
// ).catch((error) => {
//   console.log(error);
// });
// });

