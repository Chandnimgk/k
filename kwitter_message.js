//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name"); 

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                 name:user_name,
                like : 0,
                message : msg
          });

        document.getElementById("msg").value="";
    }
    


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     console.log(firebase_message_id);
     console.log(message_data);
     name=message_data['name'];
     message=message_data['message'];
     like=message_data['like'];
     name_with_tag="<h4>"+name+"<img id='user_tick.png'></h4>";
     message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
     like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+ " onclick='update_like(this.id)'> ";
     span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
     row=name_with_tag+message_with_tag+like_button+span_with_tag;
     document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function update_like(message_id)
{
     console.log("clicked_on_like_button-"+message_id);
       button_id=message_id;
       likes=document.getElementById(button_id).value;
       update_likes=Number(likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
       like:update_likes
      });
}
 
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}