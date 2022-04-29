window.onscroll = function updateTheme() {
	m = document.getElementById("top").getBoundingClientRect().top;
	console.log(m);
	if (m < -32) {
		document.getElementById("top-button").classList.add("visible")
	}
	else {
		document.getElementById("top-button").classList.remove("visible")
	}
}

window.onload = function updateTheme() {
	z = localStorage.getItem("theme");
	if (z) {
		document.querySelector("body").className = z;
		document.querySelector("input[type=radio][name=theme-radio][value=" + z + "]").checked = true;
	}
	else {
		localStorage.setItem("theme", "theme-light"); //set default theme
		updateTheme();
	}
	y = localStorage.getItem("accent");
	if (y) {
		document.querySelector(":root").style.setProperty("--accent-color", "#" + y);
		document.querySelector("input[type=radio][name=accent-radio][value=" + y + "]").checked = true;
	}
	else {
		localStorage.setItem("accent", "dd191d"); //set default accent
		updateTheme();
	}
}

a = document.querySelectorAll("input[type=radio][name=theme-radio]");
Array.prototype.forEach.call(a, function(radio) {
   radio.addEventListener("change", function() {
		 document.querySelector("body").className = radio.value;
		 localStorage.setItem("theme", radio.value);
	 });
});

b = document.querySelectorAll("input[type=radio][name=accent-radio]");
Array.prototype.forEach.call(b, function(radio) {
   radio.addEventListener("change", function() {
		 document.querySelector(":root").style.setProperty("--accent-color", "#" + radio.value);//
		 localStorage.setItem("accent", radio.value);
	 });
});

c = document.getElementById("settings-button");
c.addEventListener("click", function () {
  document.getElementById("settings").open = true;
}, false);

d = document.getElementById("filter");
d.addEventListener("input", function filter() {
  var filter, ul, li, a, i, txtValue;
  console.log(d);
	filter = d.value.toUpperCase();
	console.log(filter);
  figures = document.querySelectorAll("figure");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < figures.length; i++) {
    figcaption = figures[i].getElementsByTagName("figcaption")[0];
    txtValue = figcaption.textContent || figcaption.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      figures[i].style.display = "";
    }
		else {
      figures[i].style.display = "none";
    }
  }
}, false);
