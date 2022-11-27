//inputnya
const inputText = document.querySelector(".inputText");
const li = document.querySelectorAll(".container > ul > li");
const coba = document.querySelector(".coba");
const tombolGantiTema = document.querySelector(".tombolGantiTema");
const alert = document.querySelector(".alert");
const navKiri = document.querySelector(".navKiri");

inputText.addEventListener("keyup", function (e) {
  e.preventDefault();
  const ul = document.querySelector(".container > ul");
  const filter = inputText.value.toLowerCase();
  for (let i = 0; i < li.length; i++) {
    if (
      li[i]
        .querySelectorAll(".container > ul > li > a")[0]
        .innerHTML.toLowerCase()
        .includes(filter) != false
    ) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
});

//tombol coba diklik
coba.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputText.value.toLowerCase() === "linux" ||
    inputText.value.toLowerCase() === "apa itu linux"
  ) {
    window.location.href = "./pages/article1.html";
  } else if (
    inputText.value.toLowerCase() === "react" ||
    inputText.value.toLowerCase() === "apa itu react"
  ) {
    window.location.href = "./pages/article2.html";
  } else if (
    inputText.value.toLowerCase() === "angular" ||
    inputText.value.toLowerCase() === "apa itu angular"
  ) {
    window.location.href = "./pages/article3.html";
  } else {
    window.location.href = "./pages/404.html";
  }
});

//dark mode

const themes = document.querySelector(".themes");

tombolGantiTema.addEventListener("click", function () {
  alert.style.display = "block";
});

const navigation = document.querySelector("#navigation");
const body = document.body;

const title = document.querySelector(".title");

function warnaCoba(warna) {
  coba.addEventListener("mouseenter", function () {
    coba.style.backgroundColor = warna;
    coba.addEventListener("mouseleave", function () {
      coba.style.backgroundColor = "";
    });
  });
}

function gantiWarnaBorderli(warna) {
  for (i = 0; i < li.length; i++) {
    li[i].style.border = `1px solid ${warna}`;
  }
}

themes.addEventListener("click", function (e) {
  if (e.target.innerHTML.toLowerCase() === "dark mode") {
    tombolGantiTema.style.backgroundColor = "white";
    tombolGantiTema.style.color = "black";
    navigation.style.backgroundColor = "black";
    navigation.style.borderBottomColor = "white";
    body.style.backgroundColor = "black";
    title.style.color = "white";
    gantiWarnaBorderli("white");
    warnaCoba("white");
  } else if (e.target.innerHTML.toLowerCase() === "light mode") {
    tombolGantiTema.style.backgroundColor = "black";
    tombolGantiTema.style.color = "white";
    navigation.style.backgroundColor = "white";
    navigation.style.borderBottomColor = "black";
    body.style.backgroundColor = "white";
    title.style.color = "black";
    warnaCoba("black");
    gantiWarnaBorderli("black");
  } else {
    tombolGantiTema.style.backgroundColor = "black";
    tombolGantiTema.style.color = "purple";
    navigation.style.backgroundColor = "purple";
    navigation.style.borderBottomColor = "black";
    body.style.backgroundColor = "purple";
    title.style.color = "black";
    warnaCoba("purple");
    gantiWarnaBorderli("black");
  }
});

function huruf() {
  let array = [
    "MESIN PENCARi",
    "GOOGLE",
    "MOZILLA",
    "BING",
    "YAHOO",
    "INTERNET EXPLORER",
    "ntah apa ini",
  ];
  let random = Math.round(Math.random() * 6);
  const huruf = [...array[random]].map((e) => `<span>${e}</span>`).join("");
  title.innerHTML = huruf;
}

huruf();

function tulisanKiri(namaDepan, namaBelakang) {
  navKiri.addEventListener("mouseenter", function () {
    navKiri.innerHTML = namaBelakang;
  });
  navKiri.addEventListener("mouseleave", function () {
    navKiri.innerHTML = namaDepan;
  });
}

tulisanKiri("VITO", "ZIDANE");
