const btn = document.querySelector("button");
const image = document.querySelector("img");
btn.addEventListener("click", getRandomPhoto);

function getRandomPhoto() {
  fetch("https://random-d.uk/api/random")
    .then((response) => response.json())
    .then((data) => image.setAttribute("src", data.url))
    .catch((err) => {
      console.error(err);
    });
}
