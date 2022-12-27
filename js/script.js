{
    const welcom = () => {
        console.log("Zapraszam wszystkich do mojego 3 projektu");
    };

    const toggleBackground = () => {
        const background = document.querySelector(".js-background");
        const themeName = document.querySelector(".js-themeName");

        background.classList.toggle("changeBackground");
        themeName.innerText = background.classList.contains("changeBackground") ? "ciemne" : "jasne";
    };

    const hideTextGreek = () => {
        const hideGreek = document.querySelector(".js-hideGreek");

        hideGreek.hidden = !hideGreek.hidden;
        hideGreekButton.innerText = hideGreek.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextPoland = () => {
        const hidePoland = document.querySelector(".js-hidePoland");

        hidePoland.hidden = !hidePoland.hidden;
        hidePolandkButton.innerText = hidePoland.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextBangkok = () => {
        const hideBangkok = document.querySelector(".js-hideBangkok");

        hideBangkok.hidden = !hideBangkok.hidden;
        hideBangkokButton.innerText = hideBangkok.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextDubai = () => {
        const hideDubaik = document.querySelector(".js-hideDubai");
        hideDubaik.hidden = !hideDubaik.hidden;
        hideDubaikButton.innerText = hideDubaik.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextEgypt = () => {
        const hideEgypt = document.querySelector(".js-hideEgypt");
        hideEgypt.hidden = !hideEgypt.hidden;
        hideEgyptButton.innerText = hideEgypt.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextMarocco = () => {
        const hideMarocco = document.querySelector(".js-hideMarocco");
        hideMarocco.hidden = !hideMarocco.hidden;
        hideMaroccoButton.innerText = hideMarocco.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideGreekButton = document.querySelector(".js-hideGreekButton");
    const hidePolandkButton = document.querySelector(".js-hidePolandButton");
    const hideBangkokButton = document.querySelector(".js-hideBangkokButton");
    const hideDubaikButton = document.querySelector(".js-hideDubaikButton");
    const hideEgyptButton = document.querySelector(".js-hideEgyptButton");
    const hideMaroccoButton = document.querySelector(".js-hideMaroccoButton");

    const init = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");
        backgroundButton.addEventListener("click", toggleBackground);
        hideGreekButton.addEventListener("click", hideTextGreek);
        hidePolandkButton.addEventListener("click", hideTextPoland);
        hideBangkokButton.addEventListener("click", hideTextBangkok);
        hideDubaikButton.addEventListener("click", hideTextDubai);
        hideEgyptButton.addEventListener("click", hideTextEgypt);
        hideMaroccoButton.addEventListener("click", hideTextMarocco);

        welcom();


    };

    init();


};