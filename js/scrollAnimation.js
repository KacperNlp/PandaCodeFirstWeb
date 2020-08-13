/*get html elements*/
const fadeFromBottom = [
  ...document.querySelectorAll("[data-animation='bottom']"),
];
const fadeFromRight = [
  ...document.querySelectorAll("[data-animation='right']"),
];
const fadeFromLeft = [...document.querySelectorAll("[data-animation='left']")];
/*media query variabler*/
const mql = window.matchMedia("(max-width:1023px)");

/*animation function*/
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  console.log();
  /*fade from left*/
  fadeFromLeft.forEach((element) => {
    const elHeight = element.offsetHeight;
    const elPosition = element.getBoundingClientRect();
    const elFromTop = elPosition.top + scroll;
    if (mql.matches) {
      if (scroll > elFromTop - (elHeight + 100)) {
        element.removeAttribute("data-animation");
      }
    } else {
      if (scroll > elFromTop - (elHeight + 200)) {
        element.removeAttribute("data-animation");
      }
    }
  });

  /*fade from right*/
  fadeFromRight.forEach((element) => {
    const elHeight = element.offsetHeight;
    const elPosition = element.getBoundingClientRect();
    const elFromTop = elPosition.top + scroll;
    if (mql.matches) {
      if (scroll > elFromTop - (elHeight + 100)) {
        element.removeAttribute("data-animation");
      }
    } else {
      if (scroll > elFromTop - (elHeight + 200)) {
        element.removeAttribute("data-animation");
      }
    }
  });

  /*fade from bottom*/
  fadeFromBottom.forEach((element) => {
    const elHeight = element.offsetHeight;
    const elPosition = element.getBoundingClientRect();
    const elFromTop = elPosition.top + scroll;
    if (mql.matches) {
      if (scroll > elFromTop - (elHeight + 100)) {
        element.removeAttribute("data-animation");
      }
    } else {
      if (scroll > elFromTop - (elHeight + 200)) {
        element.removeAttribute("data-animation");
      }
    }
  });
});
