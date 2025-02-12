console.log("lets talk arrays");

const zodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Taurus",
    "Scorpio",
    "Aquarius",
    "Gemini",
    "Virgo",
    "Pisces",
    "Aries",
    "Sagittarius",
    "Capricorn",
]

console.log("ZodiacSigns",zodiacSigns);

console.table(zodiacSigns)

console.log("2nd Zodiac: ", zodiacSigns[1]);

console.log("# of Zodiacs: ", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for(let i = 0; i < zodiacSigns.length; i++){
    console.log("For Loop: ", zodiacSigns[i]);
    zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI = 0;
while(whileI < zodiacSigns.length){
    console.log("While Loop: ", zodiacSigns[whileI]);
    whileI++;
}

let whileDoI = 0;
do{
whileDoI++;
}while(whileDoI < zodiacSigns.length);

const gradStatsSectionRef = document.querySelector("#grade-stats");

const grades = [88,91,27,17,98,20,75,69,67,2];

let sumOfGrades = 0;

for(i= 0; i < grades.length; i++){
    const grade = grades[i];
    sumOfGrades += grade;
}

gradStatsSectionRef.innerHTML += "<h4>Avg: " + (sumOfGrades/grades.length) + "</h4>";