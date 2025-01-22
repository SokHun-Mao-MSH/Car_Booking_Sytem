document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const findUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (findUser) {
    alert("Login successful!");
    window.location.href = "homepage.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
