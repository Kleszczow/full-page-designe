const swich = document.querySelector("#switch");
const panel = document.querySelectorAll(".panel");
const swichText = document.querySelector("#swichText");
const body = document.querySelector("body");
const leftBottom = document.querySelector(".leftBottom");
const title = document.querySelector("#title");
const signIn = document.querySelector("#signIn");
const logIn = document.querySelector("#logIn");
const accept = document.querySelector("#accept");

const changeColor = () => {
  panel.forEach((panel) => {
    panel.classList.toggle("panelLight");
    if (panel.classList.contains("panelLight")) {
      body.style.background = "var(--colors-sandA11)";
      body.style.color = "var(--colors-sandA9)";
      panel.style.color = "var(--colors-sand8)";
      leftBottom.style.color = "var(--colors-sand8)";
      title.style.color = "var(--colors-sand9)";
      signIn.style.background = "var(--colors-sand10)";
      signIn.style.color = "var(--colors-sand12)";
      logIn.style.background = "var(--colors-sand11)";
      logIn.style.color = "var(--colors-sand9)";
      accept.style.background = "var(--colors-sand10)";
      accept.style.color = "var(--colors-sand12)";
    } else {
      body.style.background = "var(--colors-sand2)";
      body.style.color = "var(--colors-sandA11)";
      panel.style.color = "var(--colors-sandA11)";
      leftBottom.style.color = "var(--colors-sandA11)";
      title.style.color = "var(--colors-sand12)";
      signIn.style.background = "var(--colors-sand10)";
      signIn.style.color = "var(--colors-sand1)";
      logIn.style.background = "var(--colors-sandA3";
      accept.style.background = "var(--colors-sand10)";
      accept.style.color = "var(--colors-sand1)";
    }
  });
};

swich.addEventListener("click", changeColor);
