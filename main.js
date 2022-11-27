const tombolGantiTema = document.querySelector(".tombolGantiTema");
const navigation = document.querySelector("#navigation");
const body = document.querySelector("body");
const title = document.querySelector(".title");
const navKiri = document.querySelector(".navKiri");
const themes = document.querySelector(".themes");
const alert = document.querySelector(".alert");
const p = document.querySelector("p");
const h3 = document.querySelector("h3");
const li = document.querySelectorAll("li");
const h2 = document.querySelector("h2");

function gantiWarnaLi(warna) {
  for (i = 0; i < li.length; i++) {
    li[i].style.color = warna;
  }
}

tombolGantiTema.addEventListener("click", function () {
  alert.style.display = "block";
});

themes.addEventListener("click", function (e) {
  if (e.target.innerHTML.toLowerCase() === "dark mode") {
    tombolGantiTema.style.backgroundColor = "white";
    tombolGantiTema.style.color = "black";
    navigation.style.backgroundColor = "black";
    navigation.style.borderBottomColor = "white";
    body.style.backgroundColor = "black";
    title.style.color = "white";
    p.style.color = "white";
    h2.style.color = "white";
    gantiWarnaLi("white");
  } else if (e.target.innerHTML.toLowerCase() === "light mode") {
    tombolGantiTema.style.backgroundColor = "black";
    tombolGantiTema.style.color = "white";
    navigation.style.backgroundColor = "white";
    navigation.style.borderBottomColor = "black";
    body.style.backgroundColor = "white";
    title.style.color = "black";
    p.style.color = "black";
    h2.style.color = "black";
    gantiWarnaLi("black");
  } else {
    tombolGantiTema.style.backgroundColor = "black";
    tombolGantiTema.style.color = "purple";
    navigation.style.backgroundColor = "purple";
    navigation.style.borderBottomColor = "black";
    body.style.backgroundColor = "purple";
    title.style.color = "black";
  }
});

function tulisanKiri(namaDepan, namaBelakang) {
  navKiri.addEventListener("mouseenter", function () {
    navKiri.innerHTML = namaBelakang;
  });
  navKiri.addEventListener("mouseleave", function () {
    navKiri.innerHTML = namaDepan;
  });
}

tulisanKiri("VITO", "ZIDANE");
