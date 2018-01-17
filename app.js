
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
  var txtemail=document.getElementById("signupemail");
  var txtpass=document.getElementById("signuppassword");
  var signupbtn=document.getElementById("signupbtn");

 signupbtn.addEventListener('click',e=>{
  var email=txtemail.value;
  var pass=txtpass.value;
  const auth=firebase.auth();
  const promise=auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));

 });
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser)
    console.log(firebaseUser);
  else
    console.log("not logged in");
})
}());