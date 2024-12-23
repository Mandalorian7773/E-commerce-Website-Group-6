// Firebase v8 Syntax
var firebaseConfig = {
  apiKey: "AIzaSyAOr_OKYhxOZTwB5iPAV7zPUch3AI4E32o",
  authDomain: "login-155b9.firebaseapp.com",
  projectId: "login-155b9",
  storageBucket: "login-155b9.appspot.com",
  messagingSenderId: "535516937194",
  appId: "1:535516937194:web:9fcdd751de15d7e7149093",
  measurementId: "G-HTQJ2B8K47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function register() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let full_name = document.getElementById('full_name').value;

  // Validate Input Fields
  if (!validate(email) || !validate_password(password)) {
    alert("Email or Password is invalid!");
    return;
  }
  if (!validate_field(full_name)) {
    alert("Full name cannot be empty!");
    return;
  }

  // Register the User
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      let user = auth.currentUser;

      alert('User Created Successfully!');

      // Store user data in the database
      let database_ref = database.ref();
      let user_data = {
        email: email,
        full_name: full_name,
        last_login: Date.now(),
      };

      database_ref.child('users/' + user.uid).set(user_data);
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function login() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (!validate(email) || !validate_password(password)) {
    alert("Email or Password is invalid!");
    return;
  }

  auth.signInWithEmailAndPassword()
  .then(function(){
    let uer = auth.currentUser
    let database_ref = database.ref()
    var user_data = {
      last_login:Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data);
    alert("user logged In!!")
  })
  .catch(function(error){
    alert(error.message)
  })
}

function validate(email) {
  let expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_field(field) {
  return field != null && field.trim() !== "";
}