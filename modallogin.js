  var config = {
    apiKey: "AIzaSyA39iGhFRD0j8i4siqoXogv7AOeCqgnS5s",
    authDomain: "websitekris.firebaseapp.com",
    databaseURL: "https://websitekris.firebaseio.com",
    projectId: "websitekris",
    storageBucket: "",
    messagingSenderId: "1006598741979"
  };
  firebase.initializeApp(config);
 function login() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var txtemail=document.getElementById("loginemail");
  var txtpass=document.getElementById("loginpassword");
  var loginbtn=document.getElementById("log");
  var email=txtemail.value;
  var pswd=txtpass.value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (pswd.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, pswd)
        .then(function(){
          window.open("logit.html","_self");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          }
          else
          {
            alert(errorMessage);
          }
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
    }