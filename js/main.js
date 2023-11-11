let landing = document.querySelector(".landing");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let images = ["wallpaper6.jpg", "wallpaper5.jpg", "wallpaper3.jpg"];
let i = 0;
landing.style.backgroundImage = `url(../images/wallpaper/${images[0]})`;

setInterval(() => {
    landing.style.backgroundImage = `url(../images/wallpaper/${images[i]})`;
    (i < images.length - 1) ? i++ : i = 0;
    console.log(i)
}, 5000)




