let arrowActive = document.querySelector(".activeArrow");
// let languageList = document.querySelector(".coll-item-list");

// styles
// languageList.style.visibility = "visible";
// languageList.style.maxHeight = "500px";
// languageList.style.transition =
//   "visibility 800ms, opacity 800ms, max-height 800ms";
// arrowActive.style.transition = "transform 600ms";

// arrowActive.addEventListener("click", (e) => {
//   if (languageList.style.visibility == "visible") {
//     languageList.style.visibility = "hidden";
//     languageList.style.maxHeight = "0px";
//     languageList.style.opacity = "0";
//     e.target.style.transform = "rotate(0deg)";
//   } else if (languageList.style.visibility == "hidden") {
//     languageList.style.visibility = "visible";
//     languageList.style.maxHeight = "500px";
//     languageList.style.opacity = "100";
//     e.target.style.transform = "rotate(90deg)";
//   }
// });
//
//
// test multiple colapse list
document.querySelectorAll(".fa-arrow-right").forEach((item) => {
  // item.style.transform = "rotate(0deg)";
  let colapsibleChildrens = item.parentNode.parentNode.children;
  let languageList = colapsibleChildrens[1];

  languageList.style.visibility = "hidden";
  languageList.style.maxHeight = "0px";
  languageList.style.transition =
    "visibility 800ms, opacity 800ms, max-height 800ms";

  item.addEventListener("click", (e) => {
    if (languageList.style.visibility == "visible") {
      languageList.style.visibility = "hidden";
      colapsibleChildrens[2].style.visibility = "visible";
      languageList.style.maxHeight = "0px";
      languageList.style.opacity = "0";
      e.target.style.transform = "rotate(90deg)";
    } else if (languageList.style.visibility == "hidden") {
      languageList.style.visibility = "visible";
      colapsibleChildrens[2].style.visibility = "hidden";
      languageList.style.maxHeight = "500px";
      languageList.style.opacity = "1";
      e.target.style.transform = "rotate(0deg)";
    }
  });
});
//
//
// rotate the inactive arrows
document.querySelectorAll(".arrow").forEach((item) => {
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
