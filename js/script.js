let currentStep = 0;
let stepNames = ["Beginning", "Middle", "End"];
let versionAImages = ["images/kusuriya2.jpeg", "images/kusuriya3.jpeg", "images/kusuriya1.jpeg"];
let versionACaptions = [
    "Stuck in the rear palace, Maomao studies every cup she is served. Even the flower tea ponders her mine.",
    "She straps on her basket and slips out to gather herbs, her arm still bandaged from her last experiment.",
    "Among the hydrangeas she finds a tiny snail, and for once Jinshi shares her excitement."
];

function showStep() {
    document.getElementById("storyImage").src = versionAImages[currentStep];
    document.getElementById("stepLabel").innerHTML = stepNames[currentStep];
    document.getElementById("caption").innerHTML = versionACaptions[currentStep];
}

function nextImage() {
    if (currentStep < 2) {
        currentStep = currentStep + 1;
    }
    showStep()
}

function prevImage() {
    if (currentStep > 0) {
        currentStep = currentStep - 1
    }
    showStep();
}

showStep();