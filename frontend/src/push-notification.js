import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyAjQ0WVZEN9d0zr3djVEIhZ168_eTjlDxU",
        authDomain: "manmethacks2020-ngofundtracker.firebaseapp.com",
        databaseURL: "https://manmethacks2020-ngofundtracker.firebaseio.com",
        projectId: "manmethacks2020-ngofundtracker",
        storageBucket: "manmethacks2020-ngofundtracker.appspot.com",
        messagingSenderId: "280533245240",
        appId: "1:280533245240:web:ba86cd2c55ee81509a75cd",
        measurementId: "G-VVF8CPQ961"
    });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('user token:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}
