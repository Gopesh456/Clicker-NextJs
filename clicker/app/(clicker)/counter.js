let number = 0;
let ones = 0;
let tens = 0;
let hundreds = 0;
let thousands = 0;
let tenThousands = 0;
let hundredThousands = 0;
let millions = 0;
export function onSubmit() {
  number += 1;
  ones += 1;
  console.log("clicked");
  let milDiv = document.querySelector("#mil-box");
  let onesDiv = document.querySelector("#ones-box");
  let tensDiv = document.querySelector("#tens-box");
  let hundredsDiv = document.querySelector("#hundreds-box");
  let thousandsDiv = document.querySelector("#k-box");
  let tenThousandsDiv = document.querySelector("#tenk-box");
  let hundredThousandsDiv = document.querySelector("#hundredk-box");
  if (ones > 9) {
    ones = 0;
    tens += 1;
  }
  if (tens > 9) {
    tens = 0;
    hundreds += 1;
  }
  if (hundreds > 9) {
    hundreds = 0;
    thousands += 1;
  }
  if (thousands > 9) {
    thousands = 0;
    tenThousands += 1;
  }
  if (tenThousands > 9) {
    tenThousands = 0;
    hundredThousands += 1;
  }
  if (hundredThousands > 9) {
    hundredThousands = 0;
    millions += 1;
  }
  if (number == 10000000) {
    alert("You have reached the maximum number of clicks!");
    number = 0;
    ones =
      tens =
      hundreds =
      thousands =
      tenThousands =
      hundredThousands =
      millions =
        0;
  }

  onesDiv.children[ones].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  tensDiv.children[tens].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  hundredsDiv.children[hundreds].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  thousandsDiv.children[thousands].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  tenThousandsDiv.children[tenThousands].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  hundredThousandsDiv.children[hundredThousands].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  milDiv.children[millions].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

window.addEventListener("load", (event) => {
  const snowDiv = document.querySelector("#snow-box");
  const snow = document.querySelector("#snow");
  snow.style.visibility = "hidden";
  function genSnow() {
    for (let i = 0; i < 10; i++) {
      let clone = snow.cloneNode(true);
      clone.style.visibility = "visible";
      clone.classList.add("snowflake" + i);
      clone.style.left = Math.floor(Math.random() * 100) + "vw";
      clone.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowDiv.appendChild(clone);
    }
  }

  genSnow();
});
