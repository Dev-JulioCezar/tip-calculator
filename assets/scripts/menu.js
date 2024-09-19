export default function menuItens() {
  const menuEntradas = document.querySelector(".containerEntradas");
  const PratosPricipais = document.querySelector(".containerPratosPricipais");
  const menuDrinks = document.querySelector(".containerDrinks");
  const menuSobremesas = document.querySelector(".containerSobremesas");
  const containerPedidos = document.querySelector(".listaPedidos");
  const containerPratos = document.querySelectorAll(".containerPratos button");
  const itensPedidos = document.querySelector(".itensPedidos");
  const containerExtrato = document.querySelector(".ListadeItem");
  const valorBill = document.getElementById("dolar");

  let total = 0;

  async function innerItens() {
    try {
      const dadosApi = await fetch("http://localhost:3000/menu");
      const itensMenu = await dadosApi.json();

      itensMenu.entradas.forEach((itens) => {
        const botao = criarBotao(menuEntradas);
        botao.innerText = `${itens.nome} \n R$ ${itens.preco}`;
      });

      itensMenu.pratos_principais.forEach((itens) => {
        const botao = criarBotao(PratosPricipais);
        botao.innerText = `${itens.nome} \n R$ ${itens.preco}`;
      });

      itensMenu.bebidas.forEach((itens) => {
        const botao = criarBotao(menuDrinks);
        botao.innerText = `${itens.nome} \n R$ ${itens.preco}`;
      });

      itensMenu.sobremesas.forEach((itens) => {
        const botao = criarBotao(menuSobremesas);
        botao.innerText = `${itens.nome} \n R$ ${itens.preco}`;
      });
    } catch (error) {
      alert("Não foi possivel acessar a nossa API. Tente novamente mais tarde")
      console.log(
        error,
        "Não foi possivel acessar a nossa API. Tente novamente mais tarde"
      );
    }
    // Botões de interação da lista Produtos
    const btnsListaProdutos = document.querySelectorAll(".botaoLista");
    btnsListaProdutos.forEach((i) => {
      i.addEventListener("click", () => {
        const arrayProdutos = i.innerHTML
          .replace("<br>", "")
          .replace("R$", "")
          .replace("  ", "")
          .split(" ");
        const preco = +arrayProdutos[arrayProdutos.length - 1];
        const item = i.innerHTML
          .replace("<br>", "")
          .replace("R$", "")
          .replace(preco, "");
        itensPedidos.innerHTML += `<li>${item} R$ ${preco} <button>-</button></li>`;
        containerExtrato.innerHTML += `<li>${item} R$ ${preco}</li>`;
        total += preco;
        let totalNovo = total.toFixed(2);
        valorBill.value = totalNovo;
        const btnRemover = document.querySelectorAll(".itensPedidos button");
        const liItem = document.querySelectorAll(".itensPedidos li");
        const liItemExt = document.querySelectorAll(".ListadeItem li");
        btnRemover.forEach((i, index) => {
          i.addEventListener("click", () => {
            liItem[index].remove();
            liItemExt[index].remove();
          });
        });
      });
    });
  }
  innerItens();

  function criarBotao(elemento) {
    const botao = document.createElement("button");
    botao.classList.add("botaoLista");
    elemento.appendChild(botao);
    return botao;
  }

  containerPratos.forEach((i) => {
    i.addEventListener("click", () => {
      containerPedidos.classList.add("ativo");
    });
  });
}
