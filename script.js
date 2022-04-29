window.addEventListener("load", () => {
  loadData();
  loadTheme();
});

window.addEventListener("scroll", () => {
  scrollEffects();
});

function loadData() {
  for (let i = 0; i < database.length; i++) {
    const content = document.getElementById("content");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const text = document.createTextNode(database[i].title);
    const div = document.createElement("div");

    content.appendChild(figure);
    figure.className = "card";
    figure.appendChild(img);
    img.src = database[i].image;
    figure.appendChild(figcaption);
    figcaption.appendChild(text);
  }
}

function loadTheme() {
  a = localStorage.getItem("theme");
  if (a) {
    document.querySelector("body").className = a;
    document.querySelector("input[type=radio][name=theme-radio][value=" + a + "]").checked = true;
  } else {
    localStorage.setItem("theme", "theme-light"); //set default theme
    loadTheme();
  }
  b = localStorage.getItem("accent");
  if (b) {
    document.querySelector(":root").style.setProperty("--accent-color", "#" + b);
    document.querySelector("input[type=radio][name=accent-radio][value=" + b + "]").checked = true;
  } else {
    localStorage.setItem("accent", "dd191d"); //set default accent
    loadTheme();
  }
}

function scrollEffects() {
  a = document.getElementById("top").getBoundingClientRect().top;
  if (a < -32) {
    document.getElementById("top-button").classList.add("visible")
  } else {
    document.getElementById("top-button").classList.remove("visible")
  }
}

a = document.querySelectorAll("input[type=radio][name=theme-radio]");
Array.prototype.forEach.call(a, function(radio) {
  radio.addEventListener("change", function() {
    localStorage.setItem("theme", radio.value);
	  loadTheme();
  });
});

b = document.querySelectorAll("input[type=radio][name=accent-radio]");
Array.prototype.forEach.call(b, function(radio) {
  radio.addEventListener("change", function() {
    localStorage.setItem("accent", radio.value);
    loadTheme();
  });
});

document.getElementById("settings-button").addEventListener("click", function() {
  document.getElementById("settings").open = true;
});

d = document.getElementById("filter");
d.addEventListener("input", function filter() {
  var filter, ul, li, a, i, txtValue;
  filter = d.value.toUpperCase();
  figures = document.querySelectorAll("figure");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < figures.length; i++) {
    figcaption = figures[i].getElementsByTagName("figcaption")[0];
    txtValue = figcaption.textContent || figcaption.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      figures[i].style.display = "";
    } else {
      figures[i].style.display = "none";
    }
  }
});
