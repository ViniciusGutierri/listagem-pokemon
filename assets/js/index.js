const btnAlterarTema = document.getElementById("btn-alterar-tema");
const body = document.querySelector("body");
const imgBtnAlteraTema = document.querySelector(".img-btn");

btnAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroAtivo) {
        imgBtnAlteraTema.setAttribute("src", "./assets/img/sun.png");
    } else {
        imgBtnAlteraTema.setAttribute("src", "./assets/img/moon.png");
    }
});
