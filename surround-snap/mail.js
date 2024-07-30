const sendEmail = function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  var maitoLink =
    "mailto:" +
    encodeURIComponent(email) +
    "?body=" +
    encodeURIComponent("Name: " + name + "\n\n" + message);

  window.location.href = maitoLink;
};
