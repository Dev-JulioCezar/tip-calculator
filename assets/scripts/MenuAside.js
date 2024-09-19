export default function MenuAside() {
  const menuAside = document.querySelectorAll("#menuAside li");
  const containerAll = document.querySelectorAll(".container");
  const listaPedidos = document.querySelector(".listaPedidos")
  menuAside.forEach((item, index) => {
    item.addEventListener("click", () => {
      listaPedidos.classList.remove("ativo")
      containerAll.forEach((container, i) => {
        container.style.display = i === index ? "grid" : "none";
      });
    });
  });
}
