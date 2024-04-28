let container = document.querySelector(".container");
let search = document.querySelector(".search");
let laptops = [
  {
    model: "ASUS vivoo book",
    company: "ASUS",
  },
  {
    model: "Think Tad",
    company: "lenovo",
  },
  {
    model: "Pro Book",
    company: "HP",
  },
  {
    model: "Titan",
    company: "MSI",
  },
  {
    model: "Aorus",
    company: "GIGABYTE",
  },
  {
    model: "Vostro",
    company: "DELL",
  },
  {
    model: "MacBook Pro",
    company: "Apple",
  },
  {
    model: "Surface Laptop",
    company: "Microsoft",
  },
  {
    model: "Swift",
    company: "Acer",
  },
  {
    model: "ZenBook",
    company: "ASUS",
  },
  {
    model: "Chromebook",
    company: "Google",
  },
  {
    model: "Gram",
    company: "LG",
  },
  {
    model: "MateBook",
    company: "Huawei",
  },
  {
    model: "Yoga",
    company: "Lenovo",
  },
  {
    model: "XPS",
    company: "DELL",
  },
  {
    model: "Legion",
    company: "Lenovo",
  },
  {
    model: "ROG Strix",
    company: "ASUS",
  },
  {
    model: "Envy",
    company: "HP",
  },
  {
    model: "Surface Book",
    company: "Microsoft",
  },
  {
    model: "Pavilion",
    company: "HP",
  },
  {
    model: "ThinkPad X1 Carbon",
    company: "Lenovo",
  },
];
let searchResult = laptops;
search.addEventListener("input", (e) => {
  const userSearchWord = e.target.value.toLowerCase();
  searchResult = laptops.filter((item) => {
    return item.company.toLowerCase().includes(userSearchWord);
  });
  renderInUI(searchResult, container);
});
function renderInUI(array, place) {
  place.innerHTML = "";
  array.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${item.model}</h2>
        <p>${item.company}</p>
        <a href="#">More Information</a>
    `;
    place.appendChild(div);
  });
}
renderInUI(searchResult, container);
