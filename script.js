const form = document.getElementById("formAposta");
const lista = document.getElementById("lista");

// Carregar apostas salvas
let apostas = JSON.parse(localStorage.getItem("apostas")) || [];

function mostrarApostas() {
  lista.innerHTML = "";

  apostas.forEach((aposta) => {
    const li = document.createElement("li");
    li.textContent = `${aposta.nome}: Brasil ${aposta.brasil} x ${aposta.haiti} Haiti`;
    lista.appendChild(li);
  });
}

// Salvar aposta
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const brasil = document.getElementById("brasil").value;
  const haiti = document.getElementById("haiti").value;

  const novaAposta = { nome, brasil, haiti };

  apostas.push(novaAposta);

  localStorage.setItem("apostas", JSON.stringify(apostas));

  form.reset();
  mostrarApostas();
});

// Inicializar
mostrarApostas();