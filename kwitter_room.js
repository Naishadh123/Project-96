var firebaseConfig = {
      apiKey: "AIzaSyCI8GHeQX0v_9izP7xSTf0_dPE86U4ehGQ",
      authDomain: "let-s-chat-app-27635.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-27635-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-27635",
      storageBucket: "let-s-chat-app-27635.appspot.com",
      messagingSenderId: "262966928563",
      appId: "1:262966928563:web:9c6d6cf8a7b00437843cc6"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("username").innerHTML="Welcome "+username+"!";

    function addroom()
    {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html";
}
