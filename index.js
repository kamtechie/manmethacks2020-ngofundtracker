var admin = require("firebase-admin");

var serviceAccount = require("./manmethacks2020-ngofundtracker-firebase-adminsdk-nxfkc-9da25aab61.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manmethacks2020-ngofundtracker.firebaseio.com"
}); 

