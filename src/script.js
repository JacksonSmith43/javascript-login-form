const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];


let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
  document.getElementById("error-message").hidden = true;

};

let renderError = () => {
  document.getElementById("error-message").hidden = false;
  document.getElementById("success-message").hidden = true;

};

let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);


  for (let i = 0; i < usersTable.length; i++) {
    //console.log("usersTable[i].username, ", usersTable[i].username);

    if (usersTable[i].username === email && usersTable[i].password === password) {
      renderSuccess();
      break;

    } else if (usersTable[i].username !== email || usersTable[i].password !== password) {
      renderError();

    } else {
      console.log("Some other issue has arisen.");
    }
  }

});
