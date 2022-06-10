
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const qtd = parseInt(document.querySelector('#quantidade').value);
    const description = document.querySelector('#descricao').value;
    const price = parseFloat(document.querySelector('#preco').value.toString().replace(',', '.'));
    const total = qtd * price;

    const tobdy = document.querySelector('#tbody');
    const tr = document.createElement('tr');
    const tdQtd = document.createElement('td');
    const tdDescription = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQtd.innerHTML = qtd;
    tdDescription.innerHTML = description;
    tdPrice.innerHTML = price;
    tdTotal.innerHTML = total;

    tr.appendChild(tdQtd);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr);
});