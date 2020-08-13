const technology = [
  {
    icon: '<i class="fab fa-js"></i>',
    type: "JavaScript",
    content:
      "Jako web-developer programuję w JavaScript, jest to bardzo ciekawy język programistyczny, ponieważ z języka, który był wykorzystywany do tworzenia stron internetowych, stał się językiem, który pozwala nam tworzyć aplikację mobilne. Oczywiście przyczyniły się do tego różne biblioteki, pierwszą z nich jest React, ale nie tylko np. Angular, Vue itd.",
    active: true,
    colorCode: "#FFF000",
    id: 0,
    divElement: "",
  },
  {
    icon: '<i class="fab fa-html5"></i>',
    type: "HTML",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ad, est magnam animi ipsa facilis culpa neque ipsam quod, ex ullam ab rem, deleniti asperiores temporibus voluptatem. Aperiam, quae eveniet?",
    active: false,
    colorCode: "#DF6F0D",
    id: 1,
    divElement: "",
  },
  {
    icon: ' <i class="fab fa-css3-alt"></i>',
    type: "CSS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint excepturi est impedit harum officiis sapiente nesciunt quam accusamus eius consectetur perferendis illo tenetur facere modi reprehenderit, placeat aliquid. Molestias eligendi officiis sed saepe asperiores.",
    active: false,
    colorCode: "#08A9D1",
    id: 2,
    divElement: "",
  },
  {
    icon: '<i class="fab fa-node"></i>',
    type: "node.js",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero dicta eligendi laboriosam mollitia. Quia vitae quisquam, vel totam quaerat accusantium alias, impedit neque repudiandae, in saepe exercitationem quidem dignissimos expedita officiis nihil tenetur labore. Ad quod nam voluptatem architecto?",
    active: false,
    colorCode: "#129833",
    id: 3,
    divElement: "",
  },
  {
    icon: ' <i class="fab fa-react"></i>',
    type: "React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias? Qui, rerum consequatur corporis praesentium amet expedita quo ab nemo nostrum aliquam aspernatur beatae nobis neque sed reiciendis! Facilis, ratione dolore! Labore numquam voluptatibus, eaque, ipsam facere provident tenetur corrupti quam hic dicta, velit ipsa perferendis dignissimos cumque possimus suscipit a dolore perspiciatis illum expedita.",
    active: false,
    colorCode: "#35B5D5",
    id: 4,
    divElement: "",
  },
];

/*const techElements = document.getElementsByClassName("tech-icon");*/
/*create div's*/
const divArray = technology.map((element) => {
  const techDiv = document.createElement("div");
  techDiv.classList.add("tech-icon");
  techDiv.innerHTML = element.icon;
  element.divElement = techDiv;
  return element;
});
/*all main containers for div's and content*/
const techContainer = document.querySelector(".circle");
const contentBox = document.querySelector(".technology-content-box");
/*variable for clearInterval*/
let clearLoop;

divArray.map((div) => {
  techContainer.appendChild(div.divElement);
});

/*class changing function*/
const showElements = () => {
  /*techContainer.innerHTML = "";*/
  divArray.map((element) => {
    element.divElement.classList.remove("active-tech");
    element.divElement.classList.remove("top-right-tech");
    element.divElement.classList.remove("bottom-right-tech");
    element.divElement.classList.remove("bottom-left-tech");
    element.divElement.classList.remove("top-left-tech");
    /*const techDiv = document.createElement("div");
    techDiv.classList.add("tech-icon");*/
    if (element.id > 4) element.id = 0;
    if (element.id == 0) element.active = true;
    else element.active = false;
    /*class list for index element*/
    if (element.active) {
      contentBox.innerHTML = "";
      const technologyContent = document.createElement("div");
      technologyContent.classList.add("technology-content");
      element.divElement.classList.add("active-tech");
      element.divElement.style.color = element.colorCode;
      const divContent = document.createElement("div");
      /*title*/
      const contentTitle = document.createElement("h2");
      contentTitle.classList.add("technology-content-title");
      contentTitle.style.color = element.colorCode;
      const contentTxt = document.createElement("p");
      contentTitle.textContent = element.type;
      contentTxt.textContent = element.content;
      divContent.appendChild(contentTitle);
      divContent.appendChild(contentTxt);
      /*content*/
      contentTxt.classList.add("technology-content-txt");
      /*add elements to parent*/
      technologyContent.appendChild(divContent);
      contentBox.appendChild(technologyContent);
    } else if (element.id == 1) {
      element.divElement.classList.add("top-right-tech");
      element.divElement.style = null;
    } else if (element.id == 2) {
      element.divElement.classList.add("bottom-right-tech");
      element.divElement.style = null;
    } else if (element.id == 3) {
      element.divElement.classList.add("bottom-left-tech");
      element.divElement.style = null;
    } else if (element.id == 4) {
      element.divElement.classList.add("top-left-tech");
      element.divElement.style = null;
    }
    /*append child to main container*/
    /*techDiv.innerHTML = element.icon;
    techContainer.appendChild(techDiv);*/
    element.id++;
  });
  clearLoop = setTimeout(showElements, 30000);
};

showElements();
