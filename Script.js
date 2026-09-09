const modal = document.getElementById("modalAjuda");
const abrir = document.getElementById("abrirAjuda");
const fechar = document.getElementById("fecharAjuda");

abrir.onclick = () => {
  modal.style.display = "flex";
};

fechar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
