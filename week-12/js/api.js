// https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimon-list");

async function getDigimon() {
//   fetch("https://digimon-api.vercel.app/api/digimon")
//     .then(function (digiResp) {
//       return digiResp.json();
//     })
//     .then((digiData) => {
//       console.log(digiData);
//     })
//     .catch(function (err) {
//       console.warn(err);
//     })
//     .finally(() => {
//       console.log("Fetch Complete!");
//       // code to cleanup => do it here
//     });

try {
    const digiResp = await fetch("https://digimon-api.vercel.app/api/digimon");

    const digiData = await digiResp.json();

    digimonListRef.innerHTML = "";
    
    for(let i = 0; i<digiData.length;i++){
        const digimonIsLiked = JSON.parse(
            localStorage.getItem(currentDigimon.name)
        )
        console.log("digi like?", digimonIsLiked);
        const currentDigimon = digiData[i];
        const digimonIsLiked = 
     JSON.parse(localStorage.getItem(currentDigimon.name)) || false;

        let likeClass ="";

        if(digimonIsLiked){
            likeClass='like';
        }


        const newCard = document.createElement("div")
        newCard.classList.add("digimon-card");
        newCard.innerHTML += `
        <img src="${currentDigimon.img}" alt="${currentDigimon.name}">
        <h4>${currentDigimon.name}</h4>
        <button class="${likeClass}">&hearts;</button>
        `;

        newCard.dataset.name = currentDigimon.name;
        newCard.onclick = likeDigimon;

        digimonListRef.appendChild(newCard)
    }
} catch (e){
console.warn(e)
}


    console.log("End of function");
}

function likeDigimon(e) {
    const digimonName = e.currentTarget.dataset.name;

    console.log(digimonName);


  // key value pair;
  // localStorage.setItem("key, value");

  // 1. Store al liked digimon as an array
  // likedDigimon = ['Koromon', 'Tsunomon']

  // 3. Each digimon is a key
  // localStorage.getItem("Koromon"); // OUTPUT:True
  // localStorage.getItem("Koromon"), JSON.stringify(true)) // OUTPUT:True



  localStorage.setItem(digimonName, JSON.stringify(true));
}

getDigimon();

