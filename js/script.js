
// Navbar Toogle for All Pages ***********************

let menuBtn = document.querySelector("button.menu_toggle");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

// Hide Navbar on Scroll ******************************

let navBar = document.querySelector("header");
let scrollPos = 0;

window.addEventListener("scroll", () => {
  let scrollPosNow = window.pageYOffset || document.pageYOffset;

  if (scrollPosNow > scrollPos) {
    navBar.style.transform = "translateY(-100%)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  scrollPos = scrollPosNow;
});

// Timeline:
document.addEventListener("DOMContentLoaded", function () {
  const timelineList = document.getElementById("timelineList");
  const timelineItems = timelineList.querySelectorAll("li");

  timelineItems.forEach(function (item) {
    item.addEventListener("click", function () {
      timelineItems.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
      this.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});

function openDialog(message, userDetails) {
  document.getElementById('dialog-message').innerText = message;
  document.getElementById('user-details').innerText = userDetails;
  document.getElementById('dialog').style.display = 'block';
}

function closeDialog() {
  document.getElementById('dialog').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const userData = {};

      formData.forEach((value, key) => {
          userData[key] = value;
      });

      fetch('/sign_up', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Success:', data);
          // Handle success response (e.g., show a success message to the user)
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle error (e.g., show an error message to the user)
      });
  });
});

$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
      event.preventDefault();

      var formData = {
          name: $('#nameInput').val(),
          registrationNumber: $('#registrationNumberInput').val(),
          phoneNumber: $('#phoneNumberInput').val(),
          learnerEmail: $('#learnerEmailInput').val(),
          year: $('#yearSelect').val(),
          branch: $('#branchSelect').val(),
          password: $('#passwordInput').val()
      };

      $.ajax({
          type: 'POST',
          url: '/sign_up',
          data: formData,
          dataType: 'json',
          encode: true
      })
      .done(function(data) {
          console.log(data);
          // Redirect to signup_success.html
          window.location.href = 'signup_success.html';
      })
      .fail(function(data) {
          console.error(data);
          // Handle error (e.g., show an error message to the user)
      });
  });
});
