import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* FIREBASE CONFIG */

const firebaseConfig = {
  
  apiKey: "AIzaSyAqO5Or9Wla7AoMSOStGmRUarye8x12ay0",
  authDomain: "lumet-e3c66.firebaseapp.com",
  projectId: "lumet-e3c66",
  storageBucket: "lumet-e3c66.firebasestorage.app",
  messagingSenderId: "939922811683",
  appId: "1:939922811683:web:fc792bce189199a5c4fa96",
  measurementId: "G-2C00XQ1Q0F"
  
};

/* INITIALIZE */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/* =========================
SIGN UP
========================= */

window.signupUser = function() {
  
  const name =
    document.getElementById("signupName").value;
  
  const email =
    document.getElementById("signupEmail").value;
  
  const password =
    document.getElementById("signupPassword").value;
  
  createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      alert("Account Created Successfully");
      
      /* PROFILE */
      
      let firstLetter =
        name.charAt(0).toUpperCase();
      
      let profile =
        document.getElementById("profileCircle");
      
      profile.style.display = "flex";
      
      profile.innerText = firstLetter;
      
      /* HIDE BUTTONS */
      
      document.getElementById("loginBtn")
        .style.display = "none";
      
      document.getElementById("signupBtn")
        .style.display = "none";
      
      /* CLOSE POPUP */
      
      closeSignup();
      
    })
    
    .catch((error) => {
      
      alert(error.message);
      
    });
  
}

/* =========================
LOGIN
========================= */

window.loginUser = function() {
  
  const name =
    document.getElementById("loginName").value;
  
  const email =
    document.getElementById("loginEmail").value;
  
  const password =
    document.getElementById("loginPassword").value;
  
  signInWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      alert("Login Successful");
      
      /* PROFILE */
      
      let firstLetter =
        name.charAt(0).toUpperCase();
      
      let profile =
        document.getElementById("profileCircle");
      
      profile.style.display = "flex";
      
      profile.innerText = firstLetter;
      
      /* HIDE BUTTONS */
      
      document.getElementById("loginBtn")
        .style.display = "none";
      
      document.getElementById("signupBtn")
        .style.display = "none";
      
      /* CLOSE POPUP */
      
      closeLogin();
      
    })
    
    .catch((error) => {
      
      alert(error.message);
      
    });
  
}