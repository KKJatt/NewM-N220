const h1Ref = document.getElementById("title");

console.log("h1Ref", h1Ref);

const letterGradeRefs = document.getElementsByClassName("letter-grade");

console.log("letterGradeRefs: ", letterGradeRefs);

const pRef = document.querySelector("p");

console.log("pRef: ", pRef);

const h1AltRef = document.querySelector("#title");

console.log("h1AltRef: ", h1AltRef);

const liRefs = document.querySelector("li");

console.log("liRefs: ", liRefs);

const ulRef = document.querySelector("ul");

console.log("ul textContent", ulRef.textContent);

console.log("ul innerText", ulRef.innerText);

console.log("ul innerHTML", ulRef.innerHTML);

pRef.innerText = "The cozy old farmer ate the little green rock.";

ulRef.innerHTML = "<li class='letter-grade'>C</li>";

ulRef.innerHTML += "<li class='letter-grade'>D</li>";

ulRef.innerHTML += "<li class='letter-grade' style='display: none'>E</li>";

ulRef.innerHTML += "<li class='letter-grade'>F</li>";

h1Ref.style.backgroundColor = "red";
h1Ref.style.color = "white";

pRef.style.backgroundColor = "#00ff00";
pRef.style.color = "rgb(255,50,0)";
pRef.style.height = "400px";
pRef.style.width = "400px";


document.querySelector("li").style.display = "none";

document.querySelector("li").style.display = "inline";

const ulLiRefs = ulRef.querySelectorAll("li");

console.log("ulLiRefsL", ulLiRefs);

const googleLinkRef = document.querySelector("a.google")

googleLinkRef.href = "https://google.com";
googleLinkRef.target = "_blank";

const inputRef = document.querySelector("input");

inputRef.setAttribute("placeholder", "Green Jello with the Fruit");

pRef.dataset.age = "89";

console.log(pRef);

pRef.classList.add("blue");
pRef.classList.remove("blue");

console.log(pRef);

const newLi = document.createElement("li");
newLi.innerText = "G";

newLi.classList.add("letter-grade");
ulRef.appendChild(newLi)