import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const firebaseConfig = { apiKey: "AIzaSyAQ89agVS02dwVK9-yWwpZOvMkQWLiKcEM", authDomain: "fixcraft-vpn.firebaseapp.com", databaseURL: "https://fixcraft-vpn-default-rtdb.firebaseio.com", projectId: "fixcraft-vpn", storageBucket: "fixcraft-vpn.appspot.com", messagingSenderId: "811886239981", appId: "1:811886239981:web:9e43da7b31be5f7fb1ace4", measurementId: "G-CTR9TEET9E" };
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const infodat = ref(db, 'data');
function readd(){
onValue(infodat, (snapshot) => {
    var data = snapshot.val();
	module.hosts=data.hosts
    console.log(self.__uv$config)
  })};
  readd();