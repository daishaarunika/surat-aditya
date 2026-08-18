/* =========================================
   SURAT RAHASIA DIGITAL UNTUK ADITYA
   ========================================= */


/* =========================================
   ELEMENT
   ========================================= */

const mainMusic = document.getElementById("mainMusic");
const voiceAudio = document.getElementById("voiceAudio");

const musicButton = document.getElementById("musicButton");
const birthdayText = document.getElementById("birthdayText");
const toPage2 = document.getElementById("toPage2");

const showPhotosButton =
    document.getElementById("showPhotosButton");

const photoContainer =
    document.getElementById("photoContainer");

const currentPhoto =
    document.getElementById("currentPhoto");

const photoCaption =
    document.getElementById("photoCaption");

const nextPhotoButton =
    document.getElementById("nextPhotoButton");

const toPage3 =
    document.getElementById("toPage3");

const playVoiceButton =
    document.getElementById("playVoiceButton");

const voiceStatus =
    document.getElementById("voiceStatus");

const toPage4 =
    document.getElementById("toPage4");

const letterText =
    document.getElementById("letterText");

const toFinal =
    document.getElementById("toFinal");


/* =========================================
   STATE
   ========================================= */

let musicStarted = false;

let currentPhotoIndex = 0;

let photoStarted = false;

let voicePlaying = false;
voiceAudio.volume = 1


/* =========================================
   PHOTO DATA
   ========================================= */

const photos = [

    {
        image: "assets/foto1.jpg",
        text: "Karena..."
    },

    {
        image: "assets/foto2.jpg",
        text: "selamanya.."
    },

    {
        image: "assets/foto3.jpg",
        text: "aku.."
    },

    {
        image: "assets/foto4.jpg",
        text: "juga.."
    },

    {
        image: "assets/foto5.jpg",
        text: "akan.."
    },

    {
        image: "assets/foto6.jpg",
        text: "selalu.."
    },

    {
        image: "assets/foto7.jpg",
        text: "mencintaimu.."
    },

    {
        image: "assets/foto8.jpg",
        text: "Aditya-ku..."
    }

];


/* =========================================
   LETTER
   ========================================= */

const letterParts = [

    {
        text: "Sekali lagi, selamat ulang tahun cintaku...",
        delay: 1200
    },

    {
        text: "Aku membuat ini sendiri lho, dibantu ChatGPT sih, tapi ini ideku, dan pertama kalinya aku membuat ini hehe..",
        delay: 1800
    },

    {
        text: "Hmmm..",
        delay: 1800
    },

    {
        text: "Aku cuma mau kamu ingat..",
        delay: 1500
    },

    {
        text: "Dimanapun kamu berada,\nBagaimanapun keadaannya,\nSegila apapun kondisinya,",
        delay: 2200
    },

    {
        text: "Aku di sini..\ntetap mencintaimu dengan segala hal tentang dirimu..",
        delay: 2200
    },

    {
        text: "Kamu tidak perlu takut menghadapi hidup entah akan bagaimana nantinya.. kamu hanya harus terus mengingatku. Dalam jiwamu..",
        delay: 2800
    },

    {
        text: "Aku mencintaimu, Aditya.",
        delay: 1800
    },

    {
        text: "Semoga aku selamanya menjadi bahagiamu.",
        delay: 2500
    }

];


/* =========================================
   OPENING → PAGE 1
   ========================================= */

function openFirstPage() {

    goToPage(1);

}


/* =========================================
   PAGE NAVIGATION
   ========================================= */

function goToPage(number) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const target =
        document.getElementById(
            number === 1
                ? "page1"
                : number === 2
                    ? "page2"
                    : number === 3
                        ? "page3"
                        : number === 4
                            ? "page4"
                            : "page5"
        );


    target.classList.add("active");


    window.scrollTo(0, 0);


    if (number === 2) {

        preparePage2();

    }


    if (number === 4) {

        startLetter();

    }

}


/* =========================================
   PAGE 1 — MUSIC
   ========================================= */

function startMusic() {

    if (musicStarted) {
        return;
    }


    musicStarted = true;


    mainMusic.volume = 1;


    mainMusic
        .play()
        .then(() => {

            musicButton.style.display = "none";


            setTimeout(() => {

                birthdayText.classList.add("show");

            }, 700);


            setTimeout(() => {

                toPage2.classList.remove("hidden");

            }, 2800);

        })
        .catch(error => {

            console.log(
                "Musik tidak dapat dimainkan:",
                error
            );

            musicStarted = false;

        });

}


/* =========================================
   PAGE 2 PREPARE
   ========================================= */

function preparePage2() {

    if (photoStarted) {
        return;
    }


    showPhotosButton.classList.add("hidden");

    photoContainer.classList.add("hidden");

    nextPhotoButton.classList.add("hidden");

    toPage3.classList.add("hidden");


    setTimeout(() => {

        showPhotosButton.classList.remove("hidden");

    }, 2500);

}


