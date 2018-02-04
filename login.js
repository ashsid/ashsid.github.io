  var config = {
    apiKey: "AIzaSyA39iGhFRD0j8i4siqoXogv7AOeCqgnS5s",
    authDomain: "websitekris.firebaseapp.com",
    databaseURL: "https://websitekris.firebaseio.com",
    projectId: "websitekris",
    storageBucket: "",
    messagingSenderId: "1006598741979"
  };
  firebase.initializeApp(config);
  var txtemail=document.getElementById("loginemail");
  var txtpass=document.getElementById("loginpassword");
  var loginbtn=document.getElementById("log");
  var email=txtemail.value;
  var pswd=txtpass.value;
//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//    var user = firebase.auth().currentUser;
// var name, email, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// //alert(name);
// window.open("logit.html","_self");
// }
//   } 
//   else {
//     // No user is signed in.
//     window.location.reload();
//   }
// });
function login()
{
firebase.auth().signInWithEmailAndPassword(email,pswd)
.then(function(){
  window.open("logit.html","_self");
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error : "+ errorMessage);
});
} 