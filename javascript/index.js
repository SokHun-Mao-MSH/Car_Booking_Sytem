const form = document.getElementById("formcreate");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cfpassword = document.getElementById("cfpassword").value;

  if (password !== cfpassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password,
  };

  let users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  window.location.href = "login.html";
});
