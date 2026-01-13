
let lastScrollY = window.scrollY;
let scrollDirection = "down";

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        scrollDirection = "down";
    } else {
        scrollDirection = "up";
    }
    lastScrollY = window.scrollY;
});


// ❄️ Snow fix – anasayfa reset
window.addEventListener("load", () => {
    const oldMsg = document.getElementById("home-msg");
    if (oldMsg) oldMsg.remove();

    document.body.style.transform = "none";
    document.body.style.overflow = "visible";
});


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");

        const themeBtn = document.getElementById("theme-btn");
        if (themeBtn) themeBtn.textContent = "AYDINLIK TEMA";
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");

        const themeBtn = document.getElementById("theme-btn");
        if (themeBtn) themeBtn.textContent = "KARANLIK TEMA";
    }
});




const toggleBtn = document.getElementById("themeToggle");


toggleBtn.addEventListener("click", () => {

    const isCurrentlyDark = document.body.classList.contains("dark");

    document.documentElement.style.setProperty(
        "--active-glow",
        isCurrentlyDark
            ? "var(--glow-light)" // Karanlıktan aydınlığa
            : "var(--glow-dark)"  // Aydınlıktan karanlığa
    );

    toggleBtn.classList.add("glow");
    document.body.classList.add("theme-transition");

    setTimeout(() => {
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        toggleBtn.textContent = isDark
            ? "☀️ AYDINLIK TEMA"
            : "🌕 KARANLIK TEMA";
    }, 180);

    setTimeout(() => {
        toggleBtn.classList.remove("glow");
        document.body.classList.remove("theme-transition");
    }, 600);

});



window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    if (!intro) return;

    // 2 saniye ekranda kalsın
    setTimeout(() => {
        intro.classList.add("hide");
    }, 2000);

    // Fade bittikten sonra DOM'dan sil
    setTimeout(() => {
        intro.remove();
    }, 2800);

});


// SCROLL ALGILAMA 
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const card = entry.target;

            if (entry.isIntersecting) {

                card.classList.remove("from-top", "from-bottom");

                if (scrollDirection === "down") {
                    card.classList.add("from-bottom");
                } else {
                    card.classList.add("from-top");
                }

                requestAnimationFrame(() => {
                    card.classList.add("show");
                });

            } else {
                card.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.25
    }
);

skillCards.forEach(card => observer.observe(card));



// SKİLLS KISMININ JS'İ

window.addEventListener("load", () => {

    const skillsIntro = document.getElementById("skills-intro");

    // Eğer bu sayfada intro yoksa, çalışmasın
    if (!skillsIntro) return;

    // Kısa süre sonra kapansın
    setTimeout(() => {
        skillsIntro.classList.add("hide");
    }, 900);

    // Fade bittikten sonra DOM'dan sil
    setTimeout(() => {
        skillsIntro.remove();
    }, 1500);

});


// Back button scroll animasyonu
const backBtn = document.querySelector(".back-btn");

if (backBtn) {
    const btnObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    btnObserver.observe(backBtn);
}



const homeBtn = document.getElementById("home-btn");

if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        const msg = document.createElement("div");
        msg.id = "home-msg";
        msg.textContent = "ANASAYFA";
        document.body.appendChild(msg);

        setTimeout(() => {
            msg.remove();
            window.location.href = "index.html";
        }, 100);
    });
}



// kar yağma animasyonu

/* ============================
   ❄️ WINTER MODE - KAR YAĞIŞI
   ============================ */

window.addEventListener("load", () => {
    const snowContainer = document.getElementById("snow-container");

    if (!snowContainer) {
        console.error("❌ snow-container bulunamadı");
        return;
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄";

        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
        snowflake.style.opacity = Math.random();

        snowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 10000);
    }

    setInterval(createSnowflake, 200);
});



// İLETİŞİM BUTONU KODLARI

const contactBtn = document.getElementById("contact-btn");
const popupOverlay = document.getElementById("popup-overlay");
const popupClose = document.getElementById("popup-close");

contactBtn.addEventListener("click", () => {
    popupOverlay.classList.add("active");
});

popupClose.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
});

//SKİLLS - DETAY BUTONU

document.addEventListener("DOMContentLoaded", () => {
    const detailButtons = document.querySelectorAll(".detail-btn");

    detailButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Detay sayfası daha sonra eklenecek");
        });
    });
});






