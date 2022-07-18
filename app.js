const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");



arrows.forEach((arrow, i) => {
    const imglength = movielists[i].querySelectorAll("img").length;
    let clickcounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(innerWidth / 200);
        clickcounter++;
        if (imglength - (5 + clickcounter) + (7 - ratio) >= 0) {
            movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value - 200}px)`;
        }
        else {
            movielists[i].style.transform = "translateX(0)";
            clickcounter = 0;

        }
    });
    console.log(Math.floor(innerWidth / 200))
})


// toggle
const ball = document.querySelector(".toggleball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.left-menu-icons,.movie-list-title,.toggle");

ball.addEventListener("click", () => {
    items.forEach(ihh=> {
        ihh.classList.toggle("active")
    })
    ball.classList.toggle("active");
})