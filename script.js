const inputItem = document.getElementById("inputItem");
const inputAmount = document.getElementById("inputAmount");
const inputPrice = document.getElementById("inputPrice");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const item = listaItems[index];
    const row = document.createElement("tr");

    const descricao = document.createElement("td");
    descricao.appendChild(document.createTextNode(item.descricao));
    row.appendChild(descricao);

    const qtd = document.createElement("td");
    qtd.appendChild(document.createTextNode(item.qtd));
    row.appendChild(qtd);

    const preco = document.createElement("td");
    preco.appendChild(document.createTextNode(item.preco));
    row.appendChild(preco);

    lista.appendChild(row);
  }
};

const handleBtAdicionarClick = () => {
  const descricao = inputItem.value;
  const qtd = inputAmount.value;
  const preco = inputPrice.value;

  if (!descricao || !qtd || !preco) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  const item = { descricao, qtd, preco };
  listaItems.push(item);
  inputItem.value = "";
  inputAmount.value = "";
  inputPrice.value = "";
  inputItem.focus();
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;