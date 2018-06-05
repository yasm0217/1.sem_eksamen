// når brugeren trykker på menubutton:
// skift / toggle klassen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykMenu);
}

function trykMenu() {
    console.log("Tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem "kryds"
    $(".menubutton").toggleClass("kryds");
}
