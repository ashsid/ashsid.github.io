  var config = {
    apiKey: "AIzaSyA39iGhFRD0j8i4siqoXogv7AOeCqgnS5s",
    authDomain: "websitekris.firebaseapp.com",
    databaseURL: "https://websitekris.firebaseio.com",
    projectId: "websitekris",
    storageBucket: "",
    messagingSenderId: "1006598741979"
  };
  firebase.initializeApp(config);
  var firebaseref=firebase.database().ref();
  function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
  function signup()
  {
  var username=document.getElementById("first-name");
  var txtemail=document.getElementById("signupemail");
  var txtpass=document.getElementById("signuppassword");
  var confirmpassword=document.getElementById("signuppassword2");
  var email=txtemail.value;
  var pass=txtpass.value;
  var confpass=confirmpassword.value;
  var uname=username.value;
  var arr=pass.split('');
  if(pass!=confpass)
  {
    alert("Passwords incorrect");
    window.location.reload();
  }
 else if(arr.length<8)
  { 
    alert(arr);
    alert(pass);
    alert("password is too small");
    window.location.reload();
  }
 else if(!(document.getElementById("checkbox").checked))
   {
    alert("Please agree to the terms and conditions");
   }
 else
  {
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
}
}
  firebase.auth().onAuthStateChanged(function(user) {
    var username=document.getElementById("first-name");
  var uname=username.value;
  var txtemail=document.getElementById("signupemail");
  var email=txtemail.value;
  if (user) {
    // User is signed in.
    var userId = firebase.auth().currentUser.uid;
    var userref=firebaseref.child('users');
    userref.push({
       userID:userId,
       name:uname,
       emaiId:email
    });
  window.open("logit.html","_self");
//sendEmailVerification();
}
 else {
    // No user is signed in.
  }
});