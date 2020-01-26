const fetch = require('node-fetch');
const config = require('./config.json')

function sendFCMNotif(title, body, token) {
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: 'post',
    body: JSON.stringify(
      {
        "notification": {
          "title": title,
          "body": body,
          "click_action": "http://localhost:3000/",
          "icon": "http://localhost:3000/favicon.ico"
        },
        "to": token
      }
    ),
    headers: {
      "Content-Type": "application/json",
      "Authorization":"key=" + config["fb_server_key"]
    },
  }).then((res) => console.log("notif sent"))
}


// sendFCMNotif("title", "body", "cw4tml9r6drj-acOYLebkT:APA91bHL2O-JQsgbRr4BWF5Q3evzf_o07-Vozn8Y8FfXHuRb__j_caedJ8xQ7oThzkpYotEUmviWZeBcOBvG6y1t6ykTNPFTGJtfpHAdqqG7G1VE7wsKcFChFXGYZir6VZA_fsNY1iV3")