/* =========================================
   START PHOTOS
   ========================================= */

function startPhotos() {

    if (photoStarted) {
        return;
    }


    photoStarted = true;

    currentPhotoIndex = 0;


    document
        .getElementById("rememberText")
        .style.display = "none";


    showPhotosButton.classList.add("hidden");

    photoContainer.classList.remove("hidden");


    showPhoto();


}


/* =========================================
   SHOW PHOTO
   ========================================= */

function showPhoto() {

    const photo =
        photos[currentPhotoIndex];


    currentPhoto.style.opacity = "0";


    setTimeout(() => {

        currentPhoto.src =
            photo.image;

        photoCaption.textContent =
            photo.text;


        currentPhoto.style.opacity = "1";


        nextPhotoButton.classList.remove(
            "hidden"
        );


        if (
            currentPhotoIndex ===
            photos.length - 1
        ) {

            nextPhotoButton.textContent = "♡";

        } else {

            nextPhotoButton.textContent = "→";

        }

    }, 250);

}


/* =========================================
   NEXT PHOTO
   ========================================= */

function nextPhoto() {

    if (
        currentPhotoIndex <
        photos.length - 1
    ) {

        currentPhotoIndex++;

        showPhoto();

        return;

    }


    /* FOTO KE-8 SUDAH SELESAI */

    nextPhotoButton.classList.add(
        "hidden"
    );


    setTimeout(() => {

        toPage3.classList.remove(
            "hidden"
        );

    }, 1800);

}


/* =========================================
   PAGE 3 — VOICE
   ========================================= */

function playVoice() {

    if (voicePlaying) {
        return;
    }


    voicePlaying = true;


    playVoiceButton.disabled = true;


    voiceStatus.textContent =
        "dengarkan baik baik ya.. ♡";


    /*
     * MUSIK UTAMA TIDAK BERHENTI.
     * HANYA DIPERKECIL VOLUMENYA.
     */

    const originalVolume =
        mainMusic.volume;


    lowerMusicVolume();


    voiceAudio.currentTime = 0;


    voiceAudio
        .play()
        .catch(error => {

            console.log(
                "Audio suara tidak dapat dimainkan:",
                error
            );

            voicePlaying = false;

            playVoiceButton.disabled = false;

            mainMusic.volume =
                originalVolume;

        });


    voiceAudio.onended = function () {

        restoreMusicVolume(
            originalVolume
        );


        voicePlaying = false;


        voiceStatus.textContent =
            "♡";


        playVoiceButton.style.display =
            "none";


        setTimeout(() => {

            toPage4.classList.remove(
                "hidden"
            );

        }, 1800);

    };

}


/* =========================================
   LOWER MUSIC
   ========================================= */

function lowerMusicVolume() {

    const targetVolume = 0.02;

    const duration = 1200;

    const startVolume =
        mainMusic.volume;

    const startTime =
        Date.now();


    function fade() {

        const elapsed =
            Date.now() - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        mainMusic.volume =
            startVolume +
            (targetVolume - startVolume)
            * progress;


        if (progress < 1) {

            requestAnimationFrame(fade);

        }

    }


    fade();

}


/* =========================================
   RESTORE MUSIC
   ========================================= */

function restoreMusicVolume(
    targetVolume = 1
) {

    const startVolume =
        mainMusic.volume;

    const duration = 1500;

    const startTime =
        Date.now();


    function fade() {

        const elapsed =
            Date.now() - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        mainMusic.volume =
            startVolume +
            (targetVolume - startVolume)
            * progress;


        if (progress < 1) {

            requestAnimationFrame(fade);

        }

    }


    fade();

}


/* =========================================
   PAGE 4 — LETTER
   ========================================= */

let letterStarted = false;


async function startLetter() {

    if (letterStarted) {
        return;
    }


    letterStarted = true;


    letterText.innerHTML = "";


    for (
        let i = 0;
        i < letterParts.length;
        i++
    ) {

        const part =
            letterParts[i];


        const paragraph =
            document.createElement("div");


        paragraph.className =
            "letter-line";


        letterText.appendChild(
            paragraph
        );


        await typeText(
            paragraph,
            part.text
        );


        await wait(
            part.delay
        );

    }


    setTimeout(() => {

        toFinal.classList.remove(
            "hidden"
        );

    }, 1500);

}


/* =========================================
   TYPING EFFECT
   ========================================= */

function typeText(
    element,
    text
) {

    return new Promise(resolve => {

        let index = 0;


        function typeCharacter() {

            if (index < text.length) {

                element.textContent +=
                    text.charAt(index);


                index++;


                let speed = 38;


                if (
                    text.charAt(index - 1)
                    === "."
                ) {

                    speed = 130;

                }


                setTimeout(
                    typeCharacter,
                    speed
                );

            } else {

                resolve();

            }

        }


        typeCharacter();

    });

}


/* =========================================
   WAIT
   ========================================= */

function wait(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );

}