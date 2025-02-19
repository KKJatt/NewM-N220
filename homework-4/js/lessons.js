const instruments = ["Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute"];

const ulRef = document.querySelector("ul");

for(let i = 0; i < instruments.length; i++){
    ulRef.innerHTML += "<li>" + instruments[i] + "</li>";
}

