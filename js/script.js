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

    const hideTextGreek = (hideGreekButton) => {
        const hideGreek = document.querySelector(".js-hideGreek");

        hideGreek.hidden = !hideGreek.hidden;
        hideGreekButton.innerText = hideGreek.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextPoland = (hidePolandkButton) => {
        const hidePoland = document.querySelector(".js-hidePoland");

        hidePoland.hidden = !hidePoland.hidden;
        hidePolandkButton.innerText = hidePoland.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextBangkok = (hideBangkokButton) => {
        const hideBangkok = document.querySelector(".js-hideBangkok");

        hideBangkok.hidden = !hideBangkok.hidden;
        hideBangkokButton.innerText = hideBangkok.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextDubai = (hideDubaikButton) => {
        const hideDubaik = document.querySelector(".js-hideDubai");
        hideDubaik.hidden = !hideDubaik.hidden;
        hideDubaikButton.innerText = hideDubaik.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextEgypt = (hideEgyptButton) => {
        const hideEgypt = document.querySelector(".js-hideEgypt");
        hideEgypt.hidden = !hideEgypt.hidden;
        hideEgyptButton.innerText = hideEgypt.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const hideTextMarocco = (hideMaroccoButton) => {
        const hideMarocco = document.querySelector(".js-hideMarocco");
        hideMarocco.hidden = !hideMarocco.hidden;
        hideMaroccoButton.innerText = hideMarocco.hidden
            ? "Pokaż opis"
            : "Ukryj opis";
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");
        backgroundButton.addEventListener("click", toggleBackground);

        const hideGreekButton = document.querySelector(".js-hideGreekButton");
        hideGreekButton.addEventListener("click", () =>
        {
            hideTextGreek(hideGreekButton);
        });

        const hidePolandkButton = document.querySelector(".js-hidePolandButton");
        hidePolandkButton.addEventListener("click", () =>
        {
             hideTextPoland(hidePolandkButton);
        });

        const hideBangkokButton = document.querySelector(".js-hideBangkokButton");
        hideBangkokButton.addEventListener("click", () =>
        {
            hideTextBangkok(hideBangkokButton);
        });

        const hideDubaikButton = document.querySelector(".js-hideDubaikButton");
        hideDubaikButton.addEventListener("click", () =>
        {
            hideTextDubai(hideDubaikButton);
        });

        const hideEgyptButton = document.querySelector(".js-hideEgyptButton");
        hideEgyptButton.addEventListener("click", () =>
        {

         hideTextEgypt(hideEgyptButton);
        });
        
        const hideMaroccoButton = document.querySelector(".js-hideMaroccoButton"); 
        hideMaroccoButton.addEventListener("click", () => 
        {

         hideTextMarocco(hideMaroccoButton);
        });

        welcom();

    };

    init();

};