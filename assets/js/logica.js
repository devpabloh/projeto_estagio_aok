const formSection = document.getElementById('form-section');
const listSection = document.getElementById("list-section");
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const newProductBtn = document.getElementById("new-product-btn");

let products = []; // Aqui serão colocados os produtos cadastrados

// Função para cadastrar os produtos
productForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const name = document.getElementById("product-name").value; // Pegando o nome do produto
    const price = parseFloat(document.getElementById("product-price").value); // Pegando o preço do produto

    // Verifica se o nome e o preço são válidos
    if (name && !isNaN(price)) {
        // Adicionando produtos à lista
        products.push({ name, price });

        // Ordenando os produtos por valor do menor para o maior
        products.sort((a, b) => a.price - b.price);

        // Atualizando a listagem
        updateProductList();

        // Escondendo o formulário e mostrando a listagem
        formSection.classList.add('hidden');
        listSection.classList.remove('hidden');
    } else {
        alert("Por favor, preencha o nome e o preço do produto corretamente."); // Mensagem de erro
    }
});

// Função para atualizar a listagem de produtos
function updateProductList() {
    
    productList.innerHTML = ''; // Limpa a listagem atual

    products.forEach((product) => {
        const row = document.createElement("tr");

        // Verifica se o produto tem um preço válido antes de formatar
        const formattedPrice = !isNaN(product.price) ? product.price.toFixed(2) : "0.00";

        row.innerHTML = `
        <td>${product.name}</td>
        <td>${formattedPrice}</td>
        `;

        productList.appendChild(row);
    });
}

// Ação para exibir o formulário de novo produto
newProductBtn.addEventListener('click', function() {
    productForm.reset();

    formSection.classList.remove('hidden');
    listSection.classList.add('hidden');
});
