const section = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
    mainFn();
});
mainFn();
window.addEventListener("resize", () => {
    window.location.reload();
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});



