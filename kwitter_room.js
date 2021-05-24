// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC7l7MfWD5cvUGng69jhALFk5x2zHi517E",
      authDomain: "kwitter-6c743.firebaseapp.com",
      projectId: "kwitter-6c743",
      storageBucket: "kwitter-6c743.appspot.com",
      messagingSenderId: "654824457083",
      appId: "1:654824457083:web:1843dbea5115fe30ffb3de"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
