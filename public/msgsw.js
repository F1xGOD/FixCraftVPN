import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, onValue, update } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ89agVS02dwVK9-yWwpZOvMkQWLiKcEM",
    authDomain: "fixcraft-vpn.firebaseapp.com",
    databaseURL: "https://fixcraft-vpn-default-rtdb.firebaseio.com",
    projectId: "fixcraft-vpn",
    storageBucket: "fixcraft-vpn.appspot.com",
    messagingSenderId: "811886239981",
    appId: "1:811886239981:web:9e43da7b31be5f7fb1ace4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let currentUsername = null;

// Listen for username from main thread
self.addEventListener('message', (event) => {
    if (event.data.type === 'SET_USERNAME') {
        currentUsername = event.data.username;
    }
});

// Listen for new messages
const chatRef = ref(db, 'data/chat');
onValue(chatRef, (snapshot) => {
    const messages = snapshot.val();
    if (!messages) return;

    const latestMsgKey = Object.keys(messages).pop();
    const latestMsg = messages[latestMsgKey];

    // Check if the message sender is different from the current user
    if (latestMsg.sender !== currentUsername ) {
        if(!latestMsg.dl){
        const options = {
            tag: 'Chat',
            body: `${latestMsg.sender}: ${latestMsg.content}`,
            icon: 'FixCraft.png',
            vibrate: [500, 200, 500],
        };

        self.registration.showNotification('New Message', options);
        var lis =[]
            // Mark message as delivered
        if (latestMsg.dl){
            lis=latestMsg.dl
        }

        lis=lis.concat(currentUsername)
        console.log(lis)
        update(ref(db, `data/chat/${latestMsgKey}`), { status: 'delivered', dl: lis});
    }else if(latestMsg.dl.includes(currentUsername)===false){
            const options = {
                tag: 'Chat',
                body: `${latestMsg.sender}: ${latestMsg.content}`,
                icon: 'FixCraft.png',
                vibrate: [500, 200, 500],
            };

            self.registration.showNotification('New Message', options);
            var lis =[]
            // Mark message as delivered
            if (latestMsg.dl){
                lis=latestMsg.dl
            }

            lis=lis.concat(currentUsername)
            console.log(lis)
            update(ref(db, `data/chat/${latestMsgKey}`), { status: 'delivered', dl: lis});
        }}
});
