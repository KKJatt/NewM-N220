const scores = [95,
    72,
    88,
    45,
    60,
    79,
    82,
    91,
    50,
    38
    ];

let TotalScores = 0;

const ulRef = document.querySelector("ul");
const pRef = document.getElementById("unique")

for(let i = 0; i < scores.length; i++){
    ulRef.innerHTML += "<li>" + scores[i] + "</li>";
    TotalScores += scores[i];
}

pRef.innerText = TotalScores/scores.length;