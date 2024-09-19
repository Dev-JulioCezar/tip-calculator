export default function Calculadora() {
  const valorBill = document.getElementById("dolar");
  const porcentagem = document.querySelectorAll(".selectTip button");
  const pessoas = document.querySelector("#number");
  const tipAmount = document.querySelector(".amountValue");
  const tipTotal = document.querySelector(".totalValue");
  const confirmar = document.querySelector(".confirmar");
  const custom = document.querySelector("#porcent");
  const erroPeople = document.querySelector(".numberPeople input");
  const erroBill = document.querySelector(".bill input");

  //Variaveis do Extrato
  const divValorTotal = document.querySelector('#valorTotal');
  const divValorTip = document.querySelector("#valorTip");
  const divValorTipReais = document.querySelector("#ValorTipReais");
  const divPersonNum = document.querySelector("#personNum");
  const divValorPerson = document.querySelector("#valorPerson");

  let calculo = 0;

  porcentagem.forEach((button) => {
    let porcentagemLimpo = +button.textContent.replace("%", "");
    button.addEventListener("click", () => {
      divValorTip.textContent = `${porcentagemLimpo}%`;
      calculo = (porcentagemLimpo / 100) * Number(valorBill.value);
      porcentagem.forEach((a) => {
        a.id = "";
      });
      button.id = "ativo";
      custom.value = 0;
    });
  });

  custom.addEventListener("click", () => {
    porcentagem.forEach((a) => {
      a.id = "";
    });
    calculo = 0;
  });

  confirmar.addEventListener("click", () => {
    if (pessoas.value <= 0) {
      erroPeople.classList.add("alert");
      erroPeople.placeholder = "Can't be zero";
    }
    if (valorBill.value <= 0) {
      erroBill.classList.add("alert");
      erroBill.placeholder = "Can't be zero";
    } else if (+custom.value === 0) {
      tipAmount.textContent = `$${(calculo / pessoas.value).toFixed(2)}`;
      tipTotal.textContent = `$${(
        (calculo + +valorBill.value) /
        pessoas.value
      ).toFixed(2)}`;
      erroBill.classList.remove("alert");
      erroPeople.classList.remove("alert");
      divValorTipReais.textContent = tipAmount.textContent;
            divValorPerson.textContent = `${tipTotal.textContent} por pessoas`
    } else {
      let custonBill = (+custom.value / 100) * Number(valorBill.value);
      let custonTotal =
        (+custom.value / 100) * Number(valorBill.value) + +valorBill.value;
      tipAmount.textContent = `$${(custonBill / pessoas.value).toFixed(2)}`;
      tipTotal.textContent = `$${(custonTotal / pessoas.value).toFixed(2)}`;
      erroBill.classList.remove("alert");
      erroPeople.classList.remove("alert");
      divValorTipReais.textContent = tipAmount.textContent
      divValorTip.textContent = `${custonBill}%`;
      divValorPerson.textContent = `${tipTotal.textContent} por pessoas`
    }
  });
  
  pessoas.addEventListener("change", ()=>{
    divPersonNum.textContent = pessoas.value
  })

  confirmar.addEventListener("click", ()=>{
    divValorTotal.textContent = valorBill.value
  })
}
