{
    const welcom = () => {
        console.log("Zapraszam wszystkich do mojego 3 projektu");
    }

    const toggleBackground = () => {

        const background = document.querySelector(".js-background");
        const themeName = document.querySelector(".js-themeName");

        background.classList.toggle("changeBackground");
        themeName.innerText = background.classList.contains("changeBackground") ? "ciemne" : "jasne";
    };

    const init = () => {

        const backgroundButton = document.querySelector(".js-backgroundButton");
        backgroundButton.addEventListener("click", toggleBackground);


        welcom();

    };

    init();


    let hideGreekButton = document.querySelector(".js-hideGreekButton");
    let hideGreek = document.querySelector(".js-hideGreek");
    hideGreekButton.addEventListener("click", () => {
        hideGreek.hidden = !hideGreek.hidden;
        hideGreekButton.innerText = hideGreek.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });

    let hidePolandkButton = document.querySelector(".js-hidePolandButton");
    let hidePoland = document.querySelector(".js-hidePoland");
    hidePolandkButton.addEventListener("click", () => {
        hidePoland.hidden = !hidePoland.hidden;
        hidePolandkButton.innerText = hidePoland.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });

    let hideBangkokButton = document.querySelector(".js-hideBangkokButton");
    let hideBangkok = document.querySelector(".js-hideBangkok");
    hideBangkokButton.addEventListener("click", () => {
        hideBangkok.hidden = !hideBangkok.hidden;
        hideBangkokButton.innerText = hideBangkok.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });

    let hideDubaikButton = document.querySelector(".js-hideDubaikButton");
    let hideDubaik = document.querySelector(".js-hideDubai");
    hideDubaikButton.addEventListener("click", () => {
        hideDubaik.hidden = !hideDubaik.hidden;
        hideDubaikButton.innerText = hideDubaik.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });



    let hideEgyptButton = document.querySelector(".js-hideEgyptButton");
    let hideEgypt = document.querySelector(".js-hideEgypt");
    hideEgyptButton.addEventListener("click", () => {
        hideEgypt.hidden = !hideEgypt.hidden;
        hideEgyptButton.innerText = hideEgypt.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });

    let hideMaroccoButton = document.querySelector(".js-hideMaroccoButton");
    let hideMarocco = document.querySelector(".js-hideMarocco");
    hideMaroccoButton.addEventListener("click", () => {
        hideMarocco.hidden = !hideMarocco.hidden;
        hideMaroccoButton.innerText = hideMarocco.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    });



};