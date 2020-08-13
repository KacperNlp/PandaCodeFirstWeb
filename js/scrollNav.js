const upArrow = document.querySelector(".up-arrow");
/*arrow up function*/
upArrow.addEventListener("click", () => {
  scrollTo(0, 0);
});

/*arrow up fade in*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    upArrow.removeAttribute("data-hide");
  } else {
    upArrow.setAttribute("data-hide", "hide-arrow");
  }
});
