let container = document.querySelector(".search-container");
let search = document.querySelector(".search");
let laptops = [
  {
    model: "ASUS vivoo book",
    compani: "ASUS",
  },
  {
    model: "Think Tad",
    compani: "lenovo",
  },
  {
    model: "Pro Book",
    compani: "HP",
  },
  {
    model: "Titan",
    compani: "MSI",
  },
  {
    model: "Aorus",
    compani: "GIGABYTE",
  },
  {
    model: "Vostro",
    compani: "DELL",
  },
];
console.log(laptops);
let searchResult = laptops;
search.addEventListener("input", (e) => {
  const usersearchWord = e.target.value.toLowerCase();
  searchResult = laptops.filter((item) => {
    return item.compani.toLowerCase().includes(usersearchWord);
  });
  renderInUI(searchResult, container);
});
function renderInUI(array, place) {
  array.forEach((item) => {
    const div = document.createElement("div");
    container.innerHTML = `
   <div class="searchResultBox">
      <h2>${item.model}</h2>
      <p>${item.compani}</p>
      <a href="#">More Information</a>
   </div>
  `;
    div.classList.add("searchResult");
    place.appendchild(div);
  });
}
