export default function listaMenuItens(){
const menu = document.querySelectorAll(".containerPratos button");
const listaPedidos = document.querySelector(".listaPedidos");
// const btnsListaProdutos = document.querySelectorAll(".botaoLista");


menu.forEach((i)=>{
  i.addEventListener("click", ()=>{
    listaPedidos.classList.add("ativo")
  })
})



}

