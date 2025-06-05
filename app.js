const firstHeader = document.getElementById("header_1");
const secondHeader = document.getElementById("header_2");
const moreDetailsOne = document.querySelector(".moreDetails_1");
const moreDetailsTwo = document.querySelector(".moreDetails_2");
let toggleArrow = false;

const useToggleArrow = (e) => {
  if (!toggleArrow) {
    e.target.firstElementChild.innerHTML = `&#xf106;`;
    toggleArrow = true;
  } else {
    e.target.firstElementChild.innerHTML = `&#xf107;`;
    toggleArrow = false;
  }
};

const openCloseAccordion = (e) => {
  let isIdHeader_1 = e.target.id === "header_1" ? true : false;

  if (isIdHeader_1) {
    moreDetailsOne.classList.toggle("show");
    useToggleArrow(e);
  } else {
    moreDetailsTwo.classList.toggle("show");
    useToggleArrow(e);
  }
};

firstHeader.addEventListener("click", openCloseAccordion);
secondHeader.addEventListener("click", openCloseAccordion);
