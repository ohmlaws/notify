// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('"https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging');

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDTThbBrX_SThsM1d7DaxFSFbQUq61iF5Y",
  authDomain: "notify-7a8b9.firebaseapp.com",
  projectId: "notify-7a8b9",
  storageBucket: "notify-7a8b9.firebasestorage.app",
  messagingSenderId: "1073549521956",
  appId: "1:1073549521956:web:f67cfb657d2052a31cd4b1",
  measurementId: "G-RGVQ8TF07B"
});

// Initialize messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
