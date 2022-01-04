// ------------------------- Lateral Navbar -------------------------

let ul1_li1 = document.getElementById("ul1_li1");
let ul1_li2 = document.getElementById("ul1_li2");
let ul1_li3 = document.getElementById("ul1_li3");

let ul2_li1_a = document.getElementById("ul2_li1_a");
let ul2_li2_a = document.getElementById("ul2_li2_a");

let ul1_li1_imgOutline = document.getElementById("imgOutline");
let ul1_li1_imgSharp = document.getElementById("imgSharp");

ul1_li1.addEventListener("click", ul1_li1_func, false);
ul1_li2.addEventListener("click", ul1_li2_func, false);
ul1_li3.addEventListener("click", ul1_li3_func, false);

ul2_li1_a.addEventListener("click", ul2_li1_a_func, false);
ul2_li2_a.addEventListener("click", ul2_li2_a_func, false);


function ul1_li1_func() {
    ul1_li1.classList.add("li--active");
    ul1_li2.classList.remove("li--active");
    ul1_li3.classList.remove("li--active");

    ul2_li1_a.classList.remove("li_a--active");
    ul2_li2_a.classList.remove("li_a--active");

    ul1_li1_imgOutline.classList.add("imgOff");
    ul1_li1_imgSharp.classList.remove("imgOff");
}
function ul1_li2_func() {
    ul1_li1.classList.remove("li--active");
    ul1_li2.classList.add("li--active");
    ul1_li3.classList.remove("li--active");

    ul2_li1_a.classList.remove("li_a--active");
    ul2_li2_a.classList.remove("li_a--active");

    ul1_li1_imgSharp.classList.add("imgOff");
    ul1_li1_imgOutline.classList.remove("imgOff");
}
function ul1_li3_func() {
    ul1_li1.classList.remove("li--active");
    ul1_li2.classList.remove("li--active");
    ul1_li3.classList.add("li--active");

    ul2_li1_a.classList.remove("li_a--active");
    ul2_li2_a.classList.remove("li_a--active");

    ul1_li1_imgSharp.classList.add("imgOff");
    ul1_li1_imgOutline.classList.remove("imgOff");
}

function ul2_li1_a_func() {
    ul1_li1.classList.remove("li--active");
    ul1_li2.classList.remove("li--active");
    ul1_li3.classList.remove("li--active");

    ul2_li1_a.classList.add("li_a--active");
    ul2_li2_a.classList.remove("li_a--active");

    ul1_li1_imgSharp.classList.add("imgOff");
    ul1_li1_imgOutline.classList.remove("imgOff");
}
function ul2_li2_a_func() {
    ul1_li1.classList.remove("li--active");
    ul1_li2.classList.remove("li--active");
    ul1_li3.classList.remove("li--active");

    ul2_li1_a.classList.remove("li_a--active");
    ul2_li2_a.classList.add("li_a--active");

    ul1_li1_imgSharp.classList.add("imgOff");
    ul1_li1_imgOutline.classList.remove("imgOff");
}

// ------------------------- Footer / Music Player -------------------------
    // --------------------- Left ---------------------

let imgLikeOutline = document.getElementById("imgLikeOutline");
let imgLikeFilled = document.getElementById("imgLikeFilled");


imgLikeOutline.addEventListener("click", Like, false);
imgLikeFilled.addEventListener("click", Dislike, false);


function Like() {
    imgLikeOutline.classList.add("imgOff");
    imgLikeFilled.classList.remove("imgOff");

    imgLikeFilled.style.animation = "Like 1.5s ease 0s 1 normal forwards"
}

function Dislike() {
    imgLikeOutline.classList.remove("imgOff");
    imgLikeFilled.classList.add("imgOff");

    imgLikeOutline.style.animation = "Dislike 1s ease 0s 1 normal forwards"
}

    // --------------------- Center ---------------------

let randomButton = document.getElementById("randomButton");
let beforeButton = document.getElementById("beforeButton");
let PlayButton = document.getElementById("PlayButton");
let PauseButton = document.getElementById("PauseButton");
let nextButton = document.getElementById("nextButton");
let repeatButton = document.getElementById("repeatButton");

let randomModeCompteur = 0
let RepeatModeCompteur = 0

randomButton.addEventListener("click", randomMode, false);
PlayButton.addEventListener("click", PlayMusic, false);
PauseButton.addEventListener("click", PauseMusic, false);
repeatButton.addEventListener("click", repeatMode, false);

function randomMode() {
    if(randomModeCompteur == 0) {
        randomButton.style.color = "#48ff00"
        randomModeCompteur = 1
    } else {
        randomButton.style.color = "#aaaaaa"
        randomModeCompteur = 0
    }
}

function PlayMusic() {
    PlayButton.classList.add("imgOff")
    PauseButton.classList.remove("imgOff")
}

function PauseMusic() {
    PauseButton.classList.add("imgOff")
    PlayButton.classList.remove("imgOff")
}

function repeatMode() {
    if(RepeatModeCompteur == 0) {
        repeatButton.style.color = "#48ff00"
        RepeatModeCompteur = 1
    } else {
        repeatButton.style.color = "#aaaaaa"
        RepeatModeCompteur = 0
    }
}


    // --------------------- Right ---------------------

let volumeIcon = document.getElementById("volumeIcon")
let volumeIconMuted = document.getElementById("volumeIconMuted")
let volumeBar = document.getElementById("volumeBar")
let volumeBarValue = document.getElementById("volumeBar").getAttribute("value")

console.log(volumeBarValue)

volumeIcon.addEventListener("click", Muted, false)
volumeIconMuted.addEventListener("click", Demuted, false)

function Muted() {
    volumeIcon.classList.add("imgOff")
    volumeIconMuted.classList.remove("imgOff")
    volumeIconMuted.style.color = "#0f0"
    volumeIconMuted.style.fill = "#0f0"
    volumeBar.value = "0"
}

function Demuted() {
    volumeIcon.classList.remove("imgOff")
    volumeIconMuted.classList.add("imgOff")
    volumeBar.value = "50"
}


// ----------------------------- Top Cards --------------------------------