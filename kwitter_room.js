
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAaLJ2ecbTqyoJtHFkfDNAX269y85FrcxA",
      authDomain: "kwitter-3c38f.firebaseapp.com",
      databaseURL: "https://kwitter-3c38f-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c38f",
      storageBucket: "kwitter-3c38f.appspot.com",
      messagingSenderId: "718751684495",
      appId: "1:718751684495:web:90c30b667f14496cfeddfa"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

   function add_room()
   {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            prosure : "adding room name"
      })
      localStorage.setItem("room_name" ,room_name);
       window.location="kwitter_message.html";
   }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr> "
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_message.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}