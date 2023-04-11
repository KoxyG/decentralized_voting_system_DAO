const submit = document.getElementById("submit");

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");
console.log("Contact Page");

burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  navLinks.classList.toggle("is-active");
});

/*it seems is-active or any random name you call it is a class that was created during this process
    and needs to be called or included in the media query of the mibile view*/

document.querySelectorAll("a").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("is-active");
    navLinks.classList.remove("is-active");
  })
);

submit.addEventListener("click", async (e) => {
  await sendEmail();
  console.log("Send Email");
});

function sendSecureEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;
  Email.send({
    SecureToken: "144e1dc7-e9c7-4599-9886-66b4064fff5a",
    To: "akingbadebasit26@gmail.com",
    From: email,
    Subject: "DBALLOT EMAIL CONTACT",
    Body: `Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Phone: ${phone} <br/> Company: ${company}`,
  })
    .then(
      //   message => alert(message)
      console.log("Email sent.")
    )
    .catch((error) => {
      console.log(error);
    });
}

function sendEmail() {
  const email = document.getElementById("email").value;
  console.log(email);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "akingbadebasit26@gmail.com",
    Password: "FD18C27BC949B04BBE6055D672A84B5A5CB0",
    To: "akingbadebasit26@gmail.com",
    From: email,
    Subject: "This is the subject",
    Body: "And this is the body",
  })
    .then((message) => alert(message))
    .catch((error) => console.log(error));
}
