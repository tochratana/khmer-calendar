const tds = document.querySelectorAll("td");
const popup = document.querySelector(".popup"); // or use querySelector

tds.forEach((td) => {
  td.addEventListener("click", () => {
    popup.classList.toggle("block");
  });
});
