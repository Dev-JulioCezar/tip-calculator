export default function Cardapio() {
  const btnProdutos = document.querySelectorAll(".containerPratos button");
  const divProdutos = document.querySelectorAll(".containerProdutos div");
  const AsidePratos = document.querySelector(".containerPratos");
  const containerProdutos = document.querySelector(".containerProdutos");

  btnProdutos.forEach((btn, indexBtn) => {
    btn.addEventListener("click", () => {
      divProdutos.forEach((div, indexDiv) => {

        div.style.display = indexDiv === indexBtn ? "flex" : "none";
        containerProdutos.style.display = "flex"
        remover()
      });
    });
  });

  function remover() {
    AsidePratos.style.display = "none";
  }
}
