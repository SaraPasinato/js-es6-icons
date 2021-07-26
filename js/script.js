/*
*! Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte 
le icone disponibili come da layout.
*!Milestone 2
Coloriamo le icone per tipo
!Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */
/* 
   ?BONUS: Provare ad aggiungere una casella di testo che renda possibile 
   filtrare anche per nome dell'icona
   ?SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo in "tempo reale",
   cioè man mano che l'utente digita. */


/* //*************** functions utils ********************// */
//? FUNZIONE: STAMPO IN PAGINA

const renderCards = (cards, targetElement) => {
    let cardTamplate = "";
    cards.forEach((icon, i) => {

        const hasOffset = i % 5 === 0 ? `offset-lg-1` : ` `;
        cardTamplate += `
        <div class="col col-sm-4 col-lg-2 ${hasOffset}">
           <div class="card">
               <div class="card-body text-center pt-4">
                   <a href="" class="${icon.type}"><i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i></a>
                   <h3 class="h5 text-uppercase">${icon.name.toUpperCase()}</h3>
                </div>
            </div>
        </div>   
        `;
    });
    targetElement.innerHTML = cardTamplate;
};

// ? STAMPO IN PAGINA

const iconsSection = document.querySelector("#icons-section .row");
renderCards(icons, iconsSection);


//? Logica: Select 
const selectField = document.getElementById("filter");

selectField.addEventListener('change', () => {
    const filterValue = selectField.value;

    if (filterValue === "all") {
        renderCards(icons, iconsSection);
        return;
    }
    //? Filtro Dinamico per tipo
    const filteredIcons = icons.filter((icon) => filterValue === icon.type);
    renderCards(filteredIcons, iconsSection);
});


