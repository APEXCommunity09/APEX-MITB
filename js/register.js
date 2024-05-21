import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Function to handle form submission
async function handleRegistration() {
  var name = document.getElementById('nameInput').value;
  var registrationNumber = document.getElementById('registrationNumberInput').value;
  var phoneNumber = document.getElementById('phoneNumberInput').value;
  var learnerEmail = document.getElementById('learnerEmailInput').value;
  var year = document.getElementById('yearSelect').value;
  var branch = document.getElementById('branchSelect').value;
  var password = document.getElementById('passwordInput').value;
  var confirmPassword = document.getElementById('confirmPasswordInput').value;

  // Validate name length
  if (name.length > 50) {
    alert("Name should be a maximum of 50 characters.");
    return;
  }

  // Validate phone number length
  if (phoneNumber.length !== 10) {
    alert("Phone number should be exactly 10 characters long.");
    return;
  }

  // Validate email pattern
  var emailPattern = /^[^\s@]+@learner\.manipal\.edu$/;
  if (!emailPattern.test(learnerEmail)) {
    alert("Email should be in the format *@learner.manipal.edu");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "users"), {
      fullName: name,
      regNo: registrationNumber,
      phoneNo: phoneNumber,
      lEmail: learnerEmail,
      year: year,
      branch: branch,
      password: password
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Registration successful!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error occurred during registration. Please try again later.");
  }
}

// Add event listener to the registration form submit button
document.getElementById('registerButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission
  handleRegistration(); // Call the function to handle registration
});

