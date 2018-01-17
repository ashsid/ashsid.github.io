(function(){
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

 loginbtn.addEventListener('click',e=>{
  var email=txtemail.value;
  var pass=txtpass.value;
  const auth=firebase.auth();
  const promise=auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => {
  if(e.code == "auth/wrong-password")
  {
    alert("Wrong password please type in the correct password");
  }
  else if(e.code == "auth/user-not-found")
  {
    alert("User not found please click on sign in");
  }
  else if(e.code == "auth/user-found")
  {
    alert("Logged in");
  }
  });
 });
// firebase.auth().onAuthStateChanged(firebaseUser=>{
//   if(firebaseUser)
//     console.log(firebaseUser);
//   else
//     console.log("not logged in");
// })
}());