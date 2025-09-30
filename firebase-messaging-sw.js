// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3UqR7G6LJxQOft046GVuvalq61Nmga80",
  authDomain: "dashboardv6-41aba.firebaseapp.com",
  projectId: "dashboardv6-41aba",
  storageBucket: "dashboardv6-41aba.appspot.com",
  messagingSenderId: "837982707095",
  appId: "1:837982707095:web:efd87ab0b9dca97f51b8d2"
});

// Initialise le service worker Firebase Messaging
const messaging = firebase.messaging();

// Quand une notif arrive en arrière-plan
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Notification reçue en arrière-plan :", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo-camping-la-plage.png" // tu peux changer l’icône
  });
});
