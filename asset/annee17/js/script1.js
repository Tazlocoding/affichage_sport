let sport = [...aout17];


//console.log(sport);
let inserSport = document.getElementById("sport");

const insertSport = (sportList, htmlContainer) => {
 
  for(let i=0; i<sportList.length; i++) {

    // On insère le HTML dans le container, avec les données du tableau sport
    htmlContainer.innerHTML+=` 
    <article class="article">
     <div class="sport" data-sportid="${sportList[i].id}">${sportList[i].Sport}</div>
     <div class="resultat">${sportList[i].Date}</div>
     <div class="resultat">${sportList[i].Km}</div>
     <div class="resultat">${sportList[i].Temps}</div>
     <div class="resultat">${sportList[i].Moyenne}</div>
     </article>
    `;
 }
}

insertSport(sport, inserSport);