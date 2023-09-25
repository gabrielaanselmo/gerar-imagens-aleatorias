var img; // variável global para armazenar o elemento de imagem atual

function gerarImagem() {
  var lugar = "Cats";
  var url =
    "https://api.unsplash.com/photos/random?query=" +
    lugar +
    "&client_id=d5MnN_J-lWE_g4q-dE88pK-nF_uwTszfTxyNwtaebtU";
  var xhr = new XMLHttpRequest(); // cria um objeto XMLHttpRequest para enviar a solicitação
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var novaImg = document.createElement("img"); // cria um novo elemento de imagem
      novaImg.src = JSON.parse(xhr.responseText).urls.regular; // define o caminho da nova imagem recebida pela API
      if (img) {
        // se já houver uma imagem exibida, remova-a antes de adicionar a nova
        document.body.removeChild(img);
      }
      img = novaImg; // armazena a nova imagem na variável global
      document.body.appendChild(img); // adiciona a nova imagem ao corpo da página
    }
  };
  xhr.open("GET", url, true); // define o método de solicitação e o endereço da API
  xhr.send(); // envia a solicitação
}
