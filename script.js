let arrowActive = document.querySelector(".activeArrow");
let languageList = document.querySelector(".coll-item-list");

// styles
languageList.style.visibility = "visible";
languageList.style.maxHeight = "500px";
languageList.style.transition =
  "visibility 800ms, opacity 800ms, max-height 800ms";
arrowActive.style.transition = "transform 600ms";

arrowActive.addEventListener("click", (e) => {
  if (languageList.style.visibility == "visible") {
    languageList.style.visibility = "hidden";
    languageList.style.maxHeight = "0px";
    languageList.style.opacity = "0";
    e.target.style.transform = "rotate(0deg)";
  } else if (languageList.style.visibility == "hidden") {
    languageList.style.visibility = "visible";
    languageList.style.maxHeight = "500px";
    languageList.style.opacity = "100";
    e.target.style.transform = "rotate(90deg)";
  }
});

// rotate the inactive arrows
document.querySelectorAll(".unactiveArrow").forEach((item) => {
  item.style.transform = "rotate(0deg)";
  item.addEventListener("click", (e) => {
    if (item.style.transform == "rotate(90deg)") {
      e.target.style.transform = "rotate(0deg)";
      console.log(e.target);
    } else if (item.style.transform == "rotate(0deg)") {
      e.target.style.transform = "rotate(90deg)";
      e.target.style.transition = "transform 600ms";
      console.log(e.target);
    }
  });
});

// Hamburger menu
