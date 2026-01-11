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
const cards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));



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
