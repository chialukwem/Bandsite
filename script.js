// Get the container element
let navContainer = document.getElementById("nav__links");

// Get all links with class="header__nav--item" inside the container
let links = navContainer.getElementsByClassName("header__nav--item");

// Loop through the links and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("header__nav--active");
    current[0].className = current[0].className.replace(
      " header__nav--active",
      ""
    );
    this.className += " header__nav--active";
  });
}
