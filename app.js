
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
  var confirmpassword=document.getElementById("signuppassword2");
 signupbtn.addEventListener('click',e=>{
  var email=txtemail.value;
  var pass=txtpass.value;
  var confpass=confirmpassword.value;
  if(pass!=confpass)
  {
    alert("Passwords incorrect");
    window.location.reload();
  }
  else
  {
  var arr=pass.split('');
  if(arr.length<8)
  {
    alert("password is too small");
    window.location.reload();
  }
  const auth=firebase.auth();
  const promise=auth.createUserWithEmailAndPassword(email,pass);
  //window.open("1.html");
  promise.catch(e => {
  if(e.code == "auth/email-already-in-use")
  {
    alert("The email already exists");
    window.location.reload();
  }
  else
  {
    window.open("1.html");
  }
  });
  }

 });
// firebase.auth().onAuthStateChanged(firebaseUser=>{
//   if(firebaseUser)
//     console.log(firebaseUser);
//   else
//     console.log("not logged in");
// })
}());