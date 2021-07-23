let arrowActive = document.querySelector(".activeArrow");
let languageList = document.querySelector(".coll-item-list");

// styles
languageList.style.display = "flex";
arrowActive.style.transition = "transform 600ms";

arrowActive.addEventListener("click", (e) => {
  if (languageList.style.display == "flex") {
    languageList.style.display = "none";
    e.target.style.transform = "rotate(0deg)";
  } else if (languageList.style.display == "none") {
    languageList.style.display = "flex";
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
