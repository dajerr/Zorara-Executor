const fulImgBox = document.getElementById("fulImgBox"),
      fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
    fulImg.classList.add("img-animate");
    setTimeout(() => {
        fulImg.style.opacity = 1;
        fulImg.style.transform = 'scale(1)';
    }, 10); // Un pequeño retraso para asegurar que la clase se aplique antes de cambiar las propiedades.
}

function closeImg() {
    fulImg.style.opacity = 0;
    fulImg.style.transform = 'scale(0.7)';
    setTimeout(() => {
        fulImgBox.style.display = "none";
        fulImg.classList.remove("img-animate");
    }, 400); // Este retraso debe coincidir con la duración de la transición.
}



