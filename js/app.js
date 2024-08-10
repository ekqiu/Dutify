const content = document.querySelector(".content");
const coffees = [
  { name: "Foyer", image: "images/coffee1.jpg" },
  { name: "Canteen", image: "images/coffee2.jpg" },
  { name: "Library", image: "images/coffee3.jpg" },
  { name: "Carpark", image: "images/coffee4.jpg" },
  { name: "Side Gate", image: "images/coffee5.jpg" },
  { name: "Main Gate", image: "images/coffee6.jpg" },
  { name: "Corridor", image: "images/coffee7.jpg" },
  { name: "Hall", image: "images/coffee8.jpg" },
  { name: "Staircase", image: "images/coffee9.jpg" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View Members On-Duty</a>
              </div>
              `)
  );
  content.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}