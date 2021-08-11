var firebaseConfig = {
    apiKey: "AIzaSyDmoN2E6QjSOtmRw8R8WWgOYi9uG4jrqBk",
    authDomain: "kwitter-2-8eb4f.firebaseapp.com",
    databaseURL: "https://kwitter-2-8eb4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-8eb4f",
    storageBucket: "kwitter-2-8eb4f.appspot.com",
    messagingSenderId: "461435995565",
    appId: "1:461435995565:web:3e67bae13b26e5252f4d24",
    measurementId: "G-BFHV58YVD6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function login() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({purpose:"Hello"});
    
}