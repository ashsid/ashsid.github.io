  var config = {
    apiKey: "AIzaSyA39iGhFRD0j8i4siqoXogv7AOeCqgnS5s",
    authDomain: "websitekris.firebaseapp.com",
    databaseURL: "https://websitekris.firebaseio.com",
    projectId: "websitekris",
    storageBucket: "",
    messagingSenderId: "1006598741979"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var accname=' ';
    var userId = firebase.auth().currentUser.uid;
    var firebaseref=firebase.database().ref();
    var userref=firebaseref.child('users')
    userref.orderByChild("userID").equalTo(userId).on("child_added", function(data) {
    accname= data.val().name;
    $("#account").html(accname+"<span class='glyphicon glyphicon-user'></span><span class='caret'></span>");
});

  } 
else {
    // No user is signed in.
  }
});

function logout(){
firebase.auth().signOut();
window.open("1.html","_self");
}