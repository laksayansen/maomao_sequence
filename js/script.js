let currentStep = 0;
let currentVersion = "A";

let stepNames = ["Beginning", "Middle", "End"];

let versionATitle = "Version A: Out of the Palace";

let versionAImages = ["images/kusuriya2.jpeg", "images/kusuriya3.jpeg", "images/kusuriya1.jpeg"];

let versionACaptions = [
    "Stuck in the rear palace, Maomao studies every cup she is served.",
    "After a long day of work, she finally has time for herself. Grabbing her favorite basket and venturing out to the fields.",
    "Of course Jinshi follows Maomao to her excitement."
];

let versionAAlts = [
    "Maomao staring at a cup of flower tea",
    "Chibi Maomao with a basket on her back, excited",
    "Maomao and Jinshi looking at a snail among hydrangeas"
];

let versionBTitle = "Version B: Curiosity Has a Cost";

let versionBImages = ["images/kusuriya1.jpeg", "images/kusuriya3.jpeg", "images/kusuriya2.jpeg"];

let versionBCaptions = [
    "A quiet afternoon in the fields, Jinshi's lurking behind Maomao, wanting to be involved in her excitement.",
    "One small discovery is never enough. Grabbing her favorite basket, Maomao moves on to the next.",
    "Now a strange flower tea sits in front of her. She knows it could be dangerous, and she cannot for the love of her look away."
];

let versionBAlts = [
    "Maomao and Jinshi looking at a snail among hydrangeas",
    "Chibi Maomao with a basket on her back, excited",
    "Maomao staring at a cup of flower tea"
];

function showStep() {
    let images;
    let captions;
    let alts;

    if (currentVersion == "A") {
        images = versionAImages;
        captions = versionACaptions;
        alts = versionAAlts;
    } else {
        images = versionBImages;
        captions = versionBCaptions;
        alts = versionBAlts;
    }

    let storyImage = document.getElementById("storyImage");

    storyImage.style.opacity = 0;

    setTimeout(function () {
        storyImage.src = images[currentStep];
        storyImage.alt = alts[currentStep];
        storyImage.style.opacity = 1;
    }, 250);

    document.getElementById("stepLabel").innerHTML = stepNames[currentStep];
    document.getElementById("caption").innerHTML = captions[currentStep];

    updateDots();
    updateButtons();
}

function nextImage() {
    if (currentStep < 2) {
        currentStep = currentStep + 1;
        showStep();
    }
}

function prevImage() {
    if (currentStep > 0) {
        currentStep = currentStep - 1;
        showStep();
    }
}

function goToStep(step) {
    currentStep = step;
    showStep();
}

function switchVersion(version) {
    currentVersion = version;
    currentStep = 0;

    if (version == "A") {
        document.getElementById("storyTitle").innerHTML = versionATitle;
        document.getElementById("btnA").classList.add("active");
        document.getElementById("btnB").classList.remove("active");
    } else {
        document.getElementById("storyTitle").innerHTML = versionBTitle;
        document.getElementById("btnB").classList.add("active");
        document.getElementById("btnA").classList.remove("active");
    }

    showStep();
}

function updateDots() {
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
        if (i == currentStep) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}

function updateButtons() {
    document.getElementById("prevBtn").disabled = (currentStep == 0);
    document.getElementById("nextBtn").disabled = (currentStep == 2);
}

document.getElementById("storyImage").addEventListener("click", function () {
    if (currentStep == 2) {
        goToStep(0);
    } else {
        nextImage();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        nextImage();
    } else if (event.key == "ArrowLeft") {
        prevImage();
    }
});

showStep();