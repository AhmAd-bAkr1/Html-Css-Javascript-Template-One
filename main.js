// call up the imgs in slider
let sliderImges = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slidersCount = sliderImges.length;
let currentIndex = 1;

// call up the slider-numbers
let sliderNumber = document.getElementById("slider-numbers");

// call up the indicators

let indicators = document.getElementById("indicators");

// Create ul

let ulCreated = document.createElement("ul");
ulCreated.setAttribute("id", "ulCreated");

// Create li
for (let i = 1; i <= slidersCount; i++) {
  let liCreated = document.createElement("li");
  liCreated.setAttribute("data-index", i);
  let textLiCreated = document.createTextNode(i);
  liCreated.appendChild(textLiCreated);
  ulCreated.appendChild(liCreated);
}
indicators.appendChild(ulCreated);

// call up the prev and next buttons
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener("click", nextSlid);
prev.addEventListener("click", prevSlid);

// call up the ulCreated

let ulCreatedCall = document.getElementById("ulCreated");
// create the ulCreated Arry

let arryUlCreatedCall = Array.from(ulCreatedCall.children);
arryUlCreatedCall.forEach(function (ele) {
  ele.addEventListener("click", function (params) {
    currentIndex = Number(ele.getAttribute("data-index"));
    cheaker();
  });
});
cheaker();
function nextSlid(ele) {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    cheaker();
  }
}
function prevSlid(ele) {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    cheaker();
  }
}

function cheaker(params) {
  sliderNumber.textContent = `Slide ${currentIndex} Of ${slidersCount}`;

  removeAll();

  sliderImges[currentIndex - 1].classList.add("active");
  ulCreatedCall.children[currentIndex - 1].classList.add("active");

  if (currentIndex === 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  if (currentIndex === slidersCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function removeAll(params) {
  sliderImges.forEach(function (ele) {
    ele.classList.remove("active");
  });

  arryUlCreatedCall.forEach(function (ele) {
    ele.classList.remove("active");
  });
}
