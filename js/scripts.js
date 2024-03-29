// Seleciona todos os botões de cor no seletor de imagem
const buttons = document.querySelectorAll("#image-picker li");

// Seleciona a imagem do produto
const image = document.querySelector("#product-image");

// Para cada botão de cor, adiciona um evento de clique
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Exibe o evento de clique no console para depuração
    console.log(e);

    // Remove a classe "selected" de todos os botões de cor
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    // Obtém o botão de cor clicado
    const button = e.target;

    // Obtém o ID do botão de cor clicado
    const id = button.getAttribute("id");

    // Adiciona a classe "selected" ao botão de cor clicado para indicar seleção
    button.querySelector(".color").classList.add("selected");

    // Adiciona a classe "changing" à imagem para aplicar uma transição de mudança de imagem
    image.classList.toggle("changing");

    // Altera dinamicamente o atributo src da imagem para exibir a imagem da cor selecionada
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    // Aguarda 200 milissegundos e remove a classe "changing" para concluir a transição
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
