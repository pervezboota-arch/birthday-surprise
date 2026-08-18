// =========================================
// GET ELEMENTS
// =========================================

const startBtn =
    document.getElementById("startBtn");

const firstPopup =
    document.getElementById("firstPopup");

const readyBtn =
    document.getElementById("readyBtn");

const birthdayIntro =
    document.getElementById("birthdayIntro");

const nextBtn =
    document.getElementById("nextBtn");

const secondPopup =
    document.getElementById("secondPopup");

const continueBtn =
    document.getElementById("continueBtn");

const messageSection =
    document.getElementById("messageSection");

const memoriesBtn =
    document.getElementById("memoriesBtn");

const memoriesSection =
    document.getElementById("memoriesSection");

const finalBtn =
    document.getElementById("finalBtn");

const finalSection =
    document.getElementById("finalSection");


// =========================================
// BIRTHDAY MUSIC
// =========================================

const birthdayMusic =
    document.getElementById("birthdayMusic");


// =========================================
// SCROLL HELPER
// =========================================

function scrollToSection(section) {

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================
// START BUTTON + MUSIC
// =========================================

startBtn.addEventListener(
    "click",
    function () {

        // Open first popup
        firstPopup.classList.add("show");


        // Start birthday music
        if (birthdayMusic) {

            birthdayMusic.volume = 1;

            birthdayMusic.play()
                .then(function () {

                    console.log(
                        "Birthday music started!"
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Music playback failed:",
                        error
                    );

                });

        }

    }
);


// =========================================
// FIRST POPUP → BIRTHDAY
// =========================================

readyBtn.addEventListener(
    "click",
    function () {

        firstPopup.classList.remove("show");

        setTimeout(
            function () {

                birthdayIntro.classList.add("show");

                setTimeout(
                    function () {

                        scrollToSection(
                            birthdayIntro
                        );

                    },
                    100
                );

            },
            450
        );

    }
);


// =========================================
// BIRTHDAY → SECOND POPUP
// =========================================

nextBtn.addEventListener(
    "click",
    function () {

        secondPopup.classList.add("show");

    }
);


// =========================================
// SECOND POPUP → MESSAGE
// =========================================

continueBtn.addEventListener(
    "click",
    function () {

        secondPopup.classList.remove("show");

        setTimeout(
            function () {

                messageSection.classList.add("show");

                setTimeout(
                    function () {

                        scrollToSection(
                            messageSection
                        );

                    },
                    100
                );

            },
            450
        );

    }
);


// =========================================
// MESSAGE → MEMORIES
// =========================================

memoriesBtn.addEventListener(
    "click",
    function () {

        memoriesSection.classList.add("show");

        setTimeout(
            function () {

                scrollToSection(
                    memoriesSection
                );

            },
            150
        );

    }
);


// =========================================
// MEMORIES → FINAL
// =========================================

finalBtn.addEventListener(
    "click",
    function () {

        finalSection.classList.add("show");

        setTimeout(
            function () {

                scrollToSection(
                    finalSection
                );

                createConfetti();

            },
            150
        );

    }
);


// =========================================
// CONFETTI
// =========================================

function createConfetti() {

    const symbols = [
        "💗",
        "💕",
        "✨",
        "🎀",
        "🌸",
        "♡",
        "✦",
        "💖"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "birthday-confetti";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDelay =
            Math.random() * 1.8 + "s";


        piece.style.animationDuration =
            3 +
            Math.random() * 3 +
            "s";


        document.body.appendChild(piece);


        setTimeout(
            function () {

                piece.remove();

            },
            6500
        );

    }

}